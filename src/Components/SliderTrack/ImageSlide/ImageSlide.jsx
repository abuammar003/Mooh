import "./ImageSlider.css";


function ImageSlide({item}) {
  return (
    <section className='image-slide'>

        <img 
            src={item.field_media.url} 
            alt={item.title} 
        />
        
    </section>
  )
}

export default ImageSlide