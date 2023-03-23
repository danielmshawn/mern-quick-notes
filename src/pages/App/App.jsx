import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NotesListPage from '../NotesListPage/NotesListPage';
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';
import NavBar from '../../components/NavBar/NavBar';
import * as notesAPI from '../../utilities/notes-api'

export default function App() {
  const [user, setUser] = useState(getUser());

  const [notes, setNotes] = useState([]);

  useEffect(function() {
    async function getNotes() {
      const allNotes = await notesAPI.getAllNotes();
      setNotes(allNotes)
      console.log( "All Notes inside useEffect", allNotes)
    }
    getNotes();
  }, [])

  async function addNote(note) {
    const newNote = await notesAPI.createNote(note)
    setNotes([...notes, newNote])
  }

  const noteList = notes.map((note, idx) => (
    <NotesListPage note={note.text} key={idx} />
  ));

  return (
    
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <div>{noteList}</div> 
            <NewNoteForm addNote={addNote}/>
            
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
