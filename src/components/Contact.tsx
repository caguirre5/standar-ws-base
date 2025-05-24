const Contact = () => {
    return (
      <section className="h-screen bg-[#2d384b] flex items-center justify-center px-6 md:px-20 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl w-full">
          {/* Lado izquierdo - Contact info */}
          <div className="flex flex-col justify-center gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact info</h2>
              <div className="grid grid-cols-2 gap-y-6 gap-x-12 text-sm">
                <div>
                  <h4 className="font-semibold mb-1">Call us</h4>
                  <p>91-123-456-7890</p>
                  <p>91-123-456-7890</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Our location</h4>
                  <p>91-123-456-7890</p>
                  <p>91-123-456-7890</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Our email</h4>
                  <p>91-123-456-7890</p>
                  <p>91-123-456-7890</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Working hours</h4>
                  <p>91-123-456-7890</p>
                  <p>91-123-456-7890</p>
                </div>
              </div>
            </div>
  
            {/* Social icons */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow us</h4>
              <div className="flex space-x-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-white"
                  />
                ))}
              </div>
            </div>
          </div>
  
          {/* Lado derecho - Formulario */}
          <div className="flex justify-center items-center">
            <div className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-xl text-gray-800">
              <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="flex-1 mb-4 md:mb-0 px-4 py-2 border rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 px-4 py-2 border rounded"
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
        </div>
      </section>
    );
  };
  
  export default Contact;
  