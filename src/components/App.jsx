import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import InputNote from './inputNote';
import { useState } from 'react';

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [newNote, ...prevNotes];
        });
    }

    function deleteNode(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div className="App">
            <Header />
            <InputNote onAdd={addNote}/>
            { notes.map((note, index) => {
                return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNode}/>
            })}
            <Footer />
        </div>
    );
}

export default App;
