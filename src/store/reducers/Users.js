import { NEWUSER } from "../action";

const initialState={
    token: localStorage.getItem("token"),
    users:[],
    loading:true
}
const Users=(state=initialState, action)=>{
    switch (action.type) {
        case NEWUSER:
            // localStorage.setItem("token",payload.action)
            // console.log(token)
            return{
                ...state,
            //    ...payload,
                loading:false,
                // user: payload,
            }
            
    
        default:
          return  state;
    }
}
export default Users;