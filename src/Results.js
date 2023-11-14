import React from "react";
import Meanings from "./Meanings.js";

export default function Results(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="results">
        <div className="section">
          <h3>{props.result.word}</h3>
          <h4>/{props.result.phonetic}/</h4>
        </div>
        <div>
          {props.result.meanings.map(function (definitions, index) {
            if (index >= 0) {
              return (
                <div key={index}>
                  <Meanings data={definitions} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
