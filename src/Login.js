import React, {useState} from "react";
import { useHistory, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import {login, first} from './actions';
import {useDispatch} from 'react-redux';

const Login = () => {

    const [emailAddress, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSelectEmail=(e)=>{
        //console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handleSelectPass=(e)=>{
        //console.log(e.target.value);
        setPass(e.target.value);
    }

    const  submitButton=async(e)=>{
        e.preventDefault();
        var url = "https://sneakers-api.herokuapp.com/user/";
        var passUrl = "/pass/";
        url = url.concat(emailAddress,passUrl);
        url = url.concat(pass);
        console.log(url);

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
        if(response.ok){
            dispatch(login());
            dispatch(first(data.first));
            history.push("/");   
        }
        else{
            alert(data.message);
        }
        
    }

    return (
        <div className="Login">
            <div className="Login-small">
                <form>
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={handleSelectEmail}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={handleSelectPass}/>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={submitButton}>Submit</button>
                    <p className="forgot-password text-right">
                        Don't have an account <Link to="/Register">Sign Up?</Link>
                        
                    </p>
                </form>
            </div>
        </div>
    );
};
export default Login;
