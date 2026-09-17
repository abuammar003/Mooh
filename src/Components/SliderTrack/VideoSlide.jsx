import React from 'react'

function VideoSlide({item}) {
  return (
    <section className='video-slide'>

        <video autoPlay muted loop playsInline >
            <source 
                src={item.field_media.url} type="video/mp4"
                alt={item.title}
            />
        </video>
    </section>
  )
}

export default VideoSlide