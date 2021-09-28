import React, { useState } from "react";
import Header from "./Header";
import SerachBar from "./SerachBar";
import VideoList from "./VideoList";

export default function Videobrowser() {
  const [word, setWord] = useState("");

  return (
    <div>
      <Header />
      <SerachBar setWord={setWord} />
      <VideoList word={word} setWord={setWord} />
    </div>
  );
}
