import React from 'react'
import './menu_list_entry.css'
const MenuListEntry = (props)=>(
    <div className='menu-item'>
            <p className='menu-item-price'>${props.data.price}</p>
        <div className='menu-item-content'>
            <p className='menu-item-name'>{props.data.item_name}{props.data.popular? <img className ='badge' src='./badge_white.png'></img>: null}</p>
            <p className='menu-item-description'>{props.data.description}</p>
        </div>
        <div className='pic-box' style={{backgroundImage: `url(${props.data.photo_URL})`}}></div>
    </div>
)

export default MenuListEntry