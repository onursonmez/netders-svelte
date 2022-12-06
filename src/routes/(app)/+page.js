import { userStore } from '/src/stores/userStore'

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

export const load = async ({ parent }) => {
    const { user } = await parent();
    if(Object.entries(user).length > 0){
        userStore.set(user)
    }
};
