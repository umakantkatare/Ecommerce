import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 px-6 py-10 mt-10  bottom-0 w-full">
      
      {/* Grid layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">ECOMMERCE</h2>
          <p className="text-sm">
            Your trusted ecommerce shop for premium quality products.  
            Fast delivery • Best prices.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-4">
            <FaFacebook className="cursor-pointer hover:text-white" size={20} />
            <FaInstagram className="cursor-pointer hover:text-white" size={20} />
            <FaTwitter className="cursor-pointer hover:text-white" size={20} />
            <FaLinkedin className="cursor-pointer hover:text-white" size={20} />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-white">Home</li>
            <li className="cursor-pointer hover:text-white">Shop</li>
            <li className="cursor-pointer hover:text-white">About Us</li>
            <li className="cursor-pointer hover:text-white">Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-white">FAQ</li>
            <li className="cursor-pointer hover:text-white">Shipping Policy</li>
            <li className="cursor-pointer hover:text-white">Return Policy</li>
            <li className="cursor-pointer hover:text-white">Support</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@ecommerce.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Indore, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} ECOMMERCE — All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer
