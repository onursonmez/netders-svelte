export function addEmptyOption(items, identifier = 'title'){
    if(items.length > 0)
    {
        let assign = []
        let keys = Object.keys(items[0])

        keys.forEach((key) => {
            if(key === identifier)
                assign[key] = "-- Lütfen Seçin --"
            else if(key === 'id')
                assign[key] = "0"
            else
                assign[key] = ""
        })

        assign = Object.assign({}, assign)

        return [assign, ...items]
    }

    return items
}
