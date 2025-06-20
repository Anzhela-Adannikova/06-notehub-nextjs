import css from './NoteDetailsClient.module.css';

export default function NoteDetailsClient() {
  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>Note title</h2>
          <button className={css.editBtn}>Edit note</button>
        </div>
        <p className={css.content}>Note content</p>
        <p className={css.date}>Created date</p>
      </div>
    </div>
  );
}
