import React from 'react';
import NoteItemContent from './NoteItemContent';
import { showFormattedDate } from '../utils/data';
import NoteItemAction from './NoteItemAction';

function NoteItem({ title, createdAt, body, id, onDelete, onArchive, archived }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={showFormattedDate(createdAt)} body={body} archived={archived} id={id} />
      <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} archived={archived} />
    </div>
  );
}

export default NoteItem;
