import React, { Component } from 'react';
import Footer from "./footer"
import Connected from "./connected"

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    
  }

  componentWillMount(){
    fetch("https://kiddo2018.herokuapp.com/user/get_user_by_email/user1@gmail.com")
  .then((res)=> res.json())
  .then((data)=>{
      this.setState({
          name:data.name,
          pic:data.picture,
          email:data.email,
          rank:data.rank
  })
  });
}



  render() {
    return (
        <div id="wrapper">
        <div className="UserName">
                <a href={`/PersonalInfo/${this.state.email}`}>Hey {this.state.name}</a>
                <span className="rankHeader">Rank: {this.state.rank}</span>
        </div>  
        <div className="nav">
          <a href="#" className="navboxselected"><div className="datebox">Jan 12</div><div className="daybox">Today</div></a>
          <a href="#" className="navbox"><div className="datebox">Jan 12</div><div className="daybox">Tommorow</div></a>
          <a href="#" className="navbox"><div className="datebox">Jan 12</div><div className="daybox">Friday</div></a>
      </div>
      <div className="contentInfo">
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
      <Connected>
          </Connected>
      <Footer>
    </Footer>
    </div>
    );
  }
}

export default NameForm;