import React from 'react'
import ReactPlayer from 'react-player'
import Lenguaje from '../assets/lenguajes _de_programacion.mp4'
import preview from '../assets/registerimg.png'

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
        config={{
          file:{
            attributes:{
              poster:{preview}
            }
          }
        }}      
        />
    </div>
  )
}
