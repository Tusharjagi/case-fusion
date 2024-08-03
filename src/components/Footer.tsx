import Link from "next/link";

import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="bg-white relative">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200" />

        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center p-5">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} All rights reserved</p>
          </div>

          <div className="flex items-center justify-center text-nowrap">
            <div className="flex gap-8">
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                Cookie Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end mt-2 md:mt-0">
            <div className="flex space-x-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                Facebook
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                Twitter
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                LinkedIn
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
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
