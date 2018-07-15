import React, { Component } from 'react';
import './connected.css';
import Helper from "./Helper"


class Connected extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        };
        this.eachIdea   = this.eachIdea.bind(this);
        this.add        = this.add.bind(this);

    }


    add(item) {
        this.setState(prevState => ({
          data: [
          ...prevState.data,
          {
              name: item.name,
              picture:item.picture,
              email:item.email
          }]
        }));
      }
    
        componentWillMount(){
            fetch("https://kiddo2018.herokuapp.com/user/get_all_users/")
          .then((res)=> res.json())
          .then((data)=>{
              data.map((item) =>{
                  this.add(item);
                }
          );
      });
    }
    
    eachIdea(sub,i){
        return ( 
        <Helper urlTo="PersonalInfo" email={sub.email} pic={sub.picture} key={'sub'+i} index={i} />
          );
      }
    
        render(){
        return(
            <div>
                <p className="finished">Another Users:</p>
                  <ul>
                  {this.state.data.map(this.eachIdea)}
                  </ul>
            </div>
        )
        }
    }
export default Connected