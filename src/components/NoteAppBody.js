import React from 'react';
import NoteList from './NoteList';
import ArchiveList from './ArchiveList';
import { getInitialData } from '../utils/data';

import NoteInput from './NoteInput';

class NoteAppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    }

    //binding
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }
  
  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id){
    const newNotes = [...this.state.notes];
    const noteIndex = this.state.notes.findIndex(note => note.id === id);
    newNotes[noteIndex].archived = !this.state.notes[noteIndex].archived;

    this.setState({notes: newNotes});
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="note-app__body">
        <h1>Buat Catatan</h1>
        <NoteInput addNote={this.onAddNoteHandler} />
        <h1>Daftar Catatan</h1>
        <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        <h1>Arsip</h1>
        <ArchiveList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
      </div>
    )
  }
}

export default NoteAppBody;
