import React, { Component } from 'react';
import '../index.css';
import Header from "./header";
import Nav from "./nav"
import Subject from "./subject"
import Footer from "./footer"
import Connected from "./connected"


class Main extends Component{
  constructor(props){
      super(props)
  this.state={
    data:[{
    Name:"Juan",
    Tasks:[],
    }]
  }
  }
  render(){
      return(
      <div id="wrapper">
      <Header>
      </Header>
      <Nav>
        </Nav>
      <Subject>
        </Subject>
      <Connected>
        </Connected>
      <Footer>
        </Footer>
      </div>
      )
  }
}

export default Main