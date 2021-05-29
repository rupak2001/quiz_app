import React, { useState } from 'react';
import Intro from './intro_board'
import Spinner from 'react-bootstrap/Spinner'
import Game from './game'
import Score from './scoreboard'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import './css/quiz.css'

function App() {
	var player = null
	var q_data = null;
	var corr_ans = null;
	var count_q = 0;
	var stat = 0;
	var [g_ini, g_sw] = useState(<Intro play_f={() => { show_quizes() }} />)
	var [clock, clockup] = useState(null);
	var key = -1;

	//EXTRACT THE VALUES FROM FRONTEND AND FETCH DATA FROM API ACCORDINGLY


	var show_quizes = async () => {
		var dif_sel = document.getElementById('diff_val').value;
		var top_sel = document.getElementById('topic_val').value;
		player = document.getElementById('name').value;
		g_sw(<Spinner animation="border" variant="warning" />)
		await fetch('https://opentdb.com/api.php?amount=10&category=' + top_sel + '&difficulty=' + dif_sel + '&type=multiple')
			.then(res => res.json())
			.then(data => { q_data = data.results; })
		game(q_data, count_q);
	}


	//CHECK THE RESULT AFTER ALL THE 10 QUESTIONS ATTENDED

	var res = (answer) => {
		console.log("rendered")
		if (corr_ans === answer) {
			stat += 1;
		}
		if (count_q === 9) {
			clockup(null);
			result();
		}
		else {
			count_q += 1;
			game(q_data, count_q);
		}
	}




	const renderTime = ({ remainingTime }) => {
		if (remainingTime === 0) {
		}
		else {
			return (
				<div className="value">{remainingTime}</div>
			);
		}
	};





	//THE GAME LOGIC


	var game = (questions, counter) => {

		//SEGREGATING DATA(ARRANGING WRONG AND RIGHT ANSWER RANDOMLY)


		var data_q = [];
		var corr_place = Math.floor(Math.random() * 4);
		var count = 0;
		for (var j = 0; j < 4; j++) {
			if (j !== corr_place) {
				data_q.push(questions[counter].incorrect_answers[count])
				count++;
			}
			else {
				data_q.push(questions[counter].correct_answer);
			}
		}
		corr_ans = questions[counter].correct_answer;



		//RENDER THE GAME COMPONENT


		g_sw(<Game
			p_name={player}
			q_quiz={questions[counter].question}
			a_1={data_q[0]}
			a_2={data_q[1]}
			a_3={data_q[2]}
			a_4={data_q[3]}
			chk_ans1={() => { chk_ans1() }}
			chk_ans2={() => { chk_ans2() }}
			chk_ans3={() => { chk_ans3() }}
			chk_ans4={() => { chk_ans4() }}
		/>)

		//TIMER


		key += 1

		clockup(<CountdownCircleTimer
			isPlaying
			key={key}
			duration={10}
			colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
			onComplete={() => {res()}}
		>
			{renderTime}
		</CountdownCircleTimer>)




		//BUTTON EVENTS (REFLECTS VALUE TO res())

		var chk_ans1 = () => {
			var answer = document.getElementById('game_but1').name;
			res(answer);
		}

		var chk_ans2 = () => {
			var answer = document.getElementById('game_but2').name;
			res(answer);
		}

		var chk_ans3 = () => {
			var answer = document.getElementById('game_but3').name;
			res(answer);
		}

		var chk_ans4 = () => {
			var answer = document.getElementById('game_but4').name;
			res(answer);
		}


	}

	//SCOREBORD RENDERER

	var result = () => {
		if (stat === 9 || stat === 10) {
			g_sw(<Score
				marks={stat}
				end_msg="EXCELLENT WORK!!!"
				reset={() => reset()}
			/>)
		}
		else if (stat >= 5 && stat < 9) {
			g_sw(<Score
				marks={stat}
				end_msg="GOOD JOB!!"
				reset={() => reset()}
			/>)
		}
		else {
			g_sw(<Score
				marks={stat}
				end_msg="IT'S ALRIGHT"
				reset={() => reset()}
			/>)
		}

	}

	//RESET ALL VALUES AND RENDER BACK TO INTRO PAGE

	var reset = () => {
		player = null
		q_data = null;
		corr_ans = null;
		count_q = 0;
		stat = 0;
		g_sw(<Intro play_f={() => { show_quizes() }} />)
	}



	return (
		<div className="App">
			{clock}
			{g_ini}
		</div>
	);
}

export default App;
