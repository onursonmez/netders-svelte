import { dev } from '$app/environment';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

/*
export async function load({ url })
{
    let page = 1
    let pageSize = 3
    let keyword = 'matematik'

    const teachers = await fetch('https://api.netders.com/public/user/teachers',
    {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                page,
                pageSize,
                keyword
            })
        },
    );

    if (teachers){
        return await teachers.json()
    }
}
*/
