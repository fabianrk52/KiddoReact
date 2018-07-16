import React from 'react';
import Footer from "./footer"
import Connected from "./connected"
import Nav from "./nav"
import swal from 'sweetalert2'

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        topic:'',
        teacher:'',
        submission:'',
        content:'',
        department:''
};

    this.handleChangeTopic = this.handleChangeTopic.bind(this);
    this.handleChangeContent=this.handleChangeContent.bind(this);
    this.handleChangeDepartment=this.handleChangeDepartment.bind(this);
    this.handleChangeSubmission=this.handleChangeSubmission.bind(this);
    this.handleChangeTeacher=this.handleChangeTeacher.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//handle each input

handleChangeTopic(event){
    this.setState({
      topic: event.target.value,
  });
}
handleChangeTeacher(event){
  this.setState({
    teacher: event.target.value,
});
}
handleChangeSubmission(event){
  this.setState({
    submission: event.target.value,
});
}
handleChangeContent(event){
  this.setState({
    content: event.target.value,
});
}
handleChangeDepartment(event){
  this.setState({
    department: event.target.value,
});
}

//submit with post to the API
  handleSubmit(event) {
    event.preventDefault();
    fetch("https://kiddo2018.herokuapp.com/coordinator/new_task/",{
        method:'POST',
        body:
          `topic=${this.state.topic}&teacher=${this.state.teacher}&submission=${this.state.submission}&content=${this.state.content}&department=${this.state.department}`
        ,
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
    .then(swal('Created','Keep working','success'))
    
  }

  render() {
    return (
        <div id="wrapper">
        <div className="UserName">
                <p>Hey Admin</p>
        </div> 
        <Nav/>
      <div className="contentInfo">
      <h2> Add Task</h2>  
      <form onSubmit={this.handleSubmit}>
        <label>
            Topic:
            <input type="text" name="topic" onChange={this.handleChangeTopic} />
            Teacher:
            <input type="text" name="teacher" onChange={this.handleChangeTeacher} />
            Date:
            <input type="date" name="submission" onChange={this.handleChangeSubmission} />
            Content:
            <input type="text" name="content" onChange={this.handleChangeContent} />
            Department:
            <input type="text" name="department" onChange={this.handleChangeDepartment} />  
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

export default Admin;