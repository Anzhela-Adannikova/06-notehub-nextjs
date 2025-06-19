// модальне вікно яке відкривається при створенні нотатки
import { useEffect } from 'react';
import css from './NoteModal.module.css';
import { createPortal } from 'react-dom';
import NoteForm from '../NoteForm/NoteForm';

interface NoteModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function NoteModal({ onClose, onSuccess }: NoteModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div className={css.modal}>
        {<NoteForm onClose={onClose} onSuccess={onSuccess} />}
      </div>
    </div>,
    document.body
  );
}
