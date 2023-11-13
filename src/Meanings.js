import React from "react";

export default function Meanings(props) {
  return (
    <div>
      <h5>{props.data.partOfSpeech}</h5>
      <p>{props.data.definition}</p>
      <i>{props.data.example}</i>
    </div>
  );
}
