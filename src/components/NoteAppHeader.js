import React from 'react';
import logo from '../assets/logo.png';

export default function NoteAppHeader() {
  return (
    <div className="note-app__header">
      <img src={logo} alt="logo" />
      <h1>Notes App</h1>
    </div>
  );
}
