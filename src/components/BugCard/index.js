import React from "react";
import "./style.css";

function BugCard(props) {
  return (
    <div className="card" onClick={() => { props.shuffleBug(props.id); 
    
    
    } }>
      
     
      <div className="img-container">
        <img alt={props.name} src={props.image} />


      </div>
      <div className="content">
            <h3> {props.name} </h3>
          
      </div>
     
    </div>
  );
}

export default BugCard;
