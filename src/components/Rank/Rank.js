import React from "react";

const Rank = ({name, entries}) => {
    return (
        <div>
            <div className="white f3" style={{textAlign:'center'}}>
                {`${name}, your current entry is...`}
            </div>
            <div className="white f2" style={{textAlign:'center'}}>
                {`${entries}`}
            </div>
        </div>
    );
}

export default Rank;