import React from "react";
import './image.css'

const Image = ( {imageUrl} ) => {
    if ( imageUrl !== 'None' ) {
        return (
            <div>
                <div className="imageContainer center">
                    <img className="image br3" src={imageUrl} alt=""/>
                </div>
            </div>
        );
    }
    return (
        <p className="white f3 b center">Nothing Found! Try something else.</p>
    );
}

export default Image;