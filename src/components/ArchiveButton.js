import React from 'react';

export default function ArchiveButton({ id, archived, onArchive }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {archived === false ? 'ARSIPKAN' : 'PINDAHKAN'}
    </button>
  );
}
