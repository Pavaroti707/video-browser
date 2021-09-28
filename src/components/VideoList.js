import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoItem from "./VideoItem";

export default function VideoList({ word, setWord }) {
  const KEY = process.env.REACT_APP_API_KEY;
  var URL =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&key=" +
    KEY +
    "&type=video&q=" +
    word +
    "&maxResults=5";
  const HEADERS = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const [links, setLinks] = useState([]);
  const [images, setImages] = useState([]);
  const [titles, setTitles] = useState([]);
  const [desc, setDesc] = useState([]);

  useEffect(() => {
    axios
      .get(URL, { HEADERS })
      .then((response) => {
        const tempLinks = response.data.items.map(
          (obj) => "https://www.youtube.com/embed/" + obj.id.videoId
        );
        setLinks(tempLinks);

        const tempTit = response.data.items.map((obj) => obj.snippet.title);
        setTitles(tempTit);

        const tempDesc = response.data.items.map(
          (obj) => obj.snippet.description
        );
        setDesc(tempDesc);

        const tempImages = response.data.items.map(
          (obj) => obj.snippet.thumbnails.high.url
        );
        setImages(tempImages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [URL]);

  const imageClick = (index) => {
    setWord(titles[index]);
  };

  return (
    <div className="video-browser-list">
      {links.map((value, index) => {
        return (
          <VideoItem
            link={value}
            img={images[index]}
            titles={titles[index]}
            desc={desc[index]}
            key={index}
            index={index}
            imageClick={imageClick}
          />
        );
      })}
    </div>
  );
}
