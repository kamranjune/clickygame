import React from "react";
import "./style.css";

function Score(props) {
  return (<div className="score">
  <h1>SCORE: {props.score} || HIGH SCORE: {props.highScore}</h1>
  <img alt="punchbuggy" src="/assets/images/punchbuggy.jpg"/>
  

  </div>);
}

export default Score;
