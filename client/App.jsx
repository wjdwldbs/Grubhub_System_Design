import React, { Component } from "react";
import Menu from './Components/menu/menu.jsx'; 
import Cart from './Components/cart/cart.jsx'
import axios from 'axios'
import path from 'path'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuData : []
    };
  }

  componentDidMount(){
      let url = window.location.href 
      axios.get(url+'api/menus')
      .then(result => this.setState({menuData: result.data}))
      .catch(err=> console.log('error getting menuData!!', err))
  }

  render() {
    return (
      <div style={{display: 'flex'}}>
        <Menu menuData = {this.state.menuData}></Menu>
        <Cart></Cart>
      </div>
    )
  }
}
