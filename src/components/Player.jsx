import React, { useRef, useState } from "react";

let music = [
  {
    title: "Nadiyon par",
    img: "/image/blog-5.jpg",
    src: "/music/NadiyonPar.mp3",
  },
  {
    title: "Par chanado",
    img: "/image/blog-6.jpg",
    src: "/music/ParChanado.mp3",
  },
  {
    title: "Pashto Song",
    img: "/image/blog-7.jpg",
    src: "/music/pashtoSong.mpeg",
  },
];

const Player = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [songs, setSongs] = useState(music[0]);
  const [songIndex, setSongIndex] = useState(0);
  let getAudio = useRef("");

  const playMusic = () => {
    getAudio.current.play();
    setIsPlay(true);
  };

  const pauseMusic = () => {
    getAudio.current.pause();
    setIsPlay(false);
  };

  const Play = () => {
    isPlay ? pauseMusic() : playMusic();
  };

  const nextSong = () => {
    setSongIndex((songIndex + 1) % songs.length)
    console.log(songIndex);
    setSongs(music[songIndex])
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row ">
        <div className="col-5 mx-auto d-flex align-items-center flex-column">
          <div className="music-player text-center">
            <h3 className="text-white text-capitalize">{songs.title}</h3>
            <img
              src={songs.img}
              className="img-fluid w-50 h-50 rounded-5"
              alt=""
            />
            <div className="music-bar mt-4">
              <audio src={songs.src} controls ref={getAudio}></audio>
              <div className="buttons d-flex gap-3 mt-4">
                <button className="btn btn-success">Previous</button>
                <button className="btn btn-success" onClick={Play}>
                  {isPlay ? "Pause" : "Play"}
                </button>
                <button className="btn btn-success" onClick={nextSong}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
