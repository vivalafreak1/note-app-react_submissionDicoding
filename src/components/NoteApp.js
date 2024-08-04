import React from 'react';
import NoteAppHeader from './NoteAppHeader';
import NoteAppBody from './NoteAppBody';
import ThemeToggleButton from './ThemeToggleButton';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    const savedTheme = localStorage.getItem('theme') || 'dark';
    this.state = {
      theme: savedTheme,
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => {
      const newTheme = prevState.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return { theme: newTheme };
    });
  };

  componentDidMount() {
    document.body.className = this.state.theme;
  }

  componentDidUpdate() {
    document.body.className = this.state.theme;
  }

  render() {
    return (
      <div className="note-app">
        <NoteAppHeader />
        <NoteAppBody />
        <ThemeToggleButton onToggleTheme={this.toggleTheme} />
      </div>
    );
  }
}

export default NoteApp;
