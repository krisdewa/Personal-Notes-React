import style from "../styles/section-notes.module.css";
import Card from "./card";

const SectionNotes = ({ label, notes, setNotes }) => {
  return (
    <section>
      <h2 className={style.heading}>{label}</h2>
      {notes.length === 0 ? (
        <p className={style.empty_note}>Tidak ada catatan !!!</p>
      ) : (
        <div className={style.list_of_notes}>
          {notes?.map((note) => (
            <Card key={note.id} action={setNotes} {...note} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SectionNotes;
