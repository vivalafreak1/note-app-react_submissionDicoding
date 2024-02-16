import React from "react";
import ArchiveItem from "./ArchiveItem";

function ArchiveList({ notes, onDelete, onArchive }) {
  if (notes.length === 0) {
    return <div className="notes-list__empty-message">Tidak ada catatan</div>;
  }
  return (
    <div className="notes-list" key={+new Date()}>
      {notes
        .filter((note) => note.archived === true)
        .map((note) => (
          <ArchiveItem
            key={notes.id}
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

export default ArchiveList;
