import React from 'react';

var Game = (props)=>{
    return(
        <div>
            <p>Welcome {props.p_name}</p>
            <p>question: {props.q_quiz}</p>
            <div className = "game_answers">
                <button id = "game_but1" name = {props.a_1} onClick = {props.chk_ans1}>{props.a_1}</button>
                <button id = "game_but2" name = {props.a_2} onClick = {props.chk_ans2}>{props.a_2}</button>
                <button id = "game_but3" name = {props.a_3} onClick = {props.chk_ans3}>{props.a_3}</button>
                <button id = "game_but4" name = {props.a_4} onClick = {props.chk_ans4}>{props.a_4}</button>
            </div>
        </div>
    )
}

export default Game;