import React from "react";
import CommonInput from "./CommonInput";


const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 mt-20 ">
      <div className="w-full p-20">
        {/* Top section */}
        <div className="flex flex-wrap justify-between gap-10">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Account</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#">Log In</a></li>
              <li><a href="#">Sign Up</a></li>
              <li><a href="#">Redeem a Gift Card</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Company</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#">About</a></li>
              <li><a href="#">Environmental Initiatives</a></li>
              <li><a href="#">Factories</a></li>
              <li><a href="#">DEI</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">International</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Get Help</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Connect</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">Our Stores</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="min-w-[250px]">
            <h3 className="font-semibold text-gray-800 mb-3">Subscribe</h3>
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              {/* ✅ Using your CommonInput component */}
              <CommonInput type="email" placeholder="Email Address" />
              <button className="bg-black text-white px-4 py-2">→</button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-gray-500 text-xs flex flex-wrap justify-between gap-3">
          <div className="flex flex-wrap gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Do Not Sell or Share My Personal Information</a>
            <a href="#">CS Supply Chain Transparency</a>
            <a href="#">Vendor Code of Conduct</a>
            <a href="#">Sitemap Pages</a>
            <a href="#">Sitemap Products</a>
          </div>
          <p>© 2023 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
