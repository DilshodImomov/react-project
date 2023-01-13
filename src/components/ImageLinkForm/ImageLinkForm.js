import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = ({ChangeInput, SubmitButton, input}) => {
    return (
        <div className="" style={{textAlign: 'center'}}>
            <p className="f4" style={{whiteSpace: 'break-spaces'}}>
                {`This Magic brain will show pictures based on your search. Give it a try!`}
            </p>
            <div className="" style={{display:'flex', justifyContent:'center'}}>
                <div className="pa4 br3 shadow-5 form">
                    <input ref={input} type="text" className="f4 pa2 w-70" onChange={ChangeInput} onKeyDown={(event) => {
                        if ( event.key === 'Enter' ) {
                            SubmitButton();
                        }
                    }}/>
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer" onClick={SubmitButton}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;