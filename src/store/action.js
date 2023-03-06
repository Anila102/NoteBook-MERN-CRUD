
const host = "http://localhost:5000";

export const Getnotes = () => {
  return (dispatch) => {
   fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    }).then((res) => res.json())
      .then((res2) => {
        dispatch({
          type: "GETNOTES",
          payload: res2.json()
        })
      });
    console.log("action.js")

  }
}
export const NEWUSER = (user) => {
  return (dispatch) => {
    dispatch({
      type: "NEWUSER",
      payload: user
    })
  }
}
export const GETUSER = "GETUSER"



// export const LogIn=()=> {
//   return {type: "LogIn"}ddd
// }
// export const LogOut=()=> {
//   return {type: "LogOut"}
// }



// const addNote = async (title, description, tag) => {
//   const host = "http://localhost:5000";
//   console.log("Adding a new note")
//     const response = await fetch(`${host}/api/notes/addnotes`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token": localStorage.getItem("token"),
//       },
//       body: JSON.stringify({ title, description, tag })
//     });
//     // const note = await response.json();
//     // setNotes(notes.concat(note))



//   }
//   export default addNote
