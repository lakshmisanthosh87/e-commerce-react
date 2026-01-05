import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Shop<span className="text-blue-500">Ease</span>
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">Shop</a>
          <a href="#" className="hover:text-blue-400 transition">Categories</a>
          <a href="#" className="hover:text-blue-400 transition">Contact</a>
        </nav>

        {/* Action Button */}
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold transition">
          Cart
        </button>

      </div>
    </header>
  );
};

export default Header;
