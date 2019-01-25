import React from "react";
import "./style.css";

function Score(props) {
  return (<div className="score">
  <h1>SCORE: {props.score} || HIGH SCORE: {props.highScore}</h1>
  <img alt="punchbuggy" src="http://kamranjune.github.io/clickygame/assets/images/punchbuggy.jpg"/>
  <br/>
  

  </div>);
}

export default Score;
