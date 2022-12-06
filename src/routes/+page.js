import { dev } from '$app/environment'
import { userStore } from '/src/stores/userStore'

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

export const load = async ({ parent }) => {
    const { user } = await parent();

    if(Object.entries(user).length > 0){
        userStore.set(user)
    }
};
