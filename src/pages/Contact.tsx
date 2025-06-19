import Header from "../components/Header";
import bgImage from '../images/portraits/contact.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import content from '../data/content.json'; 
import { motion } from "framer-motion";

const iconMap: Record<string, any> = {
    Facebook: faFacebookF,
    Twitter: faTwitter,
    Instagram: faInstagram,
    LinkedIn: faLinkedinIn
  };
  

const Contact = () => {

    return (
        <div className="min-h-screen bg-white flex flex-col items-center">
        {/* Fondo superior */}
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
                    <h2 className="text-3xl md:text-6xl lg:text-5xl font-bold text-white">CONTACT US</h2>
                </div>
            </motion.div>


            {/* Contenido principal */}
            <div className=" py-10 w-[95%] md:w-[90%] lg:w-[80%] px-6 md:px-20">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left */}
                    <div className="flex-1 space-y-4 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-gray-700">Find us</h3>
                        
                        <div className="flex flex-col md:flex-row justify-center items-start lg:items-center">
                            <p className="flex-1 text-gray-600 mb-4 lg:mb-0">{content.contact.info.location}</p>
                            <div className="flex flex-1 gap-4 justify-end mb-2 lg:mb-0">
                                {content.contact.socials.map((social, i) => (
                                    <a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white text-lg hover:scale-110 transition"
                                    >
                                    <FontAwesomeIcon icon={iconMap[social.platform]} />
                                    </a>
                                ))}
                            </div>

                        </div>
                        <iframe
                            title="Google Maps"
                            src="https://maps.google.com/maps?q=central%20square%20new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-72 border-gray-200 rounded-xl"
                        />
                    </div>

                    {/* Right */}
                    {/* <div className="flex-1 rounded-xl p-6">
                    </div> */}

                    <div className="flex-1 bg-orange-400 rounded-xl p-6 shadow-lg">
                        <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                        <form className="space-y-4">
                            <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="flex-1 p-3 rounded-md border border-white text-white placeholder-white bg-transparent"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 p-3 rounded-md border border-white text-white placeholder-white bg-transparent"
                            />
                            </div>
                            <input
                            type="text"
                            placeholder="Subject"
                            className="w-full p-3 rounded-md border border-white text-white placeholder-white bg-transparent"
                            />
                            <textarea
                            placeholder="Message"
                            className="w-full p-3 rounded-md border border-white text-white placeholder-white bg-transparent h-40 resize-none"
                            ></textarea>
                            <button className="px-6 py-2 bg-white text-orange-500 rounded font-semibold hover:bg-gray-100 transition">
                                Submit
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            
            {/* Seccion de informacion */}

            <div className="w-full bg-gray-200 flex justify-center">
                <div className="py-10 w-[95%] md:w-[90%] lg:w-[80%] px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow px-12 py-10 text-start flex flex-col items-start">
                        <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-500 text-xl">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <p className="font-semibold mb-1">Make a call</p>
                            {content.contact.info.callUs.map((phone, i) => (
                        <p key={i} className="text-gray-600">{phone}</p>
                        ))}
                    </div>

                    <div className="bg-white rounded-xl shadow px-12 py-10 text-center flex flex-col items-start">
                        <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-500 text-xl">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <p className="font-semibold mb-1">Send email</p>
                            {content.contact.info.email.map((mail, i) => (
                        <p key={i} className="text-gray-600">{mail}</p>
                        ))}
                    </div>

                    <div className="bg-white rounded-xl shadow px-12 py-10 text-center flex flex-col items-start">
                        <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-500 text-xl">
                            <FontAwesomeIcon icon={faClock} />
                        </div>
                        <p className="font-semibold mb-1">Working hours</p>
                            {content.contact.info.workingHours.map((hours, i) => (
                        <p key={i} className="text-gray-600">{hours}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
