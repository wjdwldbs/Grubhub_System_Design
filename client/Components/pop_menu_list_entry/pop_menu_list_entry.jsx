// import React from 'react'
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
            <MenuItemModal open={this.state.showModal} onClose={this.toggleModal}>
          <table className="menu-modal-container">
          <tbody>
            <tr>
              <td valign="top">
              <div className='modal-menu-item' style={{backgroundImage: `url(${this.props.data.photo_URL})`}}>
            <p className='modal-menu-item-content'>{this.props.data.item_name}<br />${this.props.data.price}</p>
              <div className='modal-close' onClick={this.toggleModal}>&times;</div>
                </div>
                <div className='modal-menu-item-description'>{this.props.data.description}</div>
                <div className='modal-menu-item-quantity'>
                  <b>Quantity</b>
                  <span>-</span>
                  <input type="text" maxLength="2" />
                  <span className="tooltip">+</span>
                </div>
                
                <div className='modal-menu-item-options'>
                <b>Would you like any of these options?</b><br/><br/>
                <form>
                    {this.props.data.extras.map((x,i)=>(
                    <div key={i}>
                    <span className="nglg_checkbox"><input type="checkbox"></input></span>Add {x.name} + ${x.price}
                    <br/></div>))}
                </form>
                
                </div>
                {this.props.data.special_instruction? (<div className='modal-menu-item-special'><b>Special Instructions</b><br></br>
                <textarea className='instruction' maxLength="400" placeholder="Dressing on the side? No pickles? Let us know here." ></textarea>
                </div>):null}
              </td>
            </tr>
            <tr>
              <td valign="bottom">
              <div className='bag-bar'><button className='menu-modal-button'>Add to bag: $13</button></div>
              </td>
            </tr>
          </tbody>
          </table>
        </MenuItemModal>
         </div>
        )
    }
}
