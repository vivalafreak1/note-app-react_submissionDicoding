import React from 'react';
import ArchiveItem from './ArchiveItem';
import EmptyMessage from './EmptyMessage';

export default function ArchiveList({ notes, onDelete, onArchive }) {
  const archivedNotes = notes.filter((note) => note.archived);

  if (!archivedNotes.length) {
    return <EmptyMessage />;
  }
  return (
    <div className="notes-list" key={+new Date()}>
      {notes
        .filter((note) => note.archived === true)
        .map((note) => (
          <ArchiveItem
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
