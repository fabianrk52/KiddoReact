import React from "react";
import { Route } from "react-router-dom";
import Main from "../Components/mainpage"
import PersonalInfo from "../Components/PersonalInfo"
import TaskInfo from "../Components/TaskInfo"
import Form from "../Components/FormGrade"

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Route exact path="/:email" component={Main} />
            <Route path="/PersonalInfo/:email" component={PersonalInfo} />
            <Route path="/TaskInfo/:id_task/:email" component={TaskInfo} />
            <Route path="/UpdateGrade/:email/:id" component={Form} />
        </React.Fragment>
    );}

export default ReactRouter;
