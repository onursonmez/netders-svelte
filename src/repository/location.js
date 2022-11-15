import { env } from '$env/dynamic/public'
import { citiesStore } from "../stores/locationStore";

export async function getCities()
{
    const result = await fetch(env.PUBLIC_API_URL + 'location/cities',
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
    const result = await fetch(env.PUBLIC_API_URL + 'location/counties/' + params?.cityId,
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
