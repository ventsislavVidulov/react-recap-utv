import { useState, useEffect, useMemo } from "react"

import MySelect from "../../ui/MySelect/MySelect";
import ControledInput from "../../ui/ControledInput/ControledInput";
import { usePosts } from "../../hooks/usePosts";

const SortComponent = ({ posts, sortHandler }) => {

    const [sortObject, setSortObject] = useState({ accendingDescending: 'accending', sortChriterion: 'id', searchQuery: '' });
    const sortedPosts = usePosts(posts, sortObject);

    useEffect(() => {
        sortHandler([...sortedPosts])
    }, [sortObject, posts])

    const accendingDescendingHandler = (e) => {
        setSortObject({ ...sortObject, accendingDescending: e.target.value });
    }

    const sortChriterionHandler = (e) => {
        setSortObject({ ...sortObject, sortChriterion: e.target.value });
    }

    const searchHandler = (value) => {
        setSortObject({ ...sortObject, searchQuery: value });
    }

    return (
        <>
            <ControledInput
                placeholder="Search..."
                handler={searchHandler}
            />
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