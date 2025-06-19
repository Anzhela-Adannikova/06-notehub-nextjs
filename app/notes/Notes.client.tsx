// Весь вміст компонента App з попередньої ДЗ перенесіть
// на сторінку /notes. Усі інші компоненти з попередньої
// ДЗ перенесіть у папку components.

// Реалізуйте компонент сторінки Notes як SSR компонент
// і винесіть усю клієнтську логіку у файл компонента app\\notes\\Notes.client.tsx

// import { useState } from 'react';
// import { fetchNotes } from '../../services/noteService';
// import { keepPreviousData, useQuery } from '@tanstack/react-query';
// import css from './App.module.css';
// import NoteList from '../NoteList/NoteList';
// import NoteModal from '../NoteModal/NoteModal';
// import SearchBox from '../SearchBox/SearchBox';
// import Pagination from '../Pagination/Pagination';
// import ErrorMessage from '../ErrorMessage/ErrorMessage';
// import { useDebounce } from 'use-debounce';

// export default function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [debounceSearchTerm] = useDebounce(searchTerm, 1000);
//   const perPage = 12;

//   const { data, isLoading, isError } = useQuery({
//     queryKey: ['notes', currentPage, debounceSearchTerm],
//     queryFn: () => fetchNotes(currentPage, debounceSearchTerm, perPage),
//     placeholderData: keepPreviousData,
//   });

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const handleSearchChange = (newTerm: string) => {
//     setSearchTerm(newTerm);
//     setCurrentPage(1);
//   };

//   return (
//     <div className={css.app}>
//       <header className={css.toolbar}>
//         <SearchBox value={searchTerm} onChange={handleSearchChange} />
//         {data && data.totalPages > 1 && (
//           <Pagination
//             currentPage={currentPage}
//             pageCount={data.totalPages}
//             onPageChange={setCurrentPage}
//           />
//         )}
//         <button className={css.button} onClick={openModal}>
//           Create note +
//         </button>
//       </header>
//       {isLoading && <strong className={css.loading}>Loading notes...</strong>}
//       {isError && searchTerm.trim() !== '' && (
//         <ErrorMessage message="Something went wrong. Please try again." />
//       )}
//       {data && <NoteList notes={data.notes} />}
//       {isModalOpen && <NoteModal onClose={closeModal} onSuccess={closeModal} />}
//     </div>
//   );
// }
