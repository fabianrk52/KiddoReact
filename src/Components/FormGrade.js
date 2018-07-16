import React, { Component } from 'react';
import Footer from "./footer"
import Connected from "./connected"
import Header from "./header"
import swal from 'sweetalert2'
import Nav from "./nav"

class FormGrade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Save the input in state
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  

  //make put to API
  handleSubmit(event) {
    event.preventDefault();
    fetch(`https://kiddo2018.herokuapp.com/user/calculate_rank/${this.props.match.params.email}/${this.props.match.params.id}/${this.state.value}`,{
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"           
      },
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
    .then(swal("Update done",'Thank you :)','success'));
  }

  render() {
    return (
        <div id="wrapper">
        <Header email={this.props.match.params.email}/>
        <Nav/>
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