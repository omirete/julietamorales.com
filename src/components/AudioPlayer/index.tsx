import { HTMLProps } from 'react'
import useAudioPlayer from './useAudioPlayer'

export interface AudioPlayerProps extends HTMLProps<HTMLDivElement> {
  title: string
  url: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  url,
  children,
  className,
  style,
  ...props
}) => {
  const [playing, progress, toggle] = useAudioPlayer(url)
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
        <div className="d-flex flex-column">
          <div
            className={`
              h1
              ${playing ? 'bi-pause' : 'bi-play-circle-fill'}
              hover-pointer
              `}
            onClick={toggle}
          ></div>
        </div>
      </div>
      <div
        className="w-100 mt-2 bg-dark bg-opacity-25 flex-fill"
        style={{ minHeight: '7px' }}
      >
        <div
          className="bg-dark"
          style={{
            minHeight: '7px',
            width: progress * 100 + '%',
          }}
        ></div>
      </div>
    </div>
  )
}

export default AudioPlayer
