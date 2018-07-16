import React, { Component } from 'react';
import GoogleLogin from 'react-google-login'
import config from "../config/config.json"
 
class Login extends Component{
    constructor(props){
        super(props);
        this.responseGoogle=this.responseGoogle.bind(this);
    }
 
    responseGoogle(response){
      if (response.hasOwnProperty("profileObj")){
        let email = response.profileObj.email;
        let googleId = response.profileObj.googleId;
        console.log(response.profileObj.email);
        this.props.history.push(`/user/${email}`); //Any page you want to redirect
      }
    }
 
    render(){
    return(
        <div className="login">
            <GoogleLogin
                clientId={config.GOOGLE_CLIENT_ID}
                buttonText="GOOGLE ME"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}>
                <button className="loginButton">
                    Login with Google
                </button>
            </GoogleLogin>
        </div>  
    )
    }
}
 
export default Login;