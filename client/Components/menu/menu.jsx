import React from 'react'
import MenuList from '../menu_list/menu_list.jsx'
import PopMenuList from '../pop_menu_list/pop_menu_list.jsx'
import './menu.css'

const Menu = (props)=>(
    <div className='menu'>
        <h1 className ='menuTitle' id='menuTitle1'>Most Popular<img className ='badge-gray' src='https://s3-us-west-1.amazonaws.com/kayjayhogan/prize_fbfbfc.png'></img></h1>
        <div className='container'>
            <PopMenuList menuData = {props.menuData.filter(menuItem=>menuItem.popular)}></PopMenuList>
        </div>
        <h1 className ='menuTitle' id='menuTitle2'>Full Menu</h1>
        <div className='container'>
            <MenuList menuData = {props.menuData}></MenuList>
        </div>
    </div>
)

export default Menu