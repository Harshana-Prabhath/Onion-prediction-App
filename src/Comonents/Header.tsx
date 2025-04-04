import React from "react";

const Header = () => {
  const [activeItem, setActiveItem] = React.useState("Home");

  const handleClick = (item: any) => {
    setActiveItem(item);
  };

  const navItems = ["Home", "About", "Mdol", "Contact"];

  return (
    <nav className="flex justify-center items-center py-4 bg-white bg-opacity-90 w-full">
      <div className="container mx-auto flex justify-center space-x-16">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className={`relative px-2 py-1 font-medium transition-all duration-300 
              ${activeItem === item ? "text-green-700" : "text-black"} 
              hover:text-green-700 group`}
            onClick={() => handleClick(item)}
          >
            {item}
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-green-700 transition-all duration-300 
              ${activeItem === item ? "w-full" : "group-hover:w-full"}`}
            ></span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Header;
