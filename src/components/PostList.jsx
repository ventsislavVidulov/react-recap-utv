import PostItem from "./PostItem";

const PostList = (props) => {
    return (
        <div className='app'>
            <h1 style={{ textAlign: "center" }}>{props.listTitle}</h1>
            {
                props.posts.map(p =>
                    <PostItem key={p.id} id={p.id} title={p.title} description={p.description} />
                )
            }
        </ div>
    )
}

export default PostList;