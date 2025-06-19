import Header from "../components/Header";
import bgImage from '../images/hero.png';
import bottomimage from "../images/sec_projects/BottomImage.png";
import content from '../data/content.json';
import { motion } from "framer-motion";

import p1 from "../images/projects/p1.jpg"
import p2 from "../images/projects/p2.jpg"
import p3 from "../images/projects/p3.jpg"
import p4 from "../images/projects/p4.jpg"

const Projects = () => {
    const images = [p1, p2, p3, p4]

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
                    <h2 className="text-3xl md:text-6xl lg:text-5xl font-bold text-white">PROJECTS</h2>
                </div>
            </motion.div>

            <div className="bg-neutral-200 py-16 lg:h-[60vh] flex flex-col justify-center items-center">
                <div className="z-10 text-center flex w-[80%]  flex-col items-center">
                    <hr  className="h-1.5 w-[30%] lg:w-[10%] bg-orange-400"/>
                    <h2 className="text-3xl lg:text-5xl  font-bold text-neutral-700 py-6">{content.projects.section1.title}</h2>
                    <p className="text-md lg:text-xl w-[75%] text-neutral-700">{content.projects.section1.text}</p>
                </div>
            </div>
            
            {/* Seccion de proyectos */}
            <main className="flex flex-col py-10 lg:py-16">
                {content.projects.projects.map((project, i) => {
                    const isEven = i % 2 === 0;
                    return (
                    <section key={i} className="bg-white px-4 md:px-10 lg:px-20">
                        <div
                        className="
                            max-w-[90%] md:max-w-[80%] lg:max-w-[80%] mx-auto
                            flex flex-col lg:flex-row-reverse
                            gap-10 items-center
                            py-8 md:py-20 lg:py-14 lg:justify-center
                        "
                        >
                        {/* Imagen */}
                        <div className={`w-full lg:w-[40%] ${isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
                            <img
                            src={images[i]}
                            alt={project.name}
                            className="w-full h-auto rounded-xl object-cover shadow-md"
                            />
                        </div>

                        {/* Texto */}
                        <div className={`w-full lg:w-1/2 flex flex-col gap-6 ${isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'} lg:px-10`}>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mt-2">
                            {project.name}
                            </h2>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            {project.description}
                            </p>
                        </div>
                        </div>
                    </section>
                    );
                })}
                </main>


            <motion.div
                className="relative w-full py-16 lg:h-[40vh] bg-cover bg-center bg-fixed flex justify-center items-center px-4 sm:px-6"                 
                style={{ backgroundImage: `url(${bottomimage})`, backgroundPosition:"top" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >   
                {/* <div className="absolute top-0 left-0 w-full h-[40vh] bg-[#00000050] z-10"/> */}

                <div className="z-10 w-[80%] text-center flex  flex-col items-center">
                    {/* <hr  className="h-1.5 w-[30%] lg:w-[10%] bg-orange-400"/> */}
                    <h2 className="text-3xl lg:text-5xl font-bold text-white py-6">{content.projects.section2.title}</h2>
                    <p className="text-md lg:text-xl text-white">{content.projects.section2.text}</p>
                </div>
            </motion.div>

            
        </div>
    )
}


export default Projects;