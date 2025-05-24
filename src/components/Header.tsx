const Header = () => {
    return (
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 py-4 z-50">
        {/* Logo */}
        <div className="text-white font-logo text-2xl">Logo</div>
  
        {/* Contact Button */}
        <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
          Contact
        </button>
      </header>
    );
  };
  
  export default Header;
  