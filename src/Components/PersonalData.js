import React, { Component } from 'react';
import './header.css';


class PersonalData extends Component{
    constructor(props){
        super(props)
    this.state={
        data:[]

    }
    }
    //get data from User 
    componentWillMount(){
        fetch(`https://kiddo2018.herokuapp.com/user/get_user_by_email/${this.props.url}`)
      .then((res)=> res.json())
      .then((data)=>{
          console.log(data);
            this.setState({
                name:data.name,
                pic:data.picture,
                department:data.department,
                phone:data.phone,
                rank:data.rank
            });
        })
    }

    render(){
    return(
        <div>
        <div className="contentInfo">
            <p>Name:{this.state.name}</p>
            <p>Department: {this.state.department}</p>
            <p>Phone: {this.state.phone}</p>
            <p>Rank: {this.state.rank}</p>
            <img className="userPic" src={this.state.pic}></img>
        </div>
        </div>
    )
}
}
export default PersonalData;