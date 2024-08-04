import React from 'react';

class ThemeToggleButton extends React.Component {
  render() {
    return (
      <button
        className="theme-toggle-button"
        onClick={this.props.onToggleTheme}
      >
        Toggle Theme
      </button>
    );
  }
}

export default ThemeToggleButton;
