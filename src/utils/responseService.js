import { toast } from '/src/functions/toast'

export function responseService(body){

    if(Object.entries(body).length > 0)
    {
        if(Object.values(body.errors).length > 0) {
            Object.values(body.errors).forEach(i => {
                toast(i, 'danger')
            })
        } else {
            return body.result.items ? body.result.items : body.result
        }
    }
}
