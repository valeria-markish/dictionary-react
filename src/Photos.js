import React from "react";
import axios from "axios";

export default function Photos(props) {
  function handlePhotos(response) {
    console.log(response.data.photos[0]);
    return (
      <div className="section">
        <img src={response.data.photos[0].src.tiny} alt="" />
      </div>
    );
  }
  let apiKeyPexels = "KxHdtbLuNaHyq8ZwdGUUsK9HhImpDlD51oXOwcYIy9GJt3P7HoaIEQkv";
  let headers = { Authorization: `${apiKeyPexels}` };
  let apiUrlPexels = `https://api.pexels.com/v1/search?query=${props.word}&per_page=1`;
  axios.get(apiUrlPexels, { headers: headers }).then(handlePhotos);
}
