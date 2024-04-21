import React from 'react';

const DisplayGameCode = ({gameCode})=>{
    const [copySuccess,setCopySuccess] = React.useState(false);
    const textInputRef = React.useRef(null);

    const copyToClipboard = e=>{
        textInputRef.current.select();
        document.execCommand("copy");
        setCopySuccess(true);
    }

    return(
        <div className="row my-3 text-center">
            <div className="col-sm"></div>
            <div className="col-sm-8">
                <h4>Send this Code to Your Friends for them to join</h4>
                <div className="input-group mb-3">
                    <input type="text"
                           ref={textInputRef}
                           value={gameCode}
                           readOnly
                           className="form-control"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary"
                                onClick={copyToClipboard}
                                type="button">Copy Game Code</button>
                    </div>
                </div>
                {copySuccess ? <div className="alert alert-success"
                                    role="alert">Successfully Copied Game Code</div> : null}
            </div>
            <div className="col-sm"></div>
        </div>
    )
}

export default DisplayGameCode;