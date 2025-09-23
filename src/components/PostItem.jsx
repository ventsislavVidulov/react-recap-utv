import React from 'react'

const PostItem = () => {
  return (
      <div className="post">
        <div className="post__content">
          <strong> 1. Java Script</strong>
          <div>Java Script is a script language, used for web development and others</div>
        </div>
        <div className="post__btns">
          <button>Delete post</button>
        </div>
      </div>
  )
}

export default PostItem