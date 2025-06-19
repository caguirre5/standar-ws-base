import content from '../../data/content.json';
import Image1 from "../../images/secabout/Image1.png";
import Image2 from "../../images/secabout/Image2.png";

const About = () => {
  const { sectionTitle, mainTitle, description, blocks } = content.about;

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-[90%] md:max-w-[80%] lg:max-w-[80%] mx-auto flex flex-col md:flex-row gap-10">
        {/* Columna izquierda */}
        <div className="flex flex-col gap-6 flex-1  lg:p-6 rounded-md">
          {/* Título principal */}
          <div className="lg:p-4 rounded-md">
            <p className="text-sm font-semibold uppercase text-gray-600">{sectionTitle}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">{mainTitle}</h2>
          </div>

          {/* Descripción principal */}
          {description && (
            <div className="lg:p-4 rounded-md">
              <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
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
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{blocks[1].title}</h3>
              )}
              {blocks[1].text && (
                <p className="text-gray-700 text-sm leading-relaxed">{blocks[1].text}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
