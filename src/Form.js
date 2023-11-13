import React from "react";
import axios from "axios";

export default function Form(props) {
  function handleResponse(response) {
    console.log(response.data);
    props.setResult(response.data);
  }
  function search() {
    let apiKey = "10469a8133000fdbto80b02142f32bfd";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${props.word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleWordChange(event) {
    props.setWord(event.target.value);
  }
  return (
    <div>
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
