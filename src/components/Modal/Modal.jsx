import React, { Component } from "react";
import style from "../Modal/Modal.module.css";
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleModalEscClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleModalEscClose);
  }

  handleModalEscClose = (evt) => {
    if (evt.code === "Escape") {
      this.props.isOpen();
    }
  };

  handleBackdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.props.isOpen();
    }
  };
  render() {
    const { isOpen } = this.props;
    return (
      <>
        <div className={style.backdrop} onClick={this.handleBackdropClick}>
          <div className={style.modal}>
            <h2>Modal window</h2>
            <button onClick={isOpen} className={style.modalClose} type="button">
              X
            </button>
          </div>
        </div>
      </>
    );
  }
}
