import { useState } from "react"
import "./Comment.css"
import CommentsForm from "./commentsForm"
const Comment = () => {
    let [comments,setComments] = useState([{
        username:"@SB",
        remarks:"great job!",
        rating:5
    }])

    let addnewComment = (comment) =>{
        setComments((currComments)=>[...currComments,comment])
    }

  return (
    <>
    <div>
      <h3>All Comments</h3>
      {comments.map((comment,idx)=>(
        <div className="comment" key={idx}>
        <span>{comment.remarks}</span>
        &nbsp;
        <span>(rating={comment.rating})</span>
        <p>-{comment.username}</p>
        </div>
      ))}
      <CommentsForm addnewComment={addnewComment}/>
    </div>
    <hr></hr>
    
    </>
  )
}

export default Comment
