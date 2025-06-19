// текстове поле для пошуку по колекції
import css from './SearchBox.module.css';

interface SearchBoxProps {
  onChange: (value: string) => void;
  value: string;
  error?: string;
}

export default function SearchBox({ onChange, value, error }: SearchBoxProps) {
  return (
    <>
      <input
        className={css.input}
        type="text"
        placeholder="Search notes"
        value={value}
        onChange={event => onChange(event.target.value)}
      />
      {error && <p className={css.error}>{error}</p>}
    </>
  );
}
