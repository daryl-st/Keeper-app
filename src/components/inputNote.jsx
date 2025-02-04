import React, { useState } from 'react';

function InputNote(props) {
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNewNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        props.onAdd(newNote);
        setNewNote({
            title: "",
            content: ""
        })

        event.preventDefault();
    }

    return (
        <>
            <form action="">
                <input type="text" name="title" value={newNote.title} placeholder='Tilte' onChange={handleChange} />
                <textarea 
                    name="content" 
                    value={newNote.content} 
                    placeholder='Take a note...' 
                    rows={3} 
                    onChange={handleChange}
                ></textarea>
                <button onClick={handleClick}>Add</button>
            </form>
        </>
    );
}

export default InputNote;