import content from '../../data/content.json';
import bgImage from '../../images/services.jpg';

interface ServiceItem {
  number: string | number;
  title: string;
  description: string;
}


const Services = () => {
  const { title, subtitle, items } = content.services;

  const Card = ({ item }: { item: ServiceItem }) => (
    <div
      className="bg-white text-gray-800 rounded-2xl p-6 md:p-8 shadow-xl flex items-center justify-center text-center 
        flex-col md:flex-row lg:flex-col md:py-14 lg:py-[20%]"
    >
      <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-full text-4xl font-bold mb-6 md:mb-0 lg:mb-8 md:mr-6 lg:mr-0 shrink-0">
        {item.number}
      </div>
      <div>
        <h3 className="text-lg md:text-start md:ml-2 lg:ml-0 lg:text-center font-semibold px-2 mb-3">{item.title}</h3>
        <p className="text-sm md:text-start md:ml-2 lg:ml-0 lg:text-center text-gray-600 px-2">{item.description}</p>
      </div>
    </div>
  );

  return (
    <section className="w-full text-white">

      {/* 📱 Mobile y tablet: solo fondo en el encabezado */}
      <div
        className="lg:hidden relative w-full bg-cover bg-center bg-fixed px-4 py-20 text-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-orange-400/60 z-0" />
        <div className="relative z-10 max-w-[85%] md:max-w-[80%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <p className="mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* 💻 Desktop: fondo completo con overlay y bloque inferior */}
      <div
        className="hidden lg:flex relative w-full min-h-screen bg-cover bg-center bg-fixed flex-col justify-start items-center px-6 pt-32 pb-16"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-orange-400/60 z-0" />
        <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-[#e5e7eb] z-0" />

        {/* Encabezado desktop */}
        <div className="relative z-10 max-w-[90%] text-center mb-12">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Tarjetas desktop */}
        <div className="relative z-10 max-w-[80%] w-full grid grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>

      {/* 🧱 Tarjetas: móvil/tablet con fondo gris */}
      <div className="block lg:hidden bg-[#e5e7eb] px-4 md:px-6 py-12">
        <div className="max-w-[85%] md:max-w-[80%] mx-auto grid grid-cols-1 gap-8">
          {items.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Services;
