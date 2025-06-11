import logo from '../assets/logo-example.png'

const Header = () => {
    return (//
      <header className="absolute top-0 left-0 w-full flex items-center justify-center z-50 py-5
        px-6
        md:px-14 
        lg:px-12"
      >
        <div className='max-w-[95%] md:max-w-[90%] lg:max-w-[90%] flex items-center justify-between w-full'>
          {/* Logo */}
          <div className="">
            <img src={logo} alt="" 
              className='
                h-8 
                md:h-10 
                lg:h-12'
            />
          </div>
    
          {/* Contact Button */}
          <button className="border text-base border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
            Contact
          </button>
        </div>
      </header>
    );
  };
  
  export default Header;
  