import Header from "../components/Header";
import Image1 from "../images/secabout/Image1.png";
import Image2 from "../images/secabout/Image2.png";
import bgImage from '../images/portraits/about.jpeg';
import supportImage from '../images/portraits/about.png';
import HistoryImage from "../images/secabout/Image3.png"
import content from '../data/content.json';
import { motion } from "framer-motion";

const Contact = () => {
    const { description, blocks, ourHistory } = content.about;
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
                <div className="absolute top-0 left-0 w-full h-[40vh] bg-[#00000080] z-10"/>
                <div className="z-10 w-[90%] md:w-[90%] lg:w-[80%] mb-10 lg:mb-22">
                    <h2 className="text-3xl md:text-6xl lg:text-5xl font-bold text-white">ABOUT US</h2>
                </div>
            </motion.div>

            <section className="bg-white py-16 px-6 md:px-20">
                <div className="max-w-[90%] md:max-w-[80%] lg:max-w-[80%] mx-auto flex flex-col md:flex-row gap-10">
                    {/* Columna izquierda */}
                    <div className="flex flex-col gap-6 flex-1  lg:p-6 rounded-md">
                    {/* Título principal */}
                    <div className="lg:p-4 rounded-md">
                        <p className="text-sm font-semibold uppercase text-gray-600">Get to know us</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">{content.about.section1.title}</h2>
                    </div>

                    {/* Descripción principal */}
                    {description && (
                        <div className="lg:p-4 rounded-md">
                        <p className="text-gray-700 text-sm leading-relaxed">{content.about.section1.paragraph1}</p>
                        </div>
                    )}

                    {/* Imagen izquierda */}
                    {blocks[0]?.image && (
                        <img
                        src={Image1}
                        alt="About Block 1"
                        className="w-full h-auto rounded-xl object-cover"
                        />
                    )}
                    </div>

                    {/* Columna derecha */}
                    <div className="flex flex-col gap-6 flex-1  lg:p-6 rounded-md">
                    {/* Imagen derecha */}
                    {blocks[1]?.image && (
                        <img
                        src={Image2}
                        alt="About Block 2"
                        className="w-full order-2 lg:order-1 h-auto rounded-xl object-cover"
                        />
                    )}

                    {/* Texto debajo de la imagen */}
                    {(blocks[1]?.title || blocks[1]?.text) && (
                        <div className="order-1 lg:p-4 rounded-md">
                        {blocks[1].title && (
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{content.about.section1.subtitle}</h3>
                        )}
                        {blocks[1].text && (
                            <p className="text-gray-700 text-sm leading-relaxed">{content.about.section1.paragraph2}</p>
                        )}
                        </div>
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
                <div className="absolute top-0 left-0 w-full h-[40vh] bg-[#00000001] z-10"/>

                <div className="z-10 w-[80%] text-center flex  flex-col items-center">
                    <hr  className="h-1.5 w-[30%] lg:w-[10%] bg-orange-400"/>
                    <h2 className="text-3xl lg:text-5xl font-bold text-white py-6">We provide the best service in industry</h2>
                    <p className="text-md lg:text-xl text-white">Add a line that tells users how easily they can get in touch with you</p>
                </div>
            </motion.div>

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
                        src={HistoryImage}
                        alt="About Block 2"
                        className="w-full h-auto rounded-xl object-cover shadow-md"
                        />
                    )}
                    </div>

                    {/* Texto */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 order-1 lg:order-2  lg:px-10">
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mt-2">
                             Our history
                            </h2>
                        </div>

                        {description && (
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                            {ourHistory}
                            </p>
                        )}
                    </div>
                </div>
            </section>
            <div className="w-full bg-gray-200 flex flex-col items-center justify-center py-14">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-400 mt-2 ">What we practice</h2>
                <div className="py-10 w-[90%] lg:w-[80%] px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                {content.about.values.map((value, i) => (
                    <div key={i} className="bg-white  rounded-xl shadow px-6 lg:px-12 py-10 text-center flex flex-col items-center">
                        <p className="font-semibold mb-6 text-xl text-orange-500">{value.title}</p>
                        <p className="text-gray-600 text-sm md:text-base text-center">{value.text}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}


export default Contact;