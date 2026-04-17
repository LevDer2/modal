import "./App.css";
import React, { Component } from "react";
import Modal from "./components/Modal/Modal";

export default class App extends Component {
  state = {
    isOpen: false,
  }

  controlOpen = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }))
  }
  render() {
    return (
      <>
        <button onClick={this.controlOpen} className="openBtn" type="button">
          open
        </button>
        {this.state.isOpen && <Modal isOpen={this.controlOpen}/>}
      </>
    );
  }
}
