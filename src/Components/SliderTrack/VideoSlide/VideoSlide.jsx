import React from 'react';
import "./VideoSlide.css";

function VideoSlide({item}) {
  return (
    <section className='video-slide'>

        <video autoPlay muted playsInline >
            <source 
                src={item.field_media.url} type="video/mp4"
                alt={item.title}
            />
        </video>
    </section>
  )
}

export default VideoSlide