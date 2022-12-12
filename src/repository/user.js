import { get } from 'svelte/store'
import { teacherSearchParamsStore, viewedTeacherStore, userStore } from '/src/stores/userStore'
import { accountModel } from '/src/models/userModel'
import { searchParamsModel } from '/src/models/searchModel'
import { responseService } from '/src/utils/responseService'

export async function getUsers(params = {})
{
    let searchParams = {...searchParamsModel, ...params}
    const result = await fetch(import.meta.env.VITE_API_URL + '/user/teachers',
        {
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            method: 'POST',
            body: JSON.stringify({
                'page' : searchParams?.page,
                'pageSize' : searchParams?.pageSize,
                'keyword' : searchParams?.keyword,
                'budget' : searchParams?.budget,
                'cityId' : searchParams?.cityObject?.id,
                'countyId' : searchParams?.countyObject?.id,
                'subjectId' : searchParams?.subjectObject?.id,
                'levelId' : searchParams?.levelObject?.id,
                'lessonTypeId' : searchParams?.lessonTypeObject?.id,
                'genderId' : searchParams?.genderObject?.id,
            })
        },
    );

    const body = await result.json()

    return body.result
}

export async function login(params = [])
{
    const response = await fetch(import.meta.env.VITE_API_URL + '/user/login',
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                'login' : params?.login,
                'password' : params?.password,
                'rememberMe': params?.rememberMe,
            })
        },
    );

    return await response.json()
}

export async function getUserByToken(token)
{
    if(!token){
        return {}
    }

    const response = await fetch(import.meta.env.VITE_API_URL + '/user/get_user_by_token',
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                'token' : token,
            })
        },
    );

    let result = await response.json()

    return result.result
}

export async function getUserPhoto(username)
{
    const response = await fetch(import.meta.env.VITE_API_URL + '/user/photo/' + username,
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
    const response = await fetch(import.meta.env.VITE_API_URL + '/user/one_user/' + username,
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

export async function getTeacher(username)
{
    const response = await fetch(import.meta.env.VITE_API_URL + '/user/one_teacher/' + username,
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

export async function getUserLocations(username)
{
    const response = await fetch(import.meta.env.VITE_API_URL + '/user/locations/' + username,
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

export async function updateUser(params = [])
{
    const bodyParams = Object.entries(params).length > 0 ? params : accountModel
    const userStoreData = get(userStore)

    const response = await fetch(import.meta.env.VITE_API_URL + '/member/user/update',
        {
            headers:{
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': userStoreData?.token
            },
            method: 'POST',
            body: JSON.stringify(bodyParams)
        },
    );

    const result = await response.json()

    return responseService(result)
}
