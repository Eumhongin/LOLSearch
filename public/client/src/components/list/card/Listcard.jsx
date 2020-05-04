import React from "react";

function Listcard(props) {
  return (
    <div className="listcardpack">
      <div className="tier"></div>
      <div className="scorepack">
        <div className="score">
          <div className="win">{props.win}</div>
          <div className="lose">{props.lose}</div>
        </div>
        <div className="winrate"></div>
      </div>
      <div className="newrecord">
        <div className="champion"></div>
        <div className="result"></div>
      </div>
    </div>
  );
}

export default Listcard;
