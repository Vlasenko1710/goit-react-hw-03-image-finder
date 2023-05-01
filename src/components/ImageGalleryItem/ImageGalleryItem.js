import PropTypes from 'prop-types';
import { Component } from 'react';
import { ModalImg } from 'components/ModalImg/ModalImg';
import { Item, Image } from './ImageGalleryItem.styled';
export class ImageGalleryItem extends Component {
  state = {
    selectedImg: null,
  };

  setSelectedImg = () => {
    this.setState({ selectedImg: this.props.item.largeImageURL });
  };

  closeModal = () => {
    this.setState({ selectedImg: null });
  };
  render() {
    const { selectedImg } = this.state;
    const { item } = this.props;
    return (
      <Item>
        <Image
          src={item.webformatURL}
          alt={item.tags}
          onClick={this.setSelectedImg}
        />
        <ModalImg
          isOpen={selectedImg !== null}
          onClose={this.closeModal}
          image={selectedImg}
          alt={item.tags}
        />
      </Item>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
