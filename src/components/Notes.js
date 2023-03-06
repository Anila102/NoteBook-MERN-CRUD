import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/notes/NoteContext"
import AddNotes from './AddNotes';
import NoteItem from './NoteItem';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Getnotes } from '../store/action';
import store from '../store';
const Notes = (props) => {

    console.log(props)
    // const dispatch=useDispatch();

    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    let history = useHistory();


    ////Redux part
    // const myState=useSelector((state)=>state);
    // console.log(store.Notes)
    // // console.log(myState)

    // dispatch(GETNOTES)
    // fetch Notes
    useEffect(() => {

        if (localStorage.getItem("token")) {
            getNotes();
            // store.dispatch(Getnotes)
        }
        else {
            history.push("/login ")
        }

        // eslint-disable-next-line  
    }, [])





    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
    const ref = useRef(null);
    const refClose = useRef(null)


    // Update Note  
    const updateNotes = (currentNote) => {
        ref.current.click();
        console.log(currentNote.title)
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }



    const handleClick = (e) => {
        e.preventDefault();
        refClose.current.click();
        props.showAlert("success", "Updated Successfully!")
        // history.push('/');
        editNote(note.id, note.etitle, note.edescription, note.etag)
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })

    }


    return (
        <>

            <AddNotes showAlert={props.showAlert} />



            <button ref={ref} type="button" className="btn btn-primary d-none " data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal-dialog modal-dialog-scrollable ">
                <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="my-3">
                                    <div className="mb-3">
                                        <label htmlFor="etitle" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="edescription" className="form-label">Description</label>
                                        <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="etag" className="form-label">Tag</label>
                                        <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button disabled={note.etitle.length < 3 || note.edescription.length < 5} onClick={handleClick} type="button" className="btn btn-dark">Update Note</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="row my-3">
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNotes={updateNotes} showAlert={props.showAlert} note={note} />
                })}
            </div>
        </>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         notes: state.notes,
//         edescription: state.description,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {

//         consoleNotes: () => {
//             dispatch(Getnotes())
//         }
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps) (Notes);
export default Notes;