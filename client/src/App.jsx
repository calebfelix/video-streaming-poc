import "./App.css";

import { useRef } from "react";
import VideoPlayer from "./assets/VideoPlayer";

function App() {
  const playerRef = useRef(null);
  // hardcoded for now
  const videoLink =
    "http://localhost:8000/uploads/courses/4a24d07f-0d78-49ec-ae30-c7a6983cff7c/index.m3u8";
  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{ src: videoLink, type: "application/x-mpegURL" }],
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <>
      <div>
        <h1>VideoPlayer</h1>
        <VideoPlayer options={videoPlayerOptions} onReady={handlePlayerReady} />
      </div>
    </>
  );
}

export default App;
