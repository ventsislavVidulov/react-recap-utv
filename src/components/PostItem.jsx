import React from 'react'

const PostItem = (props) => {
  return (
      <div className="post">
        <div className="post__content">
          <strong>{props.id + ". " + props.title}</strong>
          <div>{props.description}</div>
        </div>
        <div className="post__btns">
          <button>Delete post</button>
        </div>
      </div>
  )
}

export default PostItem