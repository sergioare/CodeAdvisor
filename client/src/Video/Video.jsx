import React from 'react'
import ReactPlayer from 'react-player'
import preview from '../assets/preview_video.png'

export const Video = () => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url={'https://firebasestorage.googleapis.com/v0/b/fb-2do.appspot.com/o/lenguajes%20_de_programacion.mp4?alt=media&token=c34fb3c2-5eca-48aa-9135-43f2f336e3a1'}
        loop
        controls
        playing={true}
        width='600px'
        height='350px'
        light={preview}
      // width='100%'
      // height='230%'
      />
    </div>
  )
}
