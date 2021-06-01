import React from 'react';

var Score = (props) => {
    return (
        <div className = "bg">
            <div className = "score">
                <p>GAVE OVER</p>
                <p>you have got <b>{props.marks}/10</b></p>
                <p>{props.end_msg}</p>
                <button id="reset_but" onClick={props.reset}>return to start menu</button>
            </div>
        </div>
    )
}

export default Score;