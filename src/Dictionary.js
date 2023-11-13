import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results.js";
import Form from "./Form.js";

export default function Dictionary() {
  const [word, setWord] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <h2>What word would you like to look up?</h2>
      <Form word={word} setWord={setWord} setResult={setResult} />
      <Results result={result} />
    </div>
  );
}
