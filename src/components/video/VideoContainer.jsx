import React from "react";

function VideoContainer() {
  return (
    <div className="rounded-3xl md:h-[28rem] h-[15rem] md:w-3/5 w-5/6 bg-red-500 overflow-hidden my-8 border-[0.3rem] shadow-2xl border-yellow-700">
      <iframe
        src="https://www.youtube.com/embed/NiVXmLkcOiA"
        title="Doors Are Always Opening | Uber"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-full w-full"
      ></iframe>
    </div>
  );
}

export default VideoContainer;
