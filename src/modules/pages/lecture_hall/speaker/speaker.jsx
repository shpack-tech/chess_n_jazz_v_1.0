import React from "react";
import './speaker.scss';

function Speaker({ava, date, name}) {

  return (

    <div className="speaker">
      <div className="speaker__avatar">
        <img src={ava} alt="" />
      </div>
      <div className="speaker__data">
        <span>{date}</span>
        <span>{name}</span>
      </div>
    </div>

  );

};

export default Speaker;