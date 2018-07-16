import React, { Component } from 'react';
import Helper from "./Helper"


class Connected extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        };
        this.eachHelper   = this.eachHelper.bind(this);
        this.add        = this.add.bind(this);

    }

    //add to state
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
    //load from API
        componentWillMount(){
            fetch("https://kiddo2018.herokuapp.com/user/get_all_users/")
          .then((res)=> res.json())
          .then((data)=>{
              data.forEach((item) =>{
                  this.add(item);
                }
          );
      });
    }
    //create Helper
    eachHelper(sub,i){
        return ( 
        <Helper urlTo="PersonalInfo" email={sub.email} pic={sub.picture} key={'sub'+i} index={i} />
          );
      }
    
        render(){
        return(
            <div>
                <p className="finished">Another Users:</p>
                  <ul>
                  {this.state.data.map(this.eachHelper)}
                  </ul>
            </div>
        )
        }
    }
export default Connected