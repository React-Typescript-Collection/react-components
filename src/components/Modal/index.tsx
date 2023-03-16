import React, { useState, useRef } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AppModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [modalIsOpen, setIsOpen] = useState(isOpen);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    onClose();
  };

  const handleAfterOpenModal = () => {
    if (subtitleRef.current) {
      subtitleRef.current.style.color = '#f00';
    }
  };

  return (
    <>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={handleAfterOpenModal}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={subtitleRef}>Hello</h2>
        <button onClick={handleCloseModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </>
  );
};

export default AppModal;
