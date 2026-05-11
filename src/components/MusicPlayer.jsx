import { useEffect, useRef } from "react";
import musicFile from "../assets/wedding.mp3";

function MusicPlayer({ playing }) {

  const audioRef = useRef(null);

  useEffect(() => {

    if (audioRef.current) {

      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }

    }

  }, [playing]);

  return (
    <audio
      ref={audioRef}
      src={musicFile}
      loop
    />
  );
}

export default MusicPlayer;