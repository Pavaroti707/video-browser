import React, { useState } from "react";

export default function SerachBar({ setWord }) {
  const [tempWord, setTempWord] = useState("");

  const changeHandler = (e) => {
    setTempWord(e.target.value);
  };

  const buttonHandler = (e) => {
    setWord(tempWord);
  };

  return (
    <div className="video-browser-search">
      <div className="ui input">
        <input type="text" placeholder="Search..." onChange={changeHandler} />
        <button className="ui primary button" onClick={buttonHandler}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
