import React, { Component } from 'react';
import './subject.css';


class Subject extends Component{
    constructor(props){
        super(props)
    

    }

    render(){
    return(
        <div className="subjects">
          <div className="subjectbox">
              <ul>
                  <a href="#"><li><span>Math</span></li></a>
                  <a href="#"><li><span>Art</span></li></a>
              </ul>
          </div>
      </div>
    )
    }
}

export default Subject