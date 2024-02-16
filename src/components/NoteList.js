import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive, archived }) {
  if (notes.length === 0) {
    return (
      <div className='notes-list__empty-message'>Tidak ada catatan</div>
    )
  }
  return (
    <div className="notes-list">
      {
        notes
        .filter(note => note.archived === false)
        .map((note) => (
          <NoteItem 
          key={notes.id} 
          id={note.id}
          archived={note.archived}
          onDelete={onDelete}
          onArchive={onArchive}
          {...note} />
        ))
      }
    </div>
  );
}

export default NoteList;
