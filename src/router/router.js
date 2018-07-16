import React from "react";
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import TaskList from "../Components/mainpage";
import Redirect from "react-router-dom/Redirect";
import PersonalInfo from "../Components/PersonalInfo";
import TaskInfo from "../Components/TaskInfo";
import Form from "../Components/FormGrade";
import Admin from "../Components/Admin";
import Login from "../Components/login";

const ReactRouter =()=>{
    return (
        <Router basename={'/2017-2018/dcs/dev_187/'}>
            <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/Admin" component={Admin}/>
            <Route path="/user/:email" component={TaskList} />
            <Route path="/PersonalInfo/:email" component={PersonalInfo} />
            <Route path="/TaskInfo/:id_task/:email" component={TaskInfo} />
            <Route path="/UpdateGrade/:email/:id" component={Form} />
            <Redirect from ={`/`} to={`/login`}/>
            </Switch>
        </Router>
    );}

export default ReactRouter;
