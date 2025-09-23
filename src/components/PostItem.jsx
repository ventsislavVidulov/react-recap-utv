import React from 'react'
import MyButton from '../ui/MyButton/MyButton'

const PostItem = (props) => {
  return (
      <div className="post">
        <div className="post__content">
          <strong>{props.id + ". " + props.title}</strong>
          <div>{props.description}</div>
        </div>
        <div className="post__btns">
          <MyButton handler={props.deletePostHandler} id={props.id} submit={false}>Delete post</MyButton>
        </div>
      </div>
  )
}

export default PostItem;