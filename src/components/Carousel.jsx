import React, { useState, useEffect, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Carousel = () => {
  const images = [
    "https://www.boat-lifestyle.com/cdn/shop/files/Rockerz_650_Pro_desktop.png?v=1764329294",
    "https://www.boat-lifestyle.com/cdn/shop/files/Zenith_Pro_22f624e7-cc42-40a2-a080-f42256e39cb9.png?v=1761197368",
    "https://www.boat-lifestyle.com/cdn/shop/files/chrome_eon_desktop_9cb39aa9-1024-46d7-9a59-34d7a6792518.png?v=1763706308",
    "https://www.boat-lifestyle.com/cdn/shop/files/Desktop_Banner_1_7b932672-e680-430e-b5b0-79ea88aa3965.png?v=1762234268",
    "https://www.boat-lifestyle.com/cdn/shop/files/stone_350_pro_desktop_9604c91b-0839-47b1-998f-c5b17659996b.png?v=1763705873",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const touchStartX = useRef(0);

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [currentIndex]);

  const startAutoSlide = () => {
    stopAutoSlide();
    timeoutRef.current = setTimeout(goNext, 3000);
  };

  const stopAutoSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  /* Touch (mobile swipe) */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (touchStartX.current - endX > 50) goNext();
    if (endX - touchStartX.current > 50) goPrev();
  };

  return (
    <div
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[35vh] sm:h-[40vh] md:h-[50vh] overflow-hidden"
    >
      {/* IMAGES */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className="w-full h-full object-fill md:object-cover shrink-0"
            loading="lazy"
          />
        ))}
      </div>

      {/* LEFT BUTTON */}
      <button
        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white/70 p-2 sm:p-3 rounded-full shadow hover:bg-white"
        onClick={goPrev}
      >
        <AiOutlineLeft className="text-lg sm:text-2xl" />
      </button>

      {/* RIGHT BUTTON */}
      <button
        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white/70 p-2 sm:p-3 rounded-full shadow hover:bg-white"
        onClick={goNext}
      >
        <AiOutlineRight className="text-lg sm:text-2xl" />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2 sm:gap-3">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`cursor-pointer rounded-full transition-all
              ${
                currentIndex === idx
                  ? "bg-white w-3 h-3 sm:w-4 sm:h-4"
                  : "bg-gray-400 w-2 h-2 sm:w-3 sm:h-3"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
