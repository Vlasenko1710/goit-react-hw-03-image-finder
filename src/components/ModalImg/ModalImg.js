import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { ImageModal } from './ModalImg.styled';

const customStyles = {
  content: {
    // top: '50%',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
};

Modal.setAppElement('#root');

export const ModalImg = ({ isOpen, image, alt, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image modal"
    >
      <div>
        <ImageModal src={image} alt={alt} width="" onClick={onClose} />
      </div>
    </Modal>
  );
};

ModalImg.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isOpen: PropTypes.func.isRequired,
  onClose:PropTypes.func.isRequired,
};