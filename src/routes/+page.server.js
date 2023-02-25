import * as api from '$lib/api';
import {fail} from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
    logout: async ({cookies, locals}) => {
        cookies.delete('jwt', {path: '/'});
        locals.auth = null;
    },

    sendApprove: async ({cookies, locals}) => {
        const user = await api.get('member/user/set_approval', locals.auth.token);
        locals.auth = user.result
    },

    upload: async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            photo: data.get('photo'),
            photoType: data.get('photoType'),
        };

        const body = await api.post('member/photo/upload', formData, locals.auth.token);

        if (Object.entries(body.errors).length) return fail(body.code, body.errors);

        locals.auth.photo.url = body.result

        return body.result;
    },
}
