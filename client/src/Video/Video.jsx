import React from 'react'
import ReactPlayer from 'react-player'
import Lenguaje from '../assets/lenguajes _de_programacion.mp4'

export const Video = () => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url={Lenguaje}
        loop
        controls
        playing={false}
        width='100%'
        height='230%'
      />
    </div>
  )
}
