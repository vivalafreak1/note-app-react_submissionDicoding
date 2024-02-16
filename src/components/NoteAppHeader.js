import React from "react";
import { getInitialData } from "../utils/data";

import SearchItem from "./SearchNote";

class NoteAppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchQuery: "",
      setInput: "",
    };

    //binding
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
  }

  onSearchNoteHandler(searchQuery) {
    const filtered = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filtered;
  }

  render() {
    return (
      <div className="note-app__header">
        <h1>Notes</h1>
        <SearchItem />
      </div>
    );
  }
}

export default NoteAppHeader;
