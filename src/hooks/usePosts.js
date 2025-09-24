import { useMemo } from "react"

export const usePosts = (posts, sortObject) => {
    const sortedPosts = useMemo(() => {
        // console.log('Use memo called');
        if (sortObject.sortChriterion === 'id') {
            return [...posts.sort((a, b) => sortObject.accendingDescending === 'accending' ? a.id - b.id : b.id - a.id)]
        } else if (sortObject.sortChriterion === 'title') {
            return [...posts.sort((a, b) => sortObject.accendingDescending === 'accending' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title))]
        } else if (sortObject.sortChriterion === 'description') {
            return [...posts.sort((a, b) => sortObject.accendingDescending === 'accending' ? a.description.localeCompare(b.description) : b.description.localeCompare(a.description))]
        }
    }, [sortObject.accendingDescending, sortObject.sortChriterion, posts])

    return [...sortedPosts.filter(p => p.title.toLowerCase().includes(sortObject.searchQuery.toLowerCase()))]
}