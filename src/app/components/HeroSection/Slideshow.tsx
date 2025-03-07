"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const slides = [
  {
    id: 1,
    image: "/hero10.jpg",
    title: "Educating the Cannabis Community",
    description: "Stay ahead with the latest news, trends, and innovations in the cannabis industry. Whether you're a beginner or an expert, we provide valuable insights to keep you informed and inspired.",
    buttonText: "Ask Mary",
  },
  {
    id: 2,
    image: "/hero11.jpg",
    title: "Explore Premium Cannabis Selections",
    description: "Discover a thoughtfully curated range of high-quality cannabis products designed to enhance wellness, relaxation, and creativity. Find the perfect match for your needs.",
    buttonText: "Shop Now",
  },
  {
    id: 3,
    image: "/hero12.jpg",
    title: "Connect with the Cannabis Community",
    description: "Join a vibrant network of like-minded individuals, share experiences, and stay informed on the latest trends and developments in the cannabis industry.",
    buttonText: "Get Started",
  },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); 
    // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-auto !px-0 h-screen overflow-hidden">
      <Carousel>
        <CarouselContent
          className="w-full h-screen flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Moves slides
        >
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="relative w-full h-screen flex items-center justify-center shrink-0">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  className="absolute inset-0 z-[-1]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              </div>

              {/* Animated Overlay Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative text-center text-white p-6 pt-16 lg:pt-20 max-w-4xl bg-black/40 rounded-xl flex flex-col items-center justify-center"
              >
                <motion.h1
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="text-6xl font-bold mb-3"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-xl mb-5"
                >
                  {slide.description}
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="px-6 py-3 bg-[#336303] text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300"
                >
                  {slide.buttonText}
                </motion.button>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Slideshow;
