import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import Cart from './Components/cart/cart.jsx'
// import Menu from './Components/menu/menu.jsx'
import './style.css'

ReactDOM.render(<App></App>, document.getElementById('menu-root'))
ReactDOM.render(<Cart></Cart>, document.getElementById('cart-root'))