import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

export default async function NotesPage() {
  const initialData = await fetchNotes();

  return <NotesClient initialData={initialData} />;
}
