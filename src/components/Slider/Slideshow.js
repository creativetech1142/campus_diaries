import React,{useState, useRef, useEffect} from 'react'
import './Slideshow.css';
import Image1 from './College Pics/1.jpg'
import Image2 from './College Pics/2.png'
import Image3 from './College Pics/3.jpg'
import Image4 from './College Pics/4.png'
import Image5 from './College Pics/5.png'
const Slideshow = () => {
    const images = [
        {
            imageLink: Image1
        },
        {
            imageLink: Image2
        },
        {
            imageLink: Image3
        },
        {
            imageLink: Image4
        },
        {
            imageLink: Image5
        }
      ]
    const delay = 3000;
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
  
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
      return () => {
        resetTimeout();
      };
    }, [index, images.length]);

    return (
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {images.map((val, index) => (
              <img src={val.imageLink} alt='logo'
                className="slide"
                key={index}
              />
            ))}
          </div>
    
          <div className="slideshowDots">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      );
}

export default Slideshow
