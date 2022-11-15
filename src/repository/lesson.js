import { env } from '$env/dynamic/public'
import { subjectsStore } from "../stores/lessonStore";

export async function getSubjects()
{
    const result = await fetch(env.PUBLIC_API_URL + 'lesson/subjects',
        {
            headers:{
                'Content-Type': 'application/json',
            },
            method: 'GET',
        },
    );

    const body = await result.json()

    subjectsStore.set(body.result.items)

    return body.result
}

export async function getLevels(params = [])
{
    const result = await fetch(env.PUBLIC_API_URL + 'lesson/levels/' + params.subjectId,
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
