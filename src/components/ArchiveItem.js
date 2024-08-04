import React from 'react';
import ArchiveItemContent from './ArchiveItemContent';
import { showFormattedDate } from '../utils/data';
import ArchiveItemAction from './NoteItemAction';

export default function ArchiveItem({
  title,
  createdAt,
  body,
  id,
  onDelete,
  onArchive,
  archived,
}) {
  return (
    <div className="note-item">
      <ArchiveItemContent
        title={title}
        createdAt={showFormattedDate(createdAt)}
        body={body}
        archived={archived}
        id={id}
      />
      <ArchiveItemAction
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        archived={archived}
      />
    </div>
  );
}
