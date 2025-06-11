import content from '../../data/content.json';

const Projects = () => {
  const { title, description, images } = content.projects;

  return (
    <section className="bg-white h-screen py-[15vh] px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-3 grid-rows-2 gap-6 h-full">
        
        {/* Texto sin sombra, igual altura */}
        <div className="col-span-1 row-span-1 bg-white pr-8 rounded-xl flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 text-base leading-relaxed">{description}</p>
        </div>

        {/* Imágenes con misma altura y estilo uniforme */}
        {images.slice(0, 5).map((src, index) => (
          <div key={index} className="w-full h-full rounded-xl overflow-hidden">
            <img
              src={src}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
