import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
  
const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const data = [
    {
      name: "Priya Sharma",
      role: "Frontend Developer",
      bg:"#b6efff",
      feedback:
        "I found my dream job within a week! The platform’s clean UI and quick filters made the process super easy.",
      avatar: "/icons/4th.jpg",
      rating: 5,
    },
    {
      name: "Priya Verma",
      role: "HR Manager, SoftTech Co.",
      bg:"#abffb8",
      feedback:
        "Posting jobs and managing applications has never been smoother. The dashboard saved us so much time.",
      avatar: "/icons/2nd.jpg",
      rating: 5,
    },
    {
      name: "Rahul Nair",
      role: "UI/UX Designer",
      bg:"#e6ffab",
      feedback:
        "The platform’s personalized job recommendations helped me discover opportunities I hadn’t even considered.",
      avatar: "/icons/3rd.jpg",
      rating: 4,
    },
    {
      name: "Shivani Singh",
      role: "Talent Acquisition Lead",
      bg:"#ffd089",
      feedback:
        "We hired multiple candidates through this portal. The applicant tracking system is incredibly intuitive.",
      avatar: "/icons/4th.jpg",
      rating: 5,
    },
  ];

  const nextClick = () => {
    setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevClick = () => {
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  return (
    <div className="blob min-h-screen w-screen flex flex-col items-center justify-center">
      
      
      <div className="relative w-[550px]  border-black border-[1px] h-[450px] rounded-[30px] overflow-hidden">
<AnimatePresence mode="wait">


        {data.map((item, index) => index === current && (


          <motion.div
        
       initial={{ scale:1.5, opacity: 0,filter:"blur(20px)" }}
        animate={{ scale:[1.1,1], opacity: 1,filter:"blur(0px)"}}
        exit={{ scale:0,rotate:0,filter:"blur(20px)"  }}
        transition={{ duration: 0.5,ease:"linear"}}
            key={index}
            style={{backgroundColor:item.bg}}
            className={`absolute inset-0 transition-all  duration-500 flex flex-col items-center justify-center p-6 rounded-[30px] shadow-xl 
            ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
            `}
          >
            <img
              src={item.avatar}
              className="h-20 w-20 rounded-full object-cover mb-4"
              alt=""
            />

            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.role}</p>

            <p className="text-center mt-3 text-gray-700">{item.feedback}</p>
          </motion.div>
        ))}
</AnimatePresence>
      </div>

      
      <div className="flex gap-6 mt-5">
        <button
          onClick={prevClick}
          className="px-4 py-4 overflow-hidden  shadow-sm shadow-gray-600 z-10 relative bg-gray-400 text-white rounded-full"
        >
          <ArrowLeft/>
          <div className="h-[50px] w-[50px] blur-sm left-3 bottom-3 inset-0 -z-10 absolute rounded-full  bg-gradient-to-r from-gray-900"></div>
        </button>

         <button
          onClick={nextClick}
          className="px-4 py-4 overflow-hidden  shadow-sm shadow-gray-600 z-10 relative bg-gray-400 text-white rounded-full"
        >
          <ArrowRight/>
          <div className="h-[50px] w-[50px] blur-sm left-3 bottom-3 inset-0 -z-10 absolute rounded-full  bg-gradient-to-r from-gray-900"></div>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
