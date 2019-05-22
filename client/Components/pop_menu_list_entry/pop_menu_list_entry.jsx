import React from 'react'
import './pop_menu_list_entry.css'
const PopMenuListEntry = (props)=>(
    <div className='pop-menu-item' style={{backgroundImage: `url(${props.data.photo_URL})`}}>
            <p className='pop-menu-item-content'>{props.data.item_name}<br />${props.data.price}</p>
    </div>
)

export default PopMenuListEntry