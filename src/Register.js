import React, {useState} from "react";
import { useHistory, Link } from 'react-router-dom';
import './Login.css';

const Register = () => {

    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [emailAddress, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const history = useHistory();

    const handleSelectFirst=(e)=>{
        setFirst(e.target.value);
    }

    const handleSelectLast=(e)=>{
        setLast(e.target.value);
    }

    const handleSelectEmail=(e)=>{
        setEmail(e.target.value);
    }

    const handleSelectPass=(e)=>{
        setPass(e.target.value);
    }
    
    const  submitButton=async(e)=>{
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                { first: firstName,
                last: lastName,
                email: emailAddress,
                password: pass
            })
        };
        const response = await fetch(`https://sneakers-api.herokuapp.com/user`, requestOptions);
        const data = await response.json();
        if(response.ok){
            history.push("/");
        }
        alert(data.message);
    }




    return (
        <div className="Login">
            <div className="Login-small">
                <form>
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" onChange={handleSelectFirst}/>
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" onChange={handleSelectLast}/>
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={handleSelectEmail}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={ handleSelectPass}/>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={submitButton}>Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <Link to="/Login">Sign In?</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;