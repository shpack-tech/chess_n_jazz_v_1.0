import React from "react";
import './gastronomy_item.scss'

function GastronomyItem({title, text, img}) {

  return(

    <div className="gastronomyitem">
      <div className="gastronomyitem__inner">
        <div className="gastronomyitem__inner-title">{title}</div>
        <div className="gastronomyitem__inner-text">{text}</div>
      </div>
      <div className="gastronomyitem__img">
        <img src={img} alt="" />
      </div>
    </div>

  );

};

export default GastronomyItem;