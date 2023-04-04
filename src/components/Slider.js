import { useEffect, useState } from 'react';

// Images
import bg01 from '../assets/images/bg01.jpg';
import bg02 from '../assets/images/bg02.jpg';
import bg03 from '../assets/images/bg03.jpg';

export default function Slider() {
  const [slide, setSlide] = useState(bg03);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const delay = 7000;
    const slides = [bg01, bg02, bg03];
    const interval = setInterval(() => {
      setSlide(slides[index]);
      setIndex((index + 1) % slides.length);
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <div className="simpleslide100">
      <div
        className="simpleslide100-item bg-img1"
        style={{
          backgroundImage: `url(${slide})`,
          animation: 'fadeIn 7s infinite',
        }}
      ></div>
    </div>
  );
}