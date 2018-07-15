import React, { Component } from 'react';
import './header.css';


class TaskContent extends Component{
    constructor(props){
        super(props)
    this.state={
        data:[]

    }
    }
    componentWillMount(){
        fetch(`https://kiddo2018.herokuapp.com/user/get_user_by_email/${this.props.fetchFrom}`)
      .then((res)=> res.json())
      .then((data)=>{
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
        <div className="contentInfo">
            <p>Topic:{this.state.name}</p>
            <p>Department: {this.state.department}</p>
            <p>Content: {this.state.phone}</p>
            <p>Submission: {this.state.rank}</p>
            <p>Status: {this.state.status}</p> 
        </div>
    )
}
}
export default TaskContent;