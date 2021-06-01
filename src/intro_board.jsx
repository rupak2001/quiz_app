import React from 'react';

var Intro = (props) => {
    return (
        <div className="bg">
            <h1>TRIVIA   LITE</h1>
            <div className = "innerbg">
                <p>Please enter your name</p>
                <input type="text" placeholder="please enter your name" id="name"></input>
                <p>enter difficulty</p>
                <select name="difficulty" id="diff_val">
                    <option value='easy'>easy</option>
                    <option value='medium'>medium</option>
                    <option value="hard">hard</option>
                </select>
                <p>enter types of question</p>
                <select name="type" id="topic_val">
                    <option value="0">Any</option>
                    <option value='9'>General Knowledge</option>
                    <option value='11'>Film</option>
                    <option value="12">Music</option>
                    <option value="17">Science</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sports</option>
                </select>
                <button id="play_but" onClick={props.play_f}>PLAY</button>
            </div>
            <div className="icon-bar">
                <a href="https://www.facebook.com/" target="blank" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="https://twitter.com/" target="blank" className="twitter"><i className="fa fa-twitter"></i></a>
                <a href="https://www.google.com/" target="blank" className="google"><i className="fa fa-google"></i></a>
                <a href="https://www.linkedin.com/" target="blank" className="linkedin"><i className="fa fa-linkedin"></i></a>
                <a href="https://www.youtube.com/" target="blank" className="youtube"><i className="fa fa-youtube"></i></a>
            </div>
        </div>

    )
}

export default Intro;