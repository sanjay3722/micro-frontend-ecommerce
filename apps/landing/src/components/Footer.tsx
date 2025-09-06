import { MFE_URLS } from "../constants/mfe.constants";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Pages</h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="/about" className="hover:text-[#1976D2]">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#1976D2]">
                  Contact
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-[#1976D2]">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/affiliate-disclosure" className="hover:text-[#1976D2]">
                  Affiliate Disclosure
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Micro Frontends</h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href={MFE_URLS.PLANS} className="hover:text-[#1976D2]">
                  Plans
                </a>
              </li>
              <li>
                <a href={MFE_URLS.CHECKOUT} className="hover:text-[#1976D2]">
                  Checkout
                </a>
              </li>
              <li>
                <a href={MFE_URLS.AUTH} className="hover:text-[#1976D2]">
                  Auth
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">External</h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href={MFE_URLS.LANDING} className="hover:text-[#1976D2]">
                  Landing Host
                </a>
              </li>
              <li>
                <a href={MFE_URLS.PLANS} className="hover:text-[#1976D2]">
                  Plans Host
                </a>
              </li>
              <li>
                <a href={MFE_URLS.CHECKOUT} className="hover:text-[#1976D2]">
                  Checkout Host
                </a>
              </li>
              <li>
                <a href={MFE_URLS.AUTH} className="hover:text-[#1976D2]">
                  Auth Host
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} StoreFront
        </div>
      </div>
    </footer>
  );
};

export default Footer;
