import React, { Component } from "react";
import MenuItemModal from "../menu_item_modal/menu_item_modal.jsx";
import "./menu_list_entry.css";

export default class MenuListEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
        showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
      <div onClick = {this.state.showModal? ()=>{} : this.toggleModal} className="menu-item">
        <p className="menu-item-price">${this.props.data.price}</p>
        <div className="menu-item-content">
          <p className="menu-item-name">
            {this.props.data.item_name}
            {this.props.data.popular ? (
              <img className="badge" src="https://s3-us-west-1.amazonaws.com/calvingrubhubproject/badge_white.png" />
            ) : null}
          </p>
          <p className="menu-item-description">{this.props.data.description}</p>
        </div>
        <div
          className="pic-box"
          style={{ backgroundImage: `url(${this.props.data.photo_URL})` }}
        />
        <MenuItemModal data = {this.props.data} open={this.state.showModal} onClose={this.toggleModal} />
      </div>
    );
  }
}


