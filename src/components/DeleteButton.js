import React from "react";

class DeleteButton extends React.Component {
  constructor(props) {
    super(props);

    // Binding
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus catatan ini?"
    );
    if (confirmDelete) {
      this.props.onDelete(this.props.id);
    }
  }

  render() {
    return (
      <button
        className="note-item__delete-button"
        onClick={this.onClickHandler}
      >
        HAPUS
      </button>
    );
  }
}

export default DeleteButton;
