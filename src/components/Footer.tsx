import Link from "next/link";

import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="bg-purple-50 relative">
      <MaxWidthWrapper>
        <div className="border-t border-purple-200" />

        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center p-5">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} All rights reserved</p>
          </div>

          <div className="flex items-center justify-center text-nowrap">
            <div className="flex gap-8">
              <Link href="#" className="text-sm text-purple-600 hover:text-purple-800">
                Terms
              </Link>
              <Link href="#" className="text-sm text-purple-600 hover:text-purple-800">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-purple-600 hover:text-purple-800">
                Cookie Policy
              </Link>
              <Link href="#" className="text-sm text-purple-600 hover:text-purple-800">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end mt-2 md:mt-0">
            <div className="flex space-x-4">
              <Link href="#" className="text-sm text-purple-600 hover:text-purple-800">
                Facebook
              </Link>
              <Link href="#" className="text-sm text-purple-600 hover:text-purple-800">
                Twitter
              </Link>
              <Link href="#" className="text-sm text-purple-600 hover:text-purple-800">
                LinkedIn
              </Link>
              <Link href="#" className="text-sm text-purple-600 hover:text-purple-800">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
