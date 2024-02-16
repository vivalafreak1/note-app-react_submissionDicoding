import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // Inisialisasi State
    this.state = {
      title: "",
      body: "",
      max_char: 50,
    };
    // Binding
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value.slice(0, this.state.max_char),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    if (this.state.title.trim() !== "" && this.state.body.trim() !== "") {
      this.props.addNote({
        title: this.state.title,
        body: this.state.body,
      });
      // Reset form after adding note
      this.setState({
        title: "",
        body: "",
      });
      alert("Catatan berhasil dibuat");
    } else {
      alert("Judul dan konten catatan tidak boleh kosong.");
    }
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <p className="note-input__title__char-limit">
          {" "}
          Sisa Karakter: {this.state.max_char - this.state.title.length}
        </p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Masukkan Judul"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Masukkan Konten"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default NoteInput;
