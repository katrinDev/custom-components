import React, { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import classNames from 'classnames';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  title: string;
  text: string;
}

const Modal = ({ children, isOpen, onClose, title, text }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
    return () => {
      if (modalElement && modalElement.open) {
        modalElement.close();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && modalRef.current === event.target) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div>
      {createPortal(
        <dialog
          ref={modalRef}
          className={classNames(styles['modal-dialog'], {
            [styles.open]: isOpen,
          })}
          onKeyDown={handleKeyDown}
        >
          <button className={styles['modal-close-button']} onClick={onClose}>
            &times;
          </button>
          <h1>{title}</h1>
          <p>{text}</p>
          {children}
        </dialog>,
        document.body,
      )}
    </div>
  );
};

export default Modal;
