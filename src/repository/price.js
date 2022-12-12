import { responseService } from '/src/utils/responseService'

export async function getUserPrices(username)
{
    const response = await fetch(import.meta.env.VITE_API_URL + '/price/' + username,
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    )

    const result = await response.json()

    return responseService(result)
}

export async function getUserPriceDetail(slug)
{
    const response = await fetch(import.meta.env.VITE_API_URL + '/price/detail/' + slug,
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    )

    return await response.json()
}
