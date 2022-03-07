import { HTMLProps, useState } from 'react'
import useAudio from './useAudio'
import { ReactComponent as IconPlay } from 'assets/material/play_circle.svg'
import { ReactComponent as IconPause } from 'assets/material/pause_circle.svg'

export interface AudioPlayerProps extends HTMLProps<HTMLDivElement> {
  title: string
  url: string
}

const PlayPauseButton: React.FC<{ audio: HTMLAudioElement }> = ({ audio }) => {
  const [playing, setPlaying] = useState(false)
  const iconClasses =
    'd-block pointer-hover transition-all fill-white opacity-75 opacity-100-hover'
  const iconStyles = { width: '5ch', height: '5ch' }
  return (
    <div
      onClick={() => {
        if (playing) {
          audio.pause()
          setPlaying(false)
        } else {
          audio.play()
          setPlaying(true)
        }
      }}
    >
      {playing && <IconPause className={iconClasses} style={iconStyles} />}
      {!playing && <IconPlay className={iconClasses} style={iconStyles} />}
    </div>
  )
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  url,
  children,
  className,
  style,
  ...props
}) => {
  const [audio, progress] = useAudio(url)
  return (
    <div
      {...props}
      className={`
        p-2
        align-items-center
        justify-content-center
        ${className}
      `}
      style={{ minWidth: '25%', ...style }}
    >
      <div className="w-100 h-100 d-flex flex-row">
        <div className="flex-fill">{children}</div>
        <div className="d-flex flex-column align-items-start d-none d-sm-block">
          <PlayPauseButton audio={audio} />
        </div>
      </div>
      <div className="d-flex flex-row mt-2 align-items-center">
        <div className="d-sm-none me-2">
          <PlayPauseButton audio={audio} />
        </div>
        <div
          className="w-100 bg-dark bg-opacity-25 flex-fill"
          style={{ minHeight: '7px', maxHeight: '21px' }}
        >
          <div
            className="bg-dark"
            style={{
              minHeight: '7px',
              maxHeight: '21px',
              width: progress * 100 + '%',
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer
