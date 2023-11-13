import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  function handleResponse(response) {
    console.log(response.data);
  }
  function search() {
    let apiKey = "10469a8133000fdbto80b02142f32bfd";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  const [word, setWord] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleWordChange(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <h2>What word would you like to look up?</h2>
      <form onSubmit={handleSubmit}>
        <div className="row d-flex justify-content-center">
          <div className="col-4 mt-1">
            <input
              type="search"
              placeholder="Enter a word..."
              className="from-control w-100"
              autoFocus="on"
              onChange={handleWordChange}
            ></input>
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="btn btn-secondary w-100"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
