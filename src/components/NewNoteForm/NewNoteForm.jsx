import { useState } from "react"

export default function NewNoteForm({ addNote }) {

    const [newNote, setNewNote] = useState({text:""})
    
    function handleSubmit(evt) {
        evt.preventDefault();
        addNote(newNote);
        setNewNote({text:""})
    }

    function handleChange(evt) {
        setNewNote({...newNote, [evt.target.name]: evt.target.value})
    }


    return (
        <>
        <hr/>
        <h4>New Note Form Here</h4>
        <form onSubmit={handleSubmit}>
        <input 
            type="text"
            name="text"
            value={newNote.text}
            placeholder="Enter a New Note"
            onChange={handleChange} />
        <button type="submit">ADD NOTE</button>
        </form>
        </>
    )
}