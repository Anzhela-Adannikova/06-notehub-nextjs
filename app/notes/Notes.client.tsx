// Весь вміст компонента App з попередньої ДЗ перенесіть
// на сторінку /notes. Усі інші компоненти з попередньої
// ДЗ перенесіть у папку components.

// Реалізуйте компонент сторінки Notes як SSR компонент
// і винесіть усю клієнтську логіку у файл компонента app\\notes\\Notes.client.tsx
'use client';

import { useState } from 'react';
import { fetchNotes } from '@/lib/api';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { useDebounce } from 'use-debounce';
import type { FetchNoteService } from '@/lib/api';
import css from './NotesPage.module.css';
import NoteList from '@/components/NoteList/NoteList';
import NoteModal from '@/components/NoteModal/NoteModal';
import SearchBox from '@/components/SearchBox/SearchBox';
import Pagination from '@/components/Pagination/Pagination';

interface NotesClientProps {
  initialData: FetchNoteService;
}

export default function NotesClient({ initialData }: NotesClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [debounceSearchTerm] = useDebounce(searchTerm, 1000);
  const perPage = 12;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['notes', currentPage, debounceSearchTerm],
    queryFn: () => fetchNotes(currentPage, debounceSearchTerm, perPage),
    placeholderData: keepPreviousData,
    initialData,
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSearchChange = (newTerm: string) => {
    setSearchTerm(newTerm);
    setCurrentPage(1);
  };

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox value={searchTerm} onChange={handleSearchChange} />
        {data && data.totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            pageCount={data.totalPages}
            onPageChange={setCurrentPage}
          />
        )}
        <button className={css.button} onClick={openModal}>
          Create note +
        </button>
      </header>
      {isLoading && <strong className={css.loading}>Loading notes...</strong>}
      {isError && <p>Something went wrong. Please try again.</p>}
      {data && <NoteList notes={data.notes} />}
      {isModalOpen && <NoteModal onClose={closeModal} onSuccess={closeModal} />}
    </div>
  );
}
