import React from 'react';
import NoteItem from './NoteItem';
import EmptyMessage from './EmptyMessage';

function NoteList({ notes, onDelete, onArchive }) {
  const listNotes = notes.filter((note) => !note.archived);

  if (!listNotes.length) {
    return <EmptyMessage />;
  }
  return (
    <div className="notes-list">
      {notes
        .filter((note) => note.archived === false)
        .map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            archived={note.archived}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))}
    </div>
  );
}

export default NoteList;
