import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">

        {/* Brand & About */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Shop<span className="text-blue-500">Ease</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Your one-stop online store for quality products, fast delivery,
            and secure payments.
          </p>
        </div>

        {/* Customer Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">My Account</li>
            <li className="hover:text-blue-400 cursor-pointer">Orders</li>
            <li className="hover:text-blue-400 cursor-pointer">Wishlist</li>
            <li className="hover:text-blue-400 cursor-pointer">Help Center</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@shopease.com</li>
            <li>Phone: +91 90000 11111</li>
            <li>24/7 Customer Support</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
