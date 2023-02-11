// import React, { Component } from 'react';
import css from './imageGalleryItem.module.css';
import { Modal } from '../Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  handleShowModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };
  render() {
    const { webformatURL, tags, largeImageURL } = this.props.img;
    return (
      <>
        <li className={css.gallery_item} onClick={this.handleShowModal}>
          <img className={css.gallery_image} src={webformatURL} alt={tags} />
          {/* <Modal img={largeImageURL} /> */}
          {this.state.showModal ? (
            <Modal img={largeImageURL} onCloseModal={this.handleShowModal} />
          ) : null}
        </li>
      </>
    );
  }
}
