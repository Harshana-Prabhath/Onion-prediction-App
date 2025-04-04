import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © 2025 Big Onion Yield Prediction Model. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-white hover:text-green-300">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:text-green-300">
            Terms of Service
          </a>
          <a href="#" className="text-white hover:text-green-300">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
