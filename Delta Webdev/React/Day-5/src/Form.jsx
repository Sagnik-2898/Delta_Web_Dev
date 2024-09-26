import { useState } from "react";

const Form = () => {
  let [formData, SetformData] = useState({
    userName: "",
    fullName: "",
    password:""
  });

  let handleinputData = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;
    // console.log(newValue);

    SetformData((currData) => {
      return { ...currData, [fieldName]: newValue };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    SetformData({
      userName: "",
      fullName: "",
      password:""
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          placeholder="Enter Your Name"
          value={formData.fullName}
          onChange={handleinputData}
          id="fullName"
          name="fullName"
        ></input>
        <br />
        <br />
        <label htmlFor="UserName">User Name</label>
        <input
          placeholder="Enter Your Name"
          value={formData.userName}
          onChange={handleinputData}
          id="userName"
          name="userName"
        ></input>
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          placeholder="Enter Your password"
          value={formData.password}
          onChange={handleinputData}
          id="password"
          name="password"
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
