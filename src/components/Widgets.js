import React from "react";
import "./Widgets.css";
import { FiberManualRecord, Info } from "@material-ui/icons";
const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>linkedin news</h2>
        <Info />
      </div>
      {newsArticle("COVID-19", "top news - 943 readers")}
    </div>
  );
};

export default Widgets;
