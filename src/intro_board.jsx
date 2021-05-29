import React from 'react';

var Intro = (props)=>{
    return(
        <div>
            <p>Please enter your name</p>
            <input type = "text" placeholder = "please enter your name" id = "name"></input>
            <p>enter difficulty</p>
            <select name = "difficulty" id = "diff_val">
                <option value = 'easy'>easy</option>
                <option value = 'medium'>medium</option>
                <option value = "hard">hard</option>
            </select>
            <p>enter types of question</p>
            <select name = "type" id = "topic_val">
                <option value = "0">Any</option>
                <option value = '9'>General Knowledge</option>
                <option value = '11'>Film</option>
                <option value = "12">Music</option>
                <option value = "17">Science</option>
                <option value = "20">Mythology</option>
                <option value = "21">Sports</option>
            </select>
            <button id = "play_but" onClick = {props.play_f}>PLAY</button>
        </div>
    )
}

export default Intro;