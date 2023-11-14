import React, { useState } from "react";
import Results from "./Results.js";
import Form from "./Form.js";

export default function Dictionary() {
  const [word, setWord] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <div className="Dictionary">
      <h1 className="mb-4">Dictionary</h1>
      <div className="section">
        <h2 className="mb-3">What word would you like to look up?</h2>
        <Form word={word} setWord={setWord} setResult={setResult} />
        <div className="mt-2">
          <small>E.g. book, moon, sunset, party</small>
        </div>
      </div>
      <Results result={result} />
    </div>
  );
}
