
import React, {useContext} from 'react'
import noteContext from "../context/notes/NoteContext"
const NoteItem = (props) => {
    const context=useContext(noteContext);
    const{deleteNote, }=context;
    const { note , updateNotes } = props;
    return (
        
        <div className="col-md-3"> 
            <div className="card my-3"> 
                <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p> 
                <i className="fas fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id);
            props.showAlert("success", "Deleted Successfully!")
        }}></i>
                <i className="fas fa-edit mx-2" onClick={()=>{updateNotes(note)}}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem;