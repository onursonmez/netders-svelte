import { get } from 'svelte/store'
import { userStore } from '/src/stores/userStore'
import { accountModel } from '/src/models/userModel'
import { searchParamsModel } from '/src/models/searchModel'
import { responseService } from '/src/utils/responseService'

export async function getUsers(params = {})
{
    let searchParams = {...searchParamsModel, ...params}
    const result = await fetch(import.meta.env.VITE_API_URL + '/user/search',
        {
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            method: 'POST',
            body: JSON.stringify({
                'page' : searchParams?.page,
                'pageSize' : searchParams?.pageSize,
                'field': searchParams?.field,
                'order': searchParams?.order,
                'keyword' : searchParams?.keyword,
                'budget' : parseInt(searchParams?.budget),
                'cityId' : searchParams?.cityObject?.id,
                'countyId' : searchParams?.countyObject?.id,
                'subjectId' : searchParams?.subjectObject?.id,
                'levelId' : searchParams?.levelObject?.id,
                'categoryId': searchParams?.categoryObject?.id,
                'lessonTypeId' : searchParams?.lessonTypeObject?.id,
                'genderId' : searchParams?.genderObject?.id,
            })
        },
    );

    const body = await result.json()

    return body.result
}

export async function getTeacherSearchStoreParamsBySearchParams(params = [])
{
    const response = await fetch(import.meta.env.VITE_API_URL + '/user/gtsspbsp',
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                query: params?.query
            })
        },
    );

    const result = await response.json()

    return responseService(result)
}

export async function getUser(username)
{
    const response = await fetch(import.meta.env.VITE_API_URL + '/user/detail/' + username,
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

export async function getUserIsExists(param)
{
    const q = new URLSearchParams(param).toString()
    const response = await fetch(import.meta.env.VITE_API_URL + '/user/is_exists?' + q,
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
