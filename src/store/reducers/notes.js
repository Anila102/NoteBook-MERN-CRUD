import { GETNOTES } from "../actionTypes";


const Notesinitial={
    notes:[{
        title:"",
        descriptoin:"",
        tag:""
    }],
    loading:true
}
const notes=(state=[], action)=>{
    switch (action.type) {
        case GETNOTES:
            return action.payload
             
            
    
        default:
          return  state;
    }
}
export default notes;