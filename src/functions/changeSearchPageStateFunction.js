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

    if(pageData.lessonType)
        page.url.searchParams.set('lesson_type', pageData.lessonType.id)
    else
        page.url.searchParams.delete('lesson_type')

    if(pageData.gender)
        page.url.searchParams.set('gender', pageData.gender.id)
    else
        page.url.searchParams.delete('gender')

    let finalState = []
    let queryParams = Array.from(page.url.searchParams).length > 0 ? '?' + page.url.searchParams.toString() : ''

    if(pageData.city?.slug || pageData.county?.slug)
        finalState.push(pageData.county?.slug ? pageData.county?.slug : pageData.city?.slug)

    if(pageData.category?.slug){
        finalState.push(pageData.category?.slug)
    } else {
        if(pageData.subject?.slug || pageData.level?.slug)
            finalState.push(pageData.level?.slug ? pageData.level?.slug : pageData.subject?.slug)
    }

    if(finalState.length > 0){
        window.history.pushState('', '', finalState.join('-') + '-ozel-ders' + queryParams);
    } else {
        window.history.pushState('', '', 'ozel-ders' + queryParams);
    }
}
