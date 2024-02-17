import React from "react";
import NoteList from "./NoteList";
import ArchiveList from "./ArchiveList";
import { getInitialData } from "../utils/data";

import NoteInput from "./NoteInput";
import SearchNote from "./SearchNote";

class NoteAppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keyword: "",
    };

    //binding
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.setKeyword = this.setKeyword.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const newNotes = [...this.state.notes];
    const noteIndex = this.state.notes.findIndex((note) => note.id === id);
    newNotes[noteIndex].archived = !this.state.notes[noteIndex].archived;

    this.setState({ notes: newNotes });
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
          },
        ],
      };
    });
  }

  setKeyword(keyword) {
    this.setState({ keyword });
  }

  render() {
    const { notes, keyword } = this.state;
    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
      <div className="note-app__body">
        <h1>Buat Catatan</h1>
        <NoteInput addNote={this.onAddNoteHandler} />
        <h1>Cari Catatan</h1>
        <SearchNote keyword={keyword} setKeyword={this.setKeyword} />
        <h1>Daftar Catatan</h1>
        <NoteList
          notes={filteredNotes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
        <h1>Arsip</h1>
        <ArchiveList
          notes={filteredNotes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}

export default NoteAppBody;
