import { useState } from "react";
import { useFormik } from "formik";



const CommentsForm = ({addnewComment}) => {
  // let [formData, setformData] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: 5,
  // });
  const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username cannot be empty';
    }
  
    return errors;
  };

    const formik = useFormik({
      initialValues:{
        username:'',
        remarks:'',
        rating:5
      },
      validate,
      onSubmit:values=>{
        alert(JSON.stringify(values,null,2))
      }
    })


  // let handleinputChange = (event) => {
  //   setformData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };
  

  // let handleSubmit = (event) => {
  //   if(!formData.username){
  //     console.log("Username is null")
  //     setisValid(false)
  //     event.preventDefault();
  //     return;
  //   }
  //   console.log(formData);
  //   addnewComment(formData)
    
  //   setformData({
  //       username: "",
  //       remarks: "",
  //       rating: 5,
  //     })
  // };

  return (
    <div>
      <h4>Give a comment</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">UserName</label>&nbsp;
        <input
          value={formik.values.username}
          placeholder="Username"
          type="text"
          onChange={formik.handleChange}
          id="username"
          name="username"
        ></input>
        {formik.errors.username?<p style={{color:"red"}}>{formik.errors.username}</p>:null}
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>&nbsp;
        <textarea
          value={formik.values.remarks}
          placeholder="Remarks"
          onChange={formik.handleChange}
          id="remarks"
          name="remarks"
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label>&nbsp;
        <input
          placeholder="rating"
          type="number"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          id="rating"
          name="rating"
        ></input>
        <br />
        <br />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default CommentsForm;
