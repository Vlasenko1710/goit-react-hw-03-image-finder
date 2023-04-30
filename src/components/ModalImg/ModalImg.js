import Modal from 'react-modal';

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

Modal.setAppElement ('#root');

export const ModalImg = ({ isOpen, image, alt, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image modal"
    >
      <div>
        <img src={image} alt={alt} width="780" onClick={onClose}/>
        {/* <button onClick={onClose}>Close</button> */}
      </div>
    </Modal>
  );
};