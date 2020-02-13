import React from 'react'
import './Post.css'

function Post (props){
    return(
        <div className="post">
            { props.children }
        </div>
    )
}

export default Post