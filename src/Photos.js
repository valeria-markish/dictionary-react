import React, { useState } from "react";
import axios from "axios";

export default function Photos(props) {
  const [dataPhotos, setDataPhotos] = useState(null);
  function handlePhotos(response) {
    // console.log(response.data);
    setDataPhotos(response.data.photos);
  }
  let apiKeyPexels = "KxHdtbLuNaHyq8ZwdGUUsK9HhImpDlD51oXOwcYIy9GJt3P7HoaIEQkv";
  let headers = { Authorization: `${apiKeyPexels}` };
  let apiUrlPexels = `https://api.pexels.com/v1/search?query=${props.word}&per_page=1`;
  axios.get(apiUrlPexels, { headers: headers }).then(handlePhotos);

  if (dataPhotos) {
    return (
      <div className="section">
        {dataPhotos.map(function (showPhotos, index) {
          if (index < 6) {
            return (
              <div key={index}>
                <a
                  href={showPhotos.src.original}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={showPhotos.src.tiny} alt={showPhotos.alt} />
                </a>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
