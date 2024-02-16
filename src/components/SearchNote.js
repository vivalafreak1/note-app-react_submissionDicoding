import React from 'react';
import NoteItem from './NoteItem';


function SearchNote({keyword, setKeyword}) {
  return (
    <div className="note-search">
      <input
      key="title"
      type="text" 
      placeholder="Cari catatan...."  />
    </div>
  )
}

export default SearchNote;
