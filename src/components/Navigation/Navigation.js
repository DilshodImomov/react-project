import React from "react";


const Navigation = ({changeRoute, isSigned, route}) => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            {
                isSigned === true
                ?<p onClick={()=>{changeRoute('signIn')}} className="f4 link dim black underline pa3 pointer">Sign Out</p>
                :route === 'register'?<p onClick={()=>{changeRoute('signIn')}} className="f4 link dim black underline pa3 pointer">Sign In</p>
                :<p onClick={()=>{changeRoute('register')}} className="f4 link dim black underline pa3 pointer">Register</p>
            }
        </nav>
    );
}

export default Navigation;