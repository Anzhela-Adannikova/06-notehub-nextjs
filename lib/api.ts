// Функції роботи з API винесені в lib/api/ у вигляді окремих модулів

// Весь вміст файлу src/services/noteService.ts з попередньої ДЗ перенесіть
// у файл lib/api.ts

/* fetchNotes : request to get a collection of notes from the server
createNote: creating a new note on the server
deleteNote: delete a note by a given identifier */

import axios from 'axios';
import type { Note, NewNoteData } from '../app/types/note';

const BASE_URL = 'https://notehub-public.goit.study/api/notes';

const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const noteServiceClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

interface FetchNoteService {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  page = 1,
  query = '',
  perPage = 12
): Promise<FetchNoteService> => {
  const params: Record<string, string | number> = { page, perPage };
  if (query) params.search = query;

  const res = await noteServiceClient.get<FetchNoteService>('/', { params });
  return res.data;
};

export const createNote = async (noteData: NewNoteData): Promise<Note> => {
  const res = await noteServiceClient.post<Note>('/', noteData);
  return res.data;
};

export const deleteNote = async (noteId: number): Promise<Note> => {
  const res = await noteServiceClient.delete<Note>(`/${noteId}`);
  return res.data;
};

export const fetchNoteById = async (id: number): Promise<Note> => {
  const res = await noteServiceClient.get<Note>(`${id}`);
  return res.data;
};
