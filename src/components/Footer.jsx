import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        
        <div>
          <h2 className="text-xl font-bold text-pink-400">MyStore</h2>
          <p className="text-gray-400 mt-2">
            Premium products across categories.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <p className="text-gray-400">Home</p>
          <p className="text-gray-400">Products</p>
          <p className="text-gray-400">Contact</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <FaInstagram className="hover:text-pink-400 cursor-pointer" />
            <FaTwitter className="hover:text-pink-400 cursor-pointer" />
            <FaGithub className="hover:text-pink-400 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 pb-4">
        © 2026 MyStore. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;