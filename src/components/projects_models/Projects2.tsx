import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import content from '../../data/content.json';

import project1 from '../../images/projects/p1.jpg';
import project2 from '../../images/projects/p2.jpg';
import project3 from '../../images/projects/p3.jpg';
import project4 from '../../images/projects/p4.jpg';
import project5 from '../../images/projects/p5.jpg';
import project6 from '../../images/projects/p6.jpg';


const Projects = () => {
  const { title, description } = content.projects;
  const images = [project1, project2, project3, project4, project5, project6];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-white py-[10vh] px-6 md:px-20">
      <div className="max-w-[90%] md:max-w-[90%] lg:max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-center">

        {/* 📱 Carrusel funcional solo en móvil */}
        <div className="block md:hidden order-1 relative">
          <div className="relative h-56 overflow-hidden rounded-xl shadow-md">
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Project ${currentIndex + 1}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover absolute top-0 left-0 rounded-xl"
              />
            </AnimatePresence>

            {/* Botones posicionados a los lados */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        {/* 💻 Grilla en md+ */}
        <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-4 order-1">
          {images.slice(0, 4).map((src, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md h-56 lg:h-64">
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Texto */}
        <div className="order-2 flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
            {title}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
