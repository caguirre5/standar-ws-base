import Header from "../components/Header";
import bgImage from '../images/portraits/service.png';
import secImage from "../images/secservices/Image2.png"
import supportImage from "../images/secservices/Image1.jpg"; 
import content from '../data/content.json';
import { motion } from "framer-motion";
import Services from "../components/serviceModels/Services";

const Projects = () => {
    const { description, blocks } = content.about;
    return(
        <div>
            <Header />
            <motion.div
                className="relative w-full h-[40vh] bg-cover bg-center bg-fixed flex justify-center items-end px-4 sm:px-6"                 
                style={{ backgroundImage: `url(${bgImage})`, backgroundPosition:"bottom" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute top-0 left-0 w-full h-[40vh] bg-[#00000070] z-10"/>
                <div className="z-10 w-[90%] md:w-[90%] lg:w-[80%] mb-10 lg:mb-22">
                    <h2 className="text-3xl md:text-6xl lg:text-5xl font-bold text-white">SERVICES</h2>
                </div>
            </motion.div>


            <div className="bg-neutral-200 py-16 lg:h-[60vh] flex flex-col justify-center items-center">
                <div className="z-10 text-center flex w-[80%]  flex-col items-center">
                    <hr  className="h-1.5 w-[30%] lg:w-[10%] bg-orange-400"/>
                    <h2 className="text-3xl lg:text-5xl  font-bold text-neutral-700 py-6">{content.services.section1.title}</h2>
                    <p className="text-md lg:text-xl  text-neutral-700">{content.services.section1.text}</p>
                </div>
            </div>

            <Services />

            <section className="bg-white px-4 md:px-10 lg:px-20">
                <div className="
                    max-w-[90%] md:max-w-[80%] lg:max-w-[80%] mx-auto
                    flex flex-col lg:flex-row-reverse
                    gap-10 items-center
                    py-12 md:py-20 lg:py-0 lg:min-h-[80vh] lg:justify-center
                ">
                    {/* Imagen */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    {blocks[1]?.image && (
                        <img
                        src={secImage}
                        alt="About Block 2"
                        className="w-full h-auto rounded-xl object-cover shadow-md"
                        />
                    )}
                    </div>

                    {/* Texto */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 order-1 lg:order-2  lg:px-10">
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mt-2">
                             {content.services.section2.title}
                            </h2>
                        </div>

                        {description && (
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            {content.services.section2.text}
                            </p>
                        )}
                    </div>
                </div>
            </section>

            <motion.div
                className="relative w-full py-16 lg:h-[40vh] bg-cover bg-center bg-fixed flex justify-center items-center px-4 sm:px-6"                 
                style={{ backgroundImage: `url(${supportImage})`, backgroundPosition:"bottom" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >   
                <div className="absolute top-0 left-0 w-full h-full bg-[#00000099] z-10"/>

                <div className="z-10 w-[80%] text-center flex  flex-col items-center">
                    <hr  className="h-1.5 w-[30%] lg:w-[10%] bg-orange-400"/>
                    <h2 className="text-3xl lg:text-5xl font-bold text-white py-6">{content.services.section3.title}</h2>
                    <p className="text-md lg:text-xl text-white">{content.services.section3.text}</p>
                </div>
            </motion.div>

            
        </div>
    )
}


export default Projects;