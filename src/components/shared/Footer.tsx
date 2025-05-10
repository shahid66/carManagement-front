import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  // const navLinks = [
  //   { href: "/", label: "Home" },
  //   { href: "/shop", label: "Shop" },
  //   { href: "/products", label: "App Products" },
  //   { href: "/about", label: "About Us" },
  //   { href: "/testimonial", label: "Testimonial" },
  //   { href: "/blogs", label: "Blogs" },
  //   { href: "/contact", label: "Contact Us" },
  // ];

  const socialLinks = [
    { href: "#", icon: FaFacebookF },
    { href: "#", icon: FaInstagram },
    { href: "#", icon: FaTwitter },
  ];
  return (
    // <footer className="bg-white border-t border-gray-200 py-24">
    //   <div className="max-w-6xl mx-auto px-4 text-center">
    //     <div className="flex flex-col items-center mb-6">
    //       <div className="flex items-center space-x-2">
    //         <h1 className="text-2xl font-black flex items-center">
    //           <Logo />
    //           Next Mart
    //         </h1>
    //       </div>
    //       <p className="text-gray-600 mt-3 w-1/2 text-xs leading-6">
    //         Save big this Black Friday with unbeatable deals on tech, home
    //         essentials, fashion, and more! Limited stock.
    //       </p>
    //     </div>

    //     <hr />
    //     {/* <ul className="flex justify-center space-x-6 text-sm text-gray-800 font-medium my-4">
    //       {navLinks.map((link) => (
    //         <li key={link.href}>
    //           <Link href={link.href} className="hover:text-purple-600">
    //             {link.label}
    //           </Link>
    //         </li>
    //       ))}
    //     </ul> */}

    //     {/* <div className="flex justify-center space-x-4">
    //       {socialLinks.map(({ href, icon: Icon }, index) => (
    //         <Link
    //           href={href}
    //           key={index}
    //           className="text-gray-600 hover:text-purple-600"
    //         >
    //           <Icon className="w-5 h-5" />
    //         </Link>
    //       ))}
    //     </div> */}
    //   </div>
    // </footer>
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
            <p>
              Email:{" "}
              <a href="mailto:info@example.com" className="text-blue-400">
                info@example.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+11234567890" className="text-blue-400">
                (123) 456-7890
              </a>
            </p>
          </div>

          {/* Copyright Information */}
          <div className="text-center md:text-left">
            <p className="font-light">
              &copy; 2025 Your Company Name. All rights reserved.
            </p>
            <div className="mt-4">
              <div className="flex justify-center space-x-4">
                {socialLinks.map(({ href, icon: Icon }, index) => (
                  <Link
                    href={href}
                    key={index}
                    className="text-white hover:text-white/50"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Links */}
          <div className="text-center md:text-right">
            <p>
              <Link href="/privacy" className="text-blue-400 hover:underline">
                Terms of Use
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
