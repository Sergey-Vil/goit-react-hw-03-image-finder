import React, { Component } from 'react';
import css from './modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyEscape);
  }
  handleKeyEscape = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };
  handleOverlayClick = e => {
    if (e.target !== e.currentTarget) {
      this.props.onCloseModal();
    }
  };
  render() {
    return (
      <div>
        <div className={css.overlay} onClick={this.handleOverlayClick}>
          <div className={css.modal}>
            <img src={this.props.img} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
