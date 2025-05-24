import content from '../data/content.json';
import bgImage from '../images/services.jpg'; // Ruta local a tu imagen

const Services = () => {
  const { title, subtitle, items } = content.services;

  return (
    <section
      className="relative h-screen bg-cover bg-center bg-fixed flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-orange-400/60 z-0" />

      <div className="absolute bottom-0 left-0 w-full h-[45vh] bg-[#e5e7eb] z-0" />



      {/* Contenido */}
      <div className="relative z-10 max-w-6xl w-full px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-white text-lg leading-relaxed">{subtitle}</p>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white h-[45vh] text-gray-800 rounded-2xl p-8 shadow-xl flex flex-col items-center justify-center text-center"
            >
              <div className="w-30 h-30 flex items-center text-white justify-center bg-gray-200 rounded-full text-6xl font-bold mb-8">
                {item.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 px-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
