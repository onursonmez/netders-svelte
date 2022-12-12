import { userStore } from '/src/stores/userStore'

export const load = async ({ request, locals, cookies }) => {

    if(Object.entries(locals.user).length > 0){
        userStore.set(locals.user)
    }

    return {
        user: locals.user
    }
}
