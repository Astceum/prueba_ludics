import React, { useEffect, useState } from 'react';

const ScrollDetector = () => {
  const [scrollCount, setScrollCount] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      const newScrollAmount = scrollTop - scrollAmount;
      console.log('Se ha producido un scroll de', newScrollAmount, 'píxeles');
      setScrollAmount(scrollTop);
      setScrollCount(prevCount => prevCount + 1);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollAmount]);

  return (
    <div className=' fixed text-teal-400 z-[9999]'>
      <p>Scroll Count: {scrollCount}</p>
      <p>Last Scroll Amount: {scrollAmount}</p>
    </div>
  );
};

export default ScrollDetector;
