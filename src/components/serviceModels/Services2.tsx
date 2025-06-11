import content from '../../data/content.json';
import bgImage from '../../images/services.jpg';

const Services = () => {
  const { title, subtitle, items } = content.services;

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-fixed flex flex-col justify-center items-center text-white px-4 sm:px-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay principal */}
      <div className="absolute inset-0 bg-orange-400/60 z-0" />

      {/* Fondo inferior claro */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] md:h-[45vh] bg-[#e5e7eb] z-0" />

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-[85%] md:max-w-[80%] lg:max-w-[90%]">
        {/* Título y subtítulo */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-white leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl flex items-center justify-center text-center 
                flex-col
                md:flex-row
                lg:flex-col md: py-14 lg:py-[20%]
              "
            >
              {/* Círculo con número */}
              <div className="
                w-24 h-24 
                flex items-center justify-center 
                bg-gray-200 rounded-full 
                text-4xl font-bold 
                mb-6 md:mb-0 lg:mb-8
                md:mr-6 
                lg:mr-0
                shrink-0
              ">

                {item.number}
              </div>

              {/* Título y descripción */}
              <div className=''>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 px-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
