import React, {useState} from "react";
import './App.css';

const App = () => {

    const startNote = {
        content:'', author:''
    };

    const [note, setNote] = useState(startNote);
    const [editNote, seteditNote] = useState(null);
    const [allNotes, setAllNotes] = useState([]);

    function onNoteValue(event) {
        const { name, value } = event.target;
        setNote((preNote) => {
            return {
                ...preNote,
                [name]: value
            }
        });
    }

    function onEditValue(event) {
        const { name, value } = event.target;
        seteditNote((preNote) => {
            return {
                ...preNote,
                [name]: value
            }
        });
    }

    function onSubmit(event) {
        event.preventDefault();
        setAllNotes((preAllNotes) => {
            const newNote = { ...note }
            newNote.id = Date.now().toString();
            return [newNote,...preAllNotes];
        });
        setNote(startNote);
    }

    function onEdit(event) {
        event.preventDefault();
        setAllNotes((prevAllNotes) => {
            return prevAllNotes.map((theNote) => {
                if (theNote.id !== editNote.id) return theNote;
                return editNote;
            });
        });

        seteditNote(null);
    }

    function onDelete(noteId) {
        setAllNotes((preAllNotes) => {
            return preAllNotes.filter((theNote) => {
                return theNote.id !== noteId;
            });
        });
    }

    const noteElements = allNotes.map((a_note) => {
        return (
            <div key={a_note.id} >
                 <h4>{a_note.content} : {a_note.author} : {a_note.id}</h4>
                <p>
                    <a href onClick={() => { seteditNote(a_note) }}>Edit</a>
                    <span> | </span>
                    <a href onClick={()=>{onDelete(a_note.id)}}>Delete</a>
                </p>
            </div>
        )        
    });

    let editNoteElement = null;
    if (!!editNote) {
        editNoteElement = (
            <div>
                <form onSubmit={onEdit}>
                    <p>
                        <input
                            type="text"
                            value={editNote.content}
                            name="content"
                            placeholder="Content"
                            onChange={onEditValue}
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            value={editNote.author}
                            name="author"
                            placeholder="Author"
                            onChange={onEditValue}
                        />
                    </p>
                    <p>
                        <button type="submit">แก้ไข</button>
                    </p>
                </form>
            </div>
        )
    }
        
    return (
        <section className="App">
            <div className="app-container">
                <form onSubmit={onSubmit}>
                    <p>
                        <input
                            type="text"
                            value={note.content}
                            name="content"
                            placeholder="Content"
                            onChange={onNoteValue}
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            value={note.author}
                            name="author"
                            placeholder="Author"
                            onChange={onNoteValue}
                        />
                    </p>
                    <p>
                        <button type="submit">เพิ่มนะค่ะ</button>
                    </p>
                </form>
                    <h3>{ noteElements }</h3>
           
            </div>
            {editNoteElement}
        </section>
    );
}

export default App;