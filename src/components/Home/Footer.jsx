export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-8">
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Digital360</h3>
            <p className="text-gray-400">
              Empowering businesses with top-notch marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li>
                <a href="#hero" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">
                  Frequenly Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>
              <a
                href="mailto:sales@digital360service.com"
                className="hover:underline"
              >
                sales@digital360service.com
              </a>
            </p>
            <p>
              <a href="tel:+918886968078" className="hover:underline">
                +91 8886968078
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 text-center text-gray-500">
          <p>
            © 2020–2024 Digital360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
