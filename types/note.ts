// Загальні типи та інтерфейси винесені до файлу

export interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: string;
}

export interface NewNoteData {
  title: string;
  content: string;
  tag: string;
}
