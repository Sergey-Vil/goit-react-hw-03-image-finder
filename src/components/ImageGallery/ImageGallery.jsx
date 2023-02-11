import React, { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './imageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className={css.gallery} onClick={this.handleShowModal}>
        {images.map(image => (
          <ImageGalleryItem key={image.id} img={image} />
        ))}
      </ul>
    );
  }
}
