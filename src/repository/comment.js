import { responseService } from '/src/utils/responseService'

export async function getUserComments(username)
{
    const response = await fetch(import.meta.env.VITE_API_URL + '/comment/list/' + username,
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    );

    const result = await response.json()

    return responseService(result)
}

export async function addComment(params = [])
{
    const response = await fetch(import.meta.env.VITE_API_URL + '/comment/add',
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                'username': params?.username,
                'rate': params?.rate,
                'fullName': params?.fullName,
                'email': params?.email,
                'comment': params?.comment,
            })
        },
    );

    return await response.json()
}
