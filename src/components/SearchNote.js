import React from "react";
import NoteItem from "./NoteItem";

function SearchNote({ keyword, setKeyword }) {
  const handleSearch = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className="note-search">
      <input
        key="title"
        type="text"
        placeholder="Cari catatan...."
        value={keyword}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchNote;
