export function changeSearchPageStateFunction(pageData, page)
{
    if(pageData.keyword)
        page.url.searchParams.set('keyword', pageData.keyword)
    else
        page.url.searchParams.delete('keyword')

    if(pageData.budget){
        page.url.searchParams.set('budget', pageData.budget)
    } else {
        page.url.searchParams.delete('budget')
    }

    if(pageData.lessonTypeObject)
        page.url.searchParams.set('lesson_type', pageData.lessonTypeObject.id)
    else
        page.url.searchParams.delete('lesson_type')

    if(pageData.genderObject)
        page.url.searchParams.set('gender', pageData.genderObject.id)
    else
        page.url.searchParams.delete('gender')

    let finalState = []
    let queryParams = Array.from(page.url.searchParams).length > 0 ? '?' + page.url.searchParams.toString() : ''

    if(pageData.cityObject?.slug || pageData.countyObject?.slug)
        finalState.push(pageData.countyObject?.slug ? pageData.countyObject?.slug : pageData.cityObject?.slug)

    if(pageData.subjectObject?.slug || pageData.levelObject?.slug)
        finalState.push(pageData.levelObject?.slug ? pageData.levelObject?.slug : pageData.subjectObject?.slug)

    if(finalState.length > 0){
        window.history.pushState('', '', '/ozel-ders-ilanlari-verenler/' + finalState.join('/') + queryParams);
    } else {
        window.history.pushState('', '', '/ozel-ders-ilanlari-verenler' + queryParams);
    }
}
