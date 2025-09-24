import { useState, useEffect } from "react"

import MySelect from "../../ui/MySelect/MySelect";

const SortComponent = ({ posts, sortHandler }) => {

    const [sortObject, setSortObject] = useState({ accendingDescending: 'accending', textContentSortCriterion: 'id' })

    useEffect(() => {
        if (sortObject.sortChriterion === 'id') {
            sortHandler([...posts.sort((a, b) => sortObject.accendingDescending === 'accending' ? a.id - b.id : b.id - a.id)])
        } else if (sortObject.sortChriterion === 'title') {
            sortHandler([...posts.sort((a, b) => sortObject.accendingDescending === 'accending' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title))])
        } else if (sortObject.sortChriterion === 'description') {
            sortHandler([...posts.sort((a, b) => sortObject.accendingDescending === 'accending' ? a.description.localeCompare(b.description) : b.description.localeCompare(a.description))])
        }
    }, [sortObject, posts])

    const accendingDescendingHandler = (e) => {
        setSortObject({ ...sortObject, accendingDescending: e.target.value });
    }

    const sortChriterionHandler = (e) => {
        setSortObject({ ...sortObject, sortChriterion: e.target.value });
    }

    console.log(sortObject);
    

    return (
        <>
            <MySelect
                options={
                    [
                        { value: "id", textContent: "Sort by id" },
                        { value: "title", textContent: "Sort by title" },
                        { value: "description", textContent: "Sort by description" },
                    ]}
                // defaultValue="Select sort method"
                onChange={sortChriterionHandler}
                value={sortObject.sortChriterion}
            />
            <MySelect
                options={
                    [
                        { value: "accending", textContent: "Accending" },
                        { value: "descending", textContent: "Descending" },
                    ]}
                // defaultValue="Accending/Descending"
                onChange={accendingDescendingHandler}
                value={sortObject.accendingDescending}
            />
        </>
    )
}

export default SortComponent