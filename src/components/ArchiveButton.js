import React from 'react';

function ArchiveButton({ id, archived, onArchive }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {archived === false ? 'ARSIPKAN' : 'PINDAHKAN'}
    </button>
  );
}

export default ArchiveButton;
