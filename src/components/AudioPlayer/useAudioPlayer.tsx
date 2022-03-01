import { useEffect, useState } from 'react'

const useAudioPlayer = (url: string): [boolean, number, () => void] => {
  const [audio] = useState(new Audio(url))
  const [progress, setProgress] = useState(0)
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing, audio])

  useEffect(() => {
    const handlerSoundEnded = () => {
        setPlaying(false)
        setProgress(0)
    }
    audio.addEventListener('ended', handlerSoundEnded)
    return () => {
      audio.removeEventListener('ended', handlerSoundEnded)
    }
  }, [audio])

  useEffect(() => {
    const interval = setInterval(() => {
      if (audio.duration > 0) {
        setProgress(audio.currentTime / audio.duration)
      } else {
        setProgress(0)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [audio])

  return [playing, progress, toggle]
}

export default useAudioPlayer
