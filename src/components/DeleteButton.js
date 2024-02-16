import React from 'react';

function DeleteButton({ id, onDelete }) {
  return <button className='note-item__delete-button' onClick={() => onDelete(id)}>HAPUS</button>
}

export default DeleteButton;
