import {useState} from "react";
// import {useFormik} from "formik";

export default function CommentsForm({ addNewComment }) {
let[formData,setFormData] = useState({
username: "",
remarks: "",
rating: "5",
});

// const formik = useFormik({
// initialValues:{
//  username: "",
//  remarks:"",
//     rating:5,
// }
// // validate,
// onSubmit: values => {
//     alert(JSON.stringify(values,null,2));
// },
// });


let[isValid,SetIsValid] = useState(true);

let handleInputChange = (event) => {
setFormData((currData) => {
    return {...currData, [event.target.name]: event.target.value};
});
};
let handleSubmit = (event) => {
    SetIsValid(false);
event.preventDefault();
addNewComment(formData);
setFormData({
username: "",
remarks: "",
rating: "5",
});
};

return (
    <div>
<h3> Give a comment</h3>

<form onSubmit={handleSubmit} >
    <label htmlFor="username">Username</label>
<input name="username" placeholder="username" type="text" value={formData.username} onChange={handleInputChange} />
{!isValid && <p style={{color: "red"}} >UserName cannot be empty</p>}
<br></br><br></br>
    <label htmlFor="ramarks">Remarks</label>
<textarea name="remarks" value={formData.remarks} placeholder="remarks" onChange={handleInputChange}></textarea>
<br></br><br></br>
  <label htmlFor="Rating">Rating</label>
<input placeholder="rating" type="number" 
name="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} />
<br></br><br></br>
<button>add a comment</button>
</form>
    </div>
);
}
