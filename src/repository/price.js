export async function getUserPrices(username)
{
    const response = await fetch(import.meta.env.VITE_API_URL + 'price/' + username,
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    )

    return await response.json()
}

export async function getUserPriceDetail(slug)
{
    const response = await fetch(import.meta.env.VITE_API_URL + 'price/detail/' + slug,
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    )

    return await response.json()
}
