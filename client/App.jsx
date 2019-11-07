import React, { Component } from "react";
import Menu from './Components/menu/menu.jsx'; 
// import Cart from './Components/cart/cart.jsx'
import axios from 'axios'
import path from 'path'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuData : []
    };
  }
  ///restaurants/menu_cart
  // https://menu-cart.herokuapp.com/api/data/${id}
  componentDidMount(){
    console.log(new Date().getMilliseconds())
      //let id = window.location.href.split("id=")[1] 
      var id = Math.floor(Math.random() * (500000)) + 1;
      axios.get(`/api/menu/${id}`)
      .then(result => {
        this.setState({menuData: result.data})
        console.log(new Date().getMilliseconds())
      })
      .catch(err=> console.log('error getting menuData!!', err))
  }
  
  render() {
    return (
      // <div style={{display: 'flex'}}>
      //   <Menu menuData = {this.state.menuData}></Menu>
      //   <Cart></Cart>
      // </div>
      <Menu menuData = {this.state.menuData}></Menu>
    )
  }
}
