import content from '../../data/content.json';
import Image1 from "../../images/sechome/Image1.png"

const About = () => {
  const { sectionTitle, mainTitle, description, blocks } = content.about;

  return (
    <section className="bg-white px-4 md:px-10 lg:px-20">
      <div className="
        max-w-[90%] md:max-w-[80%] lg:max-w-[80%] mx-auto
        flex flex-col lg:flex-row-reverse
        gap-10 items-center
        py-12 md:py-20 lg:py-0 lg:min-h-[90vh] lg:justify-center
      ">
        {/* Imagen */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          {blocks[1]?.image && (
            <img
              src={Image1}
              alt="About Block 2"
              className="w-full h-auto rounded-xl object-cover shadow-md"
            />
          )}
        </div>

        {/* Texto */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 order-1 lg:order-2">
          <div>
            <p className="text-xs font-semibold uppercase text-gray-500 tracking-wide">
              {sectionTitle}
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mt-2">
              {mainTitle}
            </h2>
          </div>

          {description && (
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {description}
            </p>
          )}

          {(blocks[1]?.title || blocks[1]?.text) && (
            <div>
              {blocks[1].title && (
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                  {blocks[1].title}
                </h3>
              )}
              {blocks[1].text && (
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {blocks[1].text}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>

  );
};

export default About;
