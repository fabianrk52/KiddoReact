import React, { Component } from 'react';
import './connected.css';


class Connected extends Component{
    constructor(props){
        super(props)
        this.state={
            sub:[]
        };
        this.eachIdea   = this.eachIdea.bind(this);
        this.add        = this.add.bind(this);

    }


    add(item) {
        this.setState(prevState => ({
          sub: [
          ...prevState.sub,
          {
              name: item.name,
              picture:item.picture,
          }]
        }));
      }
    
        componentWillMount(){
            fetch("https://kiddo2018.herokuapp.com/user/get_all_users/")
          .then((res)=> res.json())
          .then((data)=>{
              var self = this;
              data.map((item) =>{
                  self.add(item);
                  console.log(item.picture);
                }
          );
      });
    }
    
    eachIdea(sub,i){
        return (    
        <a key={sub+i} index={i} href="#"><img className="picConnected" src={sub.picture}></img></a>
          );
      }
    
        render(){
        return(
            <div>
                  <ul>
                  {this.state.sub.map(this.eachIdea)}
                  </ul>
            </div>
        )
        }
    }
export default Connected