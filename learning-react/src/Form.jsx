import { useState } from "react";

export default function Form() {
let [formData,setFormData] = useState({
fullName:"",
username:"",
password:"",
});

  let handleNameChange = (event) => {
   let fieldName = event.target.name;
   let newValue = event.target.value;

   setFormData((currData) => {
    return{...currData ,[fieldName]: newValue};
   });
  };

  let handleUsername = (event) => {
    (event.target.value);
  };

let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
setFormData({
    fullName : "",
    username:"",
    password:"",
});
}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        placeholder="Enter Full Name"
        type="text"
        value={formData.fullName}
        onChange={handleNameChange}
        id="fullName"
      />

      <br />
      <br />

      <label htmlFor="username">Username</label>
      <input
        placeholder="Enter username"
        type="text"
        value={formData.username}
        onChange={handleUsername}
        id="username"
      />

      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input
        placeholder="Enter Password"
        type="text"
        value={formData.password}
        id="password"
        name="password"
          onChange={handleNameChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}