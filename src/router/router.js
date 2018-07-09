import React from "react";
import { Route } from "react-router-dom";
import Main from "../Components/mainpage"

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Route exact path="/" component={Main} />
        </React.Fragment>
    );}

export default ReactRouter;
