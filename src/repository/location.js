import { citiesStore } from "../stores/locationStore";

export async function getCities()
{
    const result = await fetch(import.meta.env.VITE_API_URL + 'location/cities',
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    );

    const body = await result.json()

    citiesStore.set(body.result.items)

    return body.result
}

export async function getCounties(params = [])
{
    const result = await fetch(import.meta.env.VITE_API_URL + 'location/counties/' + params?.cityId,
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    );

    const body = await result.json()

    return body.result
}

export async function getOneCityBy(params = [])
{
    const result = await fetch(import.meta.env.VITE_API_URL + 'location/city',
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                'id': params?.id,
                'slug': params?.slug,
            })
        },
    );

    const body = await result.json()

    return body.result
}

export async function getOneCountyBy(params = [])
{
    const result = await fetch(import.meta.env.VITE_API_URL + 'location/county',
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                'id': params?.id,
                'slug': params?.slug,
            })
        },
    );

    const body = await result.json()

    return body.result
}
