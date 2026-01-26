import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaG } from "react-icons/fa6";
import { SiIndeed } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const handleLinkedInClick = () => {
    navigate("https://www.linkedin.com/in/umakant-katare/", { replace: true });
  };
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
            <a
              href="https://www.linkedin.com/in/umakant-katare/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
            </a>{" "}
            <a
              href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <SiIndeed size={20} />
            </a>{" "}
            <a
              href="https://github.com/umakantkatare?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaInstagram size={20} />
            </a>{" "}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <Link to="/">
              <li className="hover:text-white cursor-pointer">Home</li>
            </Link>
            <Link to="/products">
              <li className="hover:text-white cursor-pointer">Product</li>
            </Link>
            <Link to="/">
              <li className="hover:text-white cursor-pointer">About Us</li>
            </Link>
            <Link to="/">
              <li className="hover:text-white cursor-pointer">Contact</li>
            </Link>
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
            <li>Location: Gurugram, India</li>
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
