import { motion } from 'framer-motion';
import content from '../data/content.json';
import image from '../images/hero.png';
import Header from './Header';

const Hero = () => {
  const { headline, ctaText } = content.hero;

  return (
    <motion.section
      className="relative w-full min-h-screen bg-cover bg-center bg-fixed flex justify-center px-4 sm:px-6" // 👈 Añadir padding horizontal en móvil
      style={{ backgroundImage: `url(${image})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header layout='end'/>
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000042] z-10"
      />

      <div className="w-full max-w-[90%] md:max-w-[90%] lg:max-w-[80%] relative z-20 min-h-full flex flex-col 
        justify-center items-center 
        lg:items-center lg:mt-0 
      ">
        <h1 className="
          text-2xl max-w-[95%] text-center   // 👈 Base móvil
          md:text-5xl md:max-w-[90%]  // 👈 Tablets
          lg:text-6xl lg:max-w-[70%] lg:text-center  // 👈 Desktop
          text-white font-extrabold  leading-snug md:leading-tight
        ">
          {headline}
        </h1>
        <button className="
          text-base            // 👈 Móvil
          md:text-lg           // 👈 Tablet en adelante
          mt-6 md:mt-8
          w-fit px-6 py-2 md:px-9 md:py-3
          bg-orange-400 hover:bg-orange-500 text-white rounded-full shadow-md transition-all duration-300
        ">
          {ctaText}
        </button>
      </div>
    </motion.section>


  );
};

export default Hero;