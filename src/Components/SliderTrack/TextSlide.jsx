import React, {useState, useEffect} from 'react';
import MoohLogo from "../../assets/mooh_logo.png";
import Breaking_News_Logo from "../../assets/Breaking_News_Img.png";


function TextSlide({item}) {

   const [currentTime, setCurrentTime] = useState(new Date());

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    // Format current time
    const formattedTime = currentTime.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });


  return (
    <section className='text-slide'>

        {/* Logo + Live Section */}
            <div className="mooh-live-section">

                {/* MOOH Logo */}
                <img
                    className="mooh-logo"
                    src={MoohLogo}
                    alt="MOOH Logo"
                />

                {/* Live Time */}
                <div className="live-time">
                    <span className="live-dot"></span>
                    <span className="live-text">LIVE</span>
                    <span className="current-time">{formattedTime}</span>
                </div>

            </div>
            
       
        <h1>{item.title}</h1>

        {/* Breaking News */}
            <img
                className="breaking-news"
                src={Breaking_News_Logo}
                alt="Breaking News"
            />
                    
    </section>
  )
}

export default TextSlide