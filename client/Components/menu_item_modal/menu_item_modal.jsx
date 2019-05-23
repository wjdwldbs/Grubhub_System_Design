import React, { Component } from 'react'
import ReactDom from "react-dom"
import './menu_item_modal.css'

export default class MenuItemModal extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render() {
    return (
      this.props.open
      ? ReactDom.createPortal(
                <div className="modal">
                          <table className="menu-modal-container">
          <tbody>
            <tr>
              <td valign="top">
              <div className='modal-menu-item' style={{backgroundImage: `url(${this.props.data.photo_URL})`}}>
            <p className='modal-menu-item-content'>{this.props.data.item_name}<br />${this.props.data.price}</p>
              <div className='modal-close' onClick={this.props.onClose}>&times;</div>
                </div>
                <div className='modal-menu-item-description'>{this.props.data.description}</div>
                <div className='modal-menu-item-quantity'>
                  <b>Quantity</b>
                  <span className="tooltip">-</span>
                  <input className="quantity-input" type="text" maxLength="2" readOnly value='0'/>
                  <span className="tooltip">+</span>
                </div>
                
                <div className='modal-menu-item-options'>
                  {this.props.data.extras.length>0? <span><b>Would you like any of these options?</b><br/><br/></span> : null}
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
                </div>,
                document.body
              )
            : null
    )
  }
}
