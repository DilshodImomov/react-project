import React from "react";
import Logo from '../Logo/Logo';
import Image from '../Image/Image';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import Rank from '../Rank/Rank';


const Home = ({user, ChangeInput, SubmitButton, input, imageUrl}) => {
    return (
        <div>
            <div className="container">
            <Logo />
            <div>
                <Rank name={user.name} entries={user.entries} />
                <ImageLinkForm ChangeInput={ChangeInput} SubmitButton={SubmitButton} input={input}/>
            </div>
            </div>
            <Image imageUrl = {imageUrl}/>
        </div>
    )
}

export default Home;