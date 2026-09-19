import {useEffect, useState} from 'react';
import "./SliderMain.css";
import MoohData from "../../response.json";
import TextSlide from './TextSlide/TextSlide';
import ImageSlide from './ImageSlide/ImageSlide';
import VideoSlide from './VideoSlide/VideoSlide';


function SliderMain() {

    const Data = MoohData.data;

    const [adsData, setAdsData] = useState(Data);
    // console.log(MoohData.data)
    // console.log(adsData[2].title)

    const [currentIndex, setCurrentIndex] = useState(0);  

    // Current Slide
    const currItem = adsData[currentIndex]

    
    // Auto Silde
    useEffect(()=> {
        const duration = Number(currItem?.field_duration) || 10;

        const timer = setTimeout(() => {

            setCurrentIndex((prev) => 
                prev === adsData.length -1 ? 0 : prev +1
            )

        }, duration * 1000);

        return ()=> clearTimeout(timer);
        }, [currentIndex, adsData]);


  return (
    <section className='slider-main'>

        <div className="slider-container" >

            {/* <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

                {adsData.map((item) => ( */}
                    {/* <div className='slide' key={currItem.nid}> */}


                            {/* Data Type === TEXT  */}
                        {currItem?.bundle === "news" && (
                            <TextSlide item={currItem} />
                        )}

                            {/* Data Type === TEXT  */}
                        {currItem.field_media?.type === "image" && (
                            <ImageSlide item={currItem}/>
                        )}

                            {/* Data Type === TEXT  */}
                        {currItem.field_media?.type === "video" && (
                            <VideoSlide item={currItem}/>
                        )}
                    
                    
                    
                    {/* </div> */}
                {/* ))}

            </div> */}

        </div>
    </section>
  )
}

export default SliderMain