import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/NoteContext"

import { useSelector, useDispatch } from 'react-redux';
import getNotes from "../store/action"
const AddNotes = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [notes, setNotes] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(notes.title, notes.description, notes.tag);
        setNotes({title: "", description: "", tag: ""})
        props.showAlert("success", "Added Successfully!");

    }

    // const onChange = (e)=>{
    //     setNotes({...notes, [e.target.name]: e.target.value})
    // }

    // const myState=useSelector((state)=> state.addNote);
    // const dispatch =useDispatch();
    // const handleClick = (e)=>{
    //     e.preventDefault();
    //     dispatch(addNote);

    // }

     const onChange = (e)=>{
            setNotes({...notes, [e.target.name]: e.target.value})
        }
    return (
       
        <div className="container">
            

                <h1>Add Notes</h1>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={notes.title} aria-describedby="emailHelp" onChange={onChange}   minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={notes.description} onChange={onChange}  minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={notes.tag} onChange={onChange} />
                </div>
                <button disabled={notes.title.length<3 || notes.description.length<5} type="submit" className="btn btn-dark" onClick={handleClick}>Add Note</button>
            </form>
            </div>


    //     <div className="container">
            

    //     <h1>Add Notes</h1>
    // <form className="my-3">
    //     <div className="mb-3">
    //         <label htmlFor="title" className="form-label">Title</label>
    //         <input type="text" className="form-control" id="title" name="title" value={notes.title} aria-describedby="emailHelp"   minLength={5} required/>
    //     </div>
    //     <div className="mb-3">
    //         <label htmlFor="description" className="form-label">Description</label>
    //         <input type="text" className="form-control" id="description" name="description" value={notes.description}  minLength={5} required/>
    //     </div>
    //     <div className="mb-3">
    //         <label htmlFor="tag" className="form-label">Tag</label>
    //         <input type="text" className="form-control" id="tag" name="tag" value={notes.tag}  />
    //     </div>
    //     <button disabled={notes.title.length<3 || notes.description.length<5} type="submit" className="btn btn-dark" onClick={handleClick}>Add Note</button>
    // </form>
    // </div>
    )
}

export default AddNotes