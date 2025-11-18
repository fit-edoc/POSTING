import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1592355591829-aaae33fcff1d?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531514381259-8c9fedc910b8?q=80&w=735&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1759818319027-dc631ed9732b?q=80&w=718&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1762755647813-017e128a4ba0?w=600&auto=format&fit=crop&q=60"
  ];

  const cardWidth = 260;
  const gap = 60;

  const nextClick = () => setCurrent(prev => (prev + 1) % images.length);
  const prevClick = () => setCurrent(prev => (prev - 1 + images.length) % images.length);

  return (
    <div className="h-screen w-screen bg-neutral-900 flex flex-col items-center py-10 justify-start gap-6">

      <div className="flex gap-4 justify-center items-center">
        <button onClick={prevClick} className="px-4 py-4 bg-gradient-to-r from-neutral-400 to-white rounded-full"><ArrowLeft/></button>
        <button onClick={nextClick} className="px-4 py-4 bg-gradient-to-r from-white to-neutral-400  rounded-full"><ArrowRight/></button>
      </div>

      <div className="relative w-[70%] flex justify-center h-[400px] overflow-hidden py-6">
        {images.map((img, index) => {

          // FIXED OFFSET LOGIC
          let offset = index - current;

          if (offset > images.length / 2) offset -= images.length;
          if (offset < -images.length / 2) offset += images.length;

          return (
            <motion.img
              key={index}
              src={img}
              className="absolute h-[350px] w-[240px] rounded-xl object-cover"
              animate={{
                x: offset * (cardWidth + gap),
                scale: offset === 0 ? 1.15 : 0.9,
                zIndex: offset === 0 ? 10 : 1
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 22
              }}
            />
          );
        })}
      </div>

      <div className="h-[20px] w-full flex justify-center items-center">
        <div className="flex gap-3 mt-4">
          {images.map((_, idx) => (
            <motion.div
              key={idx}
              className="rounded-full bg-white"
              initial={false}
              animate={{
                width: idx === current ? 22 : 10,
                height: 10,
                opacity: idx === current ? 1 : 0.4
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
