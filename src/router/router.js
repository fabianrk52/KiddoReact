import React from "react";
import { Route } from "react-router-dom";
import TaskList from "../Components/mainpage"
import PersonalInfo from "../Components/PersonalInfo"
import TaskInfo from "../Components/TaskInfo"
import Form from "../Components/FormGrade"
import Admin from "../Components/Admin"

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Route exact path="/Admin" component={Admin}/>
            <Route exact path="/user/:email" component={TaskList} />
            <Route exact path="/PersonalInfo/:email" component={PersonalInfo} />
            <Route exact path="/TaskInfo/:id_task/:email" component={TaskInfo} />
            <Route exact path="/UpdateGrade/:email/:id" component={Form} />
        </React.Fragment>
    );}

export default ReactRouter;
