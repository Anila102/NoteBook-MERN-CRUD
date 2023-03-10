import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { CREATEUSER } from '../store/apis';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({name:"", email: "", password: "" ,cpassword:""})
  let history = useHistory();
  const user=useSelector((state)=> state.CREATEUSER)
  console.log(user)
  let dispatch=useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password}=credentials;
    //  dispatch(CREATEUSER(setCredentials({name, email, password })))
     const response = await fetch("http://localhost:5000/api/auth/createuser", {

         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({name, email, password})
     });
     const json = await response.json()
     console.log(json);

     if(json.success){
           localStorage.setItem('token', json.authToken); 
           history.push("/");
           props.showAlert("success", "Acoount Created Successfully!")

    }
     else{
       props.showAlert("danger", "Invalid credentials ")

     }

     setCredentials({name, email, password})
  }
    
      const onChange=(e)=>{
    // dispatch(CREATEUSER({ ...credentials, [e.target.name]: e.target.value }))

         setCredentials({ ...credentials, [e.target.name]: e.target.value })
      } 
  return <div className="container">
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">


        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" minLength={5} required/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required/>
      </div>
      <div className="mb-3">
        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required/>
      </div>

      <button type="submit" className="btn btn-dark">Sign up</button>
    </form>
  </div>;
};

export default Signup;
