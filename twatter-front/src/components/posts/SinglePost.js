import { useState, useEffect } from "react";

const SinglePost = (props)=>{
    return(
    <div id={props.id}>
        <h3>{props.twatt.date}</h3>
        <p>
            {props.twatt.text}
        </p>
    </div>
    )
}

export default SinglePost;