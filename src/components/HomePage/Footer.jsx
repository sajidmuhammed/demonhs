import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#d8dde0] py-10 px-6 md:px-12 lg:px-20 xl:px-40">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6">
          <Link
            href="https://example.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Terms of Use
          </Link>
          <Link
            href="https://example.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="https://example.com/accessibility"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Accessibility
          </Link>
          <Link
            href="https://example.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Contact Us
          </Link>
        </div>
        <div>
          <p className="text-center md:text-right text-sm text-gray-700">
            © Crown copyright
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
