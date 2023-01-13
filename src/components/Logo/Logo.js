import React from "react";
// import Tilt from "react-tilt";
import logoImg from "./Logo.png";

const Logo = () => {
    return (
        <div className="ma4 mt0 br4" >
                <div className="br4" style={{ height: 150, width: 150 }}>
                    <img src={logoImg} className="br4" alt="" />
                </div>
        </div>
    );
}

export default Logo;