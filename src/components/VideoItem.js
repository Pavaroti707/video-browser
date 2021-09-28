import React from "react";

export default function VideoItem({
  link,
  img,
  titles,
  desc,
  index,
  imageClick,
}) {
  const clickHandler = (e) => {
    imageClick(index);
  };

  return (
    <div className="video-browser-item">
      {index === 0 ? (
        <div className="video-browser-item-one">
          <iframe
            width="560"
            height="315"
            src={link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="video-browser-item-one-title">{titles}</p>
          <p className="video-browser-item-one-description">{desc}</p>
        </div>
      ) : (
        <div className="video-browser-item-rest">
          <img
            className={"video No" + (index + 1)}
            src={img}
            alt={"Video No" + (index + 1)}
            onClick={clickHandler}
          />
          <p className="video-browser-item-rest-title">{titles}</p>
        </div>
      )}
    </div>
  );
}
