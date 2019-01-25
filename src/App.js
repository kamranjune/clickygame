import React, { Component } from "react";
import Header from "./components/Header";
import Score from "./components/Score";
import BugCard from "./components/BugCard";
import Wrapper from "./components/Wrapper";
import bugs from "./bugs.json";
import _ from 'lodash';


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    bugs,
    clicked : [],
    score : 0,
    highScore: 0
  };

  //store boolean true false whether guy won or lost
  //clear score, put up alert that says you lost or won
  //copy score to high

  shuffleBug = id => {
    let bugs = _.shuffle(this.state.bugs);
    this.setState({bugs});
    
    if (this.state.clicked.includes(id)) {
      this.setState({highScore : Math.max(this.state.highScore, this.state.score), score:0, clicked :[]}); 
    } else{ 
    this.state.score++; this.state.clicked.push(id); console.log (this.state.clicked); this.setState({clicked: this.state.clicked}); }
     
    // this.state.clicked.includes(id) ? this.state.clicked = [] : console.log ("false");
    // this.state.clicked.includes(id) ? this.state.score = 0 : console.log ("false");

    // if (this.state.clicked.includes(id)) {
    //   this.state.highScore = this.state.score;
    //    this.state.score = 0;
    //       this.state.clicked : [];
    // } else { this.state.score++;}
    //   scuttlebutt = () =>
    //   return( 
    // let bugs = _.shuffle(this.state.bugs);
    // this.setState({bugs});)
  };




  // shuffleBug = id => {
  //   let bugs = _.shuffle(this.state.bugs);
  //   this.setState({bugs});
    
  //   this.state.clicked.includes(id) ? 
  //   this.setState({highScore : Math.max(this.state.highScore, this.state.score), score:0, clicked :[]}) : 
  //   (this.state.score++, this.state.clicked.push(id), console.log (this.state.clicked), this.setState({clicked: this.state.clicked}))
     
  //   // this.state.clicked.includes(id) ? this.state.clicked = [] : console.log ("false");
  //   // this.state.clicked.includes(id) ? this.state.score = 0 : console.log ("false");

  //   // if (this.state.clicked.includes(id)) {
  //   //   this.state.highScore = this.state.score;
  //   //    this.state.score = 0;
  //   //       this.state.clicked : [];
  //   // } else { this.state.score++;}
  //   //   scuttlebutt = () =>
  //   //   return( 
  //   // let bugs = _.shuffle(this.state.bugs);
  //   // this.setState({bugs});)
  // };


  // shuffleBug = id => {
  //   this.state.clicked.includes(id) ? this.setState({highScore : Math.max( this.state.score, this.state.score), score:0, clicked :[]}) : this.state.score++;
     
  //   // this.state.clicked.includes(id) ? this.state.clicked = [] : console.log ("false");
  //   // this.state.clicked.includes(id) ? this.state.score = 0 : console.log ("false");

  //   // if (this.state.clicked.includes(id)) {
  //   //   this.state.highScore = this.state.score;
  //   //    this.state.score = 0;
  //   //       this.state.clicked : [];
  //   // } else { this.state.score++;}
  //   console.log (this.state.clicked);

  //   let bugs = _.shuffle(this.state.bugs);
  //   // Set this.state.friends equal to the new friends array
  //   this.state.clicked.push(id);
  //   this.setState({ bugs, clicked : this.state.clicked});
 
  // };

//ternary is only required for inside JSX
//jsx is limited to a simple expression or ternary not anything like an if or a switch
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>
        <Header/>
        <Score score={this.state.score} highScore={this.state.highScore}/>
        {/* <Title>Slug Bug Clicky Game</Title> */}
        {this.state.bugs.map(bug => (
          <BugCard
            shuffleBug={this.shuffleBug}
            id={bug.id}
            key={bug.id}
            name={bug.name}
            image={bug.image}
       
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
