import React from "react";
import "./AksBotQuestion.css";

const AksBotQuestion = (props) => {
  const options = [
    { text: "html", handler: () => {}, id: 1 },
    { text: "css", handler: () => {}, id: 2 },
    { text: "Javascript", handler: () => {}, id: 3 },
    { text: "mongodb", handler: () => {}, id: 4 },
    { text: "express-js", handler: () => {}, id: 5 },
    { text: "react-js", handler: () => {}, id: 6 },
    { text: "node-js", handler: () => {}, id: 7 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));
  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default AksBotQuestion;
