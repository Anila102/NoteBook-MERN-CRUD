// import axios from "axios"
// import { GETUSER } from "./action";
// import { GETNOTES } from "./action";
// import {NEWUSER} from "./action"
// const host = "http://localhost:5000";


// export const CREATEUSER=()=>async(dispatch)=>{
//     const response = await axios.post("http://localhost:5000/api/auth/createuser", {

//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({name, email, password})
//     });
//     const json = await response.json()
//     console.log(json);
//     if(json.success){
//         localStorage.setItem('token', json.authToken); 
//         history.push("/");
//         // props.showAlert("success", "Acoount Created Successfully!")

    
//     dispatch({
//         type:NEWUSER,
//         payload:response.data
//     })}
//     else{
//     console.log(error);

//     //   props.showAlert("danger", "Invalid credentials ")

//     }
// }





// export const getUsers=()=>async(req,res) =>{
//     try {
//             const users = await User.find({})
//             res.json(users)
        
//         const {data}=await axios.post(`${host}/api/auth/login`)
//         dispatch({
//             type:GETUSER,
//             payload:data
//         })
//         console.log(payload)
//     } catch (error) {
       
//     }
// }

// export const getNotes=()=>async dispatch=>{
//     try {
//         const {data}=await axios.post(`${host}/api/notes/fetchnotes`)
//        let token= localStorage.getItem("token")
//         console.log(data)
//         dispatch({
//             type:GETNOTES,
//             payload:data
//         })
//         console.log(payload)
//     } catch (error) {
       
//     }
// }