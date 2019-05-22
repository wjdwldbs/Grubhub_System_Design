import React from 'react'
import MenuListEntry from '../menu_list_entry/menu_list_entry.jsx'

const MenuList = (props)=>{
    return props.menuData.map((x,i)=>(
        <MenuListEntry data = {x} key = {i}></MenuListEntry>
    ))
}

export default MenuList