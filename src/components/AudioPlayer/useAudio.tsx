import { useEffect, useState } from "react";

const useAudio = (url: string): [HTMLAudioElement, number] => {
  const [audio] = useState<HTMLAudioElement>(new Audio(url));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handlerSoundEnded = () => {
      audio.currentTime = 0;
    };
    audio.addEventListener("ended", handlerSoundEnded);
    return () => {
      audio.removeEventListener("ended", handlerSoundEnded);
    };
  }, [audio]);

  useEffect(() => {
    if (audio.src !== url) {
      audio.pause();
      audio.currentTime = 0;
      audio.src = url;
      audio.load();
    }
  }, [url, audio]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audio.duration > 0) {
        setProgress(audio.currentTime / audio.duration);
      } else {
        setProgress(0);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [audio]);

  return [audio, progress];
};

export default useAudio;
