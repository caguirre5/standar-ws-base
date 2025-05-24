import { motion } from 'framer-motion';
import content from '../data/content.json';
import image from '../images/hero.jpg';
import Header from './Header';

const Hero = () => {
  const { headline, ctaText } = content.hero;

  return (
    <motion.section
      className="relative w-screen h-screen bg-cover bg-center bg-fixed flex justify-center"
      style={{ backgroundImage: `url(${image})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header/>
      {/* CORRECTED Overlay con dimensiones explícitas */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000b3] z-10" />

      {/* Contenido encima del overlay */}
      <div className="w-[80%]   relative z-20 h-full flex flex-col justify-center md:px-20">
        <h1 className=" text-white text-4xl md:text-6xl font-extrabold max-w-2xl leading-tight">
          {headline}
        </h1>
        <button className="mt-8 w-fit px-10 py-4 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-full text-lg shadow-md transition-all duration-300">
          {ctaText}
        </button>
      </div>
    </motion.section>

  );
};

export default Hero;