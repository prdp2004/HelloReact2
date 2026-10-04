import {useState} from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";


export default function Comment () {
    let[comments,setComments] = useState([{
username: "@prdp",
remarks: "Great Work",
rating: "4.5",
    }]);

let addNewComment = (comment) => {
setComments ((currComments) => [...currComments,comment]);
console.log("Added New Comment");
};


return (
<div>  
     <h2>All Comments</h2>
     {comments.map((comment,idx) => (
        <div className="comment" key={idx}>
<span>{comment.remarks}</span>
&nbsp;
<span>(rating={comment.rating})</span>
<p> - {comment.username}</p>
</div>
     ))}

<hr></hr>
<CommentsForm addNewComment={addNewComment}/>
</div>


);
}
