import React, { useState } from "react";

const Register = ({changeRoute, loadUser}) => {
    const [emailField, setEmailField] = useState("");
    const [passwordField, setPasswordField] = useState("");
    const [nameField, setNameField] = useState("");

    const register = () => {
        fetch('https://node-practice-t9xm.onrender.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: emailField,
                password: passwordField,
                name: nameField
            })
        })
        .then(resp => resp.json()).then(data => {
            if ( data ) {
                loadUser(data);
                changeRoute('home');
            }
        }).catch((err) =>{
            console.log("error!", err);
        })

    }
    return (
        <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l center shadow-5">
            <div className="pa4 black-80">
                <main className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input 
                        onChange={(event) => {setNameField(event.target.value);}}
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" 
                        name="name"  
                        id="name" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                        onChange={(event) => {setEmailField(event.target.value);}}
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" 
                        name="email-address"  
                        d="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                        onChange={(event) => {setPasswordField(event.target.value);}}
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password" 
                        name="password"  
                        id="password" />
                    </div>
                    </fieldset>
                    <div className="">
                    <input onClick={register} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                    </div>
                    <div className="lh-copy mt3">
                    <p onClick={() => {changeRoute('signIn')}} className="pointer f6 link dim black db">Sign In</p>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Register;