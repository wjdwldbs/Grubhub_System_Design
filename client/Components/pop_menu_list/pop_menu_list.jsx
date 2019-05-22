import React from 'react'
import PopMenuListEntry from '../pop_menu_list_entry/pop_menu_list_entry.jsx'

const PopMenuList = (props)=>{
    return props.menuData.map((x,i)=>(
        <PopMenuListEntry data = {x} key = {i}></PopMenuListEntry>
    ))
}

export default PopMenuList