import { browser } from '$app/environment';
import { toast } from '/src/functions/toast'
import {error} from "@sveltejs/kit";

export function responseService(body){

    if(Object.entries(body).length > 0)
    {
        if(Object.entries(body.errors).length > 0) {
            if (!browser) {
                throw error(body.code, body.errors);
            } else {
                Object.values(body.errors).forEach(i => {
                    toast(i, 'danger')
                })
            }
        } else {
            return body.result?.items ? body.result.items : body.result
        }
    }
}
