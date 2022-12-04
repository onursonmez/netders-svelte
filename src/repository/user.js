import { get } from 'svelte/store'
import { teacherSearchParamsStore, teacherItemsStore, teacherTotalStore, viewedTeacherStore } from '/src/stores/userStore'

export async function getUsers(params = {})
{
    const searchParams = Object.entries(params).length > 0 ? params : get(teacherSearchParamsStore)

    const result = await fetch(import.meta.env.VITE_API_URL + 'user/teachers',
        {
            headers:{
                'Content-Type': 'application/json',
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
    const response = await fetch(import.meta.env.VITE_API_URL + 'user/login',
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

export async function photo(username)
{
    const response = await fetch(import.meta.env.VITE_API_URL + 'user/photo/' + username,
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    );

    const body = await response.json()

    return body.result
}

export async function getTeacherSearchStoreParamsBySearchParams(params = [])
{
    const response = await fetch(import.meta.env.VITE_API_URL + 'user/gtsspbsp',
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

    const body = await response.json()

    teacherSearchParamsStore.set(body.result)

    return body.result
}

export async function getUser(username)
{
    const response = await fetch(import.meta.env.VITE_API_URL + 'user/one_user/' + username,
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    )

    const body = await response.json()

    viewedTeacherStore.set(body.result)

    return body
}

export async function getTeacher(username)
{
    const response = await fetch(import.meta.env.VITE_API_URL + 'user/one_teacher/' + username,
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    )

    const body = await response.json()

    viewedTeacherStore.set(body.result)

    return body
}

export async function getUserPrices(username)
{
    const response = await fetch(import.meta.env.VITE_API_URL + 'user/prices/' + username,
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    )

    const body = await response.json()

    return body
}

export async function getUserLocations(username)
{
    const response = await fetch(import.meta.env.VITE_API_URL + 'user/locations/' + username,
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    )

    const body = await response.json()

    return body
}
