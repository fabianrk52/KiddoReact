import React, { Component } from 'react';
import Footer from "./footer"
import Connected from "./connected"
import Header from "./header"
import swal from 'sweetalert2'

class FormGrade extends React.Component {
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
    fetch(`https://kiddo2018.herokuapp.com/user/calculate_rank/${this.props.match.params.email}/${this.props.match.params.id}/${this.state.value}`,{
      method: 'PUT',
    })
    .then(res=>res.json())
    .then(swal("Update done",'Thank you :)','success'));
  }

  componentWillMount(){
    fetch(`https://kiddo2018.herokuapp.com/user/get_user_by_email/${this.props.match.params.email}`)
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
        <Header email={this.props.match.params.email} />
        <div className="nav">
          <a href="#" className="navboxselected"><div className="datebox">Jan 12</div><div className="daybox">Today</div></a>
          <a href="#" className="navbox"><div className="datebox">Jan 12</div><div className="daybox">Tommorow</div></a>
          <a href="#" className="navbox"><div className="datebox">Jan 12</div><div className="daybox">Friday</div></a>
      </div>
      <div className="contentInfo">
      <h2> Grade {this.state.name}</h2>  
      <form onSubmit={this.handleSubmit}>
        <label>
          Grade:
          <input type="number" value={this.state.value} onChange={this.handleChange} />
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

export default FormGrade;