import { fail, redirect, error } from '@sveltejs/kit';
import * as api from '$lib/api';

export async function load({ locals }) {
    if (!locals.auth) throw redirect(302, '/auth/login');

    const subjects = await api.get('lesson/subjects', locals.auth.token)
    const categories = await api.get('category/list', locals.auth.token)
    const prices = await api.get('price/' + locals.auth.uuid, locals.auth.token)
    return {
        prices : prices.result,
        subjects: subjects.result,
        categories: categories.result,
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    new: async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            levelIds: data.get('levelIds'),
            pricePrivate: parseFloat(data.get('pricePrivate')),
            priceLive: parseFloat(data.get('priceLive')),
        };

        if(!data.get('levelIds')){
            return fail(400, {'errors': {'badRequest': 'Ders seçilmedi!'}});
        }

        if(!data.get('pricePrivate') && !data.get('priceLive')){
            return fail(400, {'errors': {'badRequest': 'Ders ücreti belirlenmedi!'}});
        }

        const body = await api.post('member/price/new', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return fail(body.code, body);

        const user = await api.get('member/user/verify', locals.auth.token);
        locals.auth = user.result

        return body.result
    },

    update_multi: async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        if(data.get('delete')){
            let id = parseInt(data.get('delete'))
            let body = await api.del('member/price/delete/' + id, locals.auth.token);
            if (Object.entries(body.errors).length) return fail(body.code, body);
            return body.result
        }

        let priceData = [];
        data.forEach((price, priceObject) => {
            let priceArray = priceObject.split('_')
            let name = priceArray[0]
            let id = priceArray[1]

            let isExist = priceData.find(obj => {
                return obj.id === id
            })
            if(isExist){
                isExist[name] = price;
            } else {
                priceData.push({'id': id, [name]: price})
            }
        })


        let body = await api.put('member/price/update', priceData, locals.auth.token);

        if (Object.entries(body.errors).length) return fail(body.code, body);

        return body.result
    },

    update: async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            id: data.get('id'),
            title: data.get('title'),
            content: data.get('content'),
            pricePrivate: data.get('pricePrivate'),
            priceLive: data.get('priceLive'),
        }

        let body = await api.put('member/price/update', formData, locals.auth.token);

        if (Object.entries(body.errors).length) return fail(body.code, body);

        return body.result
    },
};
