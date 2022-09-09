import { useState } from "react";
import Input from "./input";
import style from "../styles/form-input.module.css";

const FormInput = ({ updateNotes }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const createNote = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    updateNotes((notes) => [
      ...notes,
      { id: timestamp, title, body: note, archived: false, createdAt: timestamp },
    ]);
  };

  return (
    <form className={style.form} onSubmit={createNote}>
      <h2 className={style.heading}>Buat catatan</h2>
      <small className={style.small}>
        Karakter yang tersisa : <span className={style.counter}>{50 - title.length}</span> | Judul Maksimal 50 karakter
      </small>
      <Input
        value={title}
        onChange={setTitle}
        type='text'
        placeholder='Judul catatan'
        id='title'
        name='title'
        required
      />
      <Input
        value={note}
        onChange={setNote}
        type='textarea'
        placeholder='Tulis catatan anda'
        id='note'
        name='note'
        required
      />
      <Input type='submit' id='submit_form' name='submit_form' value='Tambah Catatan' />
    </form>
  );
};

export default FormInput;
