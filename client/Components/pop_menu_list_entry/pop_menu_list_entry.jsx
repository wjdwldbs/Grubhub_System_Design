import MenuItemModal from '../menu_item_modal/menu_item_modal.jsx'
import './pop_menu_list_entry.css'

import React, { Component } from 'react'

export default class PopMenuListEntry extends Component {
    constructor(props) {
        super(props)
    
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
        <div onClick = {this.state.showModal? ()=>{} : this.toggleModal} className='pop-menu-item' style={{backgroundImage: `url(${this.props.data.photo_URL})`}}>
            <p className='pop-menu-item-content'>{this.props.data.item_name}<br />${this.props.data.price}</p>
            <MenuItemModal data = {this.props.data} open={this.state.showModal} onClose={this.toggleModal} />
         </div>
        )
    }
}
