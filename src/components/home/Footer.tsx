import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white w-full overflow-hidden px-16 py-20 max-md:max-w-full max-md:px-5">
      <div className="flex min-h-[248px] w-full gap-[40px_128px] flex-wrap max-md:max-w-full">
        <div className="flex min-w-60 gap-10 flex-wrap flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="flex flex-col overflow-hidden flex-1 shrink basis-[0%]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/711ae44ced8b4566bcc6beb6db0d1200/b0b39a00d08e49e75310609fd0ae5e9c2d2c003f1fddae074aab42189d8e2109?placeholderIfAbsent=true"
              className="aspect-[2.33] object-contain w-[84px]"
              alt="Footer logo"
            />
          </div>
          <div className="overflow-hidden flex-1 shrink basis-[0%]">
            <h3 className="text-black text-base font-semibold">Quick Links</h3>
            <nav className="w-full text-sm text-black font-normal mt-4">
              <Link
                to="/lost-items"
                className="block py-2 hover:text-gray-600 transition-colors"
              >
                Lost Items
              </Link>
              <Link
                to="/found-items"
                className="block py-2 hover:text-gray-600 transition-colors"
              >
                Found Items
              </Link>
              <Link
                to="/contact"
                className="block py-2 hover:text-gray-600 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/help"
                className="block py-2 hover:text-gray-600 transition-colors"
              >
                Help Center
              </Link>
              <Link
                to="/faq"
                className="block py-2 hover:text-gray-600 transition-colors"
              >
                FAQs
              </Link>
            </nav>
          </div>
          <div className="overflow-hidden flex-1 shrink basis-[0%]">
            <h3 className="text-black text-base font-semibold">About Us</h3>
            <nav className="w-full text-sm text-black font-normal mt-4">
              <Link
                to="/mission"
                className="block py-2 hover:text-gray-600 transition-colors"
              >
                Our Mission
              </Link>
              <Link
                to="/team"
                className="block py-2 hover:text-gray-600 transition-colors"
              >
                Our Team
              </Link>
              <Link
                to="/careers"
                className="block py-2 hover:text-gray-600 transition-colors"
              >
                Careers
              </Link>
              <Link
                to="/blog"
                className="block py-2 hover:text-gray-600 transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/news"
                className="block py-2 hover:text-gray-600 transition-colors"
              >
                Newsroom
              </Link>
            </nav>
          </div>
          <div className="overflow-hidden flex-1 shrink basis-[0%]">
            <h3 className="text-black text-base font-semibold">
              Stay Connected
            </h3>
            <nav className="w-full text-sm text-black font-normal mt-4">
              <Link
                to="/social"
                className="block py-2 hover:text-gray-600 transition-colors"
              >
                Follow Us
              </Link>
              <Link
                to="/newsletter"
                className="block py-2 hover:text-gray-600 transition-colors"
              >
                Newsletter
              </Link>
              <Link
                to="/events"
                className="block py-2 hover:text-gray-600 transition-colors"
              >
                Events
              </Link>
              <Link
                to="/community"
                className="block py-2 hover:text-gray-600 transition-colors"
              >
                Community
              </Link>
              <Link
                to="/support"
                className="block py-2 hover:text-gray-600 transition-colors"
              >
                Support
              </Link>
            </nav>
          </div>
        </div>
        <div className="min-w-60 w-[400px]">
          <div className="w-full text-base text-black">
            <h3 className="font-semibold">Subscribe</h3>
            <p className="font-normal leading-6 mt-4">
              Join our newsletter for updates on features and releases.
            </p>
          </div>
          <div className="w-full font-normal mt-6">
            <form className="flex w-full gap-4 text-base">
              <input
                type="email"
                placeholder="Enter your email"
                className="self-stretch flex-1 shrink basis-6 border min-w-60 gap-2 text-[rgba(102,102,102,1)] p-3 border-black border-solid focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="self-stretch border gap-2 text-black whitespace-nowrap w-[119px] px-6 py-3 border-black border-solid hover:bg-gray-100 transition-colors max-md:px-5"
              >
                Subscribe
              </button>
            </form>
            <p className="text-black text-xs mt-3">
              By subscribing, you agree to our Privacy Policy and consent to
              updates.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-20 max-md:max-w-full max-md:mt-10">
        <div className="bg-black border flex min-h-px w-full border-black border-solid max-md:max-w-full" />
        <div className="flex w-full gap-[40px_100px] justify-between flex-wrap mt-8 max-md:max-w-full">
          <div className="flex min-w-60 items-center gap-6 text-sm text-black font-normal flex-wrap max-md:max-w-full">
            <span className="text-black self-stretch my-auto">
              © 2024 Relume. All rights reserved.
            </span>
            <Link
              to="/privacy"
              className="underline decoration-solid hover:text-gray-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="underline decoration-solid hover:text-gray-600 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="underline decoration-solid hover:text-gray-600 transition-colors"
            >
              Cookies Settings
            </Link>
          </div>
          <div className="flex gap-3">
            {["Facebook", "Twitter", "Instagram", "LinkedIn", "YouTube"].map(
              (platform) => (
                <img
                  key={platform}
                  loading="lazy"
                  src={`https://cdn.builder.io/api/v1/image/assets/711ae44ced8b4566bcc6beb6db0d1200/${platform.toLowerCase()}.png?placeholderIfAbsent=true`}
                  className="aspect-[1] object-contain w-6 shrink-0"
                  alt={`${platform} icon`}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
