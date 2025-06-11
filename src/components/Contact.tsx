import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import content from '../data/content.json';

const iconMap: Record<string, any> = {
  Facebook: faFacebookF,
  Twitter: faTwitter,
  Instagram: faInstagram,
  LinkedIn: faLinkedinIn
};

const Contact = () => {
  const { info, socials } = content.contact;
  return (
    <section className="min-h-screen bg-[#2d384b] py-18 flex items-center justify-center px-6 md:px-20 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-[90%] lg:max-w-[80%] mx-auto w-full">

        {/* Formulario: va primero en móvil/tablet, segundo en desktop */}
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <div className="bg-white rounded-2xl p-8 shadow-2xl w-full  text-gray-800">
            <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
            <form className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-4">

                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 pl-4 py-2 border rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 pl-4 py-2 border rounded"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded"
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-2 border rounded"
              />
            </form>
          </div>
        </div>

        {/* Información de contacto: segundo en móvil/tablet, primero en desktop */}
        <div className="order-2 lg:order-1 flex flex-col justify-center gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact info</h2>
            <div className="grid grid-cols-2 gap-y-6 gap-x-12 text-sm">

              {/* Call us */}
              <div>
                <h4 className="font-semibold mb-1">Call us</h4>
                {(Array.isArray(info.callUs) ? info.callUs : [info.callUs]).map((phone, i) => (
                  <p key={i}>{phone}</p>
                ))}
              </div>

              {/* Location */}
              <div>
                <h4 className="font-semibold mb-1">Our location</h4>
                <p>{info.location}</p>
              </div>

              {/* Email */}
              <div>
                <h4 className="font-semibold mb-1">Our email</h4>
                {(Array.isArray(info.email) ? info.email : [info.email]).map((email, i) => (
                  <p key={i}>{email}</p>
                ))}
              </div>

              {/* Working hours */}
              <div>
                <h4 className="font-semibold mb-1">Working hours</h4>
                {(Array.isArray(info.workingHours) ? info.workingHours : [info.workingHours]).map((workingHours, i) => (
                  <p key={i}>{workingHours}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow us</h4>
            <div className="flex space-x-4">
              {socials.map((social, i) => (
                <a
                  key={i}
                  // href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#2d384b] hover:scale-110 transition"
                >
                  <FontAwesomeIcon icon={iconMap[social.platform]} />
                </a>
              ))}
            </div>

          </div>
        </div>


      </div>
    </section>
  );
};

export default Contact;
