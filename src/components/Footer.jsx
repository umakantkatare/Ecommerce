import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 px-4 py-10 mt-10 w-full ">
      {/* Grid layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">ECOMMERCE</h2>
          <p className="text-sm leading-relaxed">
            Your trusted ecommerce shop for premium quality products. Fast
            delivery • Best prices.
          </p>

          {/* Social icons */}
          <div className="flex justify-center sm:justify-start gap-4 mt-4">
            <FaFacebook className="cursor-pointer hover:text-white" size={20} />
            <FaInstagram
              className="cursor-pointer hover:text-white"
              size={20}
            />
            <FaTwitter className="cursor-pointer hover:text-white" size={20} />
            <FaLinkedin className="cursor-pointer hover:text-white" size={20} />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Customer Service
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Shipping Policy</li>
            <li className="hover:text-white cursor-pointer">Return Policy</li>
            <li className="hover:text-white cursor-pointer">Support</li>
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

export default Footer;
