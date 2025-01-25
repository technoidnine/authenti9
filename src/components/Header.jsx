import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X} from 'lucide-react';
import ProductsDropdown from "./ProductsDropdown";
import PricingDropdown from "./PricingDropdown";


const Header = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [productsDropdown, setProductsDropdown] = useState(false);
    const [pricingDropdown, setPricingDropdown] = useState(false);
    const productsRef = useRef(null);
    const pricingRef = useRef(null);

    const toggleDrawer = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
    }

    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (
          productsDropdown &&
          productsRef.current &&
          !productsRef.current.contains(event.target)
        ) {
          setProductsDropdown(false);
        }
  
        if (
          pricingDropdown &&
          pricingRef.current &&
          !pricingRef.current.contains(event.target)
        ) {
          setPricingDropdown(false);
        }
      };
  
      document.addEventListener('mousedown', handleOutsideClick);
  
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [productsDropdown, pricingDropdown]);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container text-sky-900 px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              {/* <img className="h-10 w-10 mr-2" src={logo} alt="logo"/> */}
              <span className="text-xl font-semibold tracking-tight">Authenti9</span>
            </Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 cursor-pointer">
            <li className="relative" ref={productsRef}>
                <button 
                  onClick={() => setProductsDropdown(!productsDropdown)} 
                  className="px-5 py-3 rounded-xl hover:bg-gray-400"
                >
                  Products
                </button>
                {productsDropdown && <ProductsDropdown closeDropdown={setProductsDropdown} />}
            </li>
            <li ref={pricingRef}>
              <button 
                  onClick={() => setPricingDropdown(!pricingDropdown)} 
                  className="px-5 py-3 rounded-xl hover:bg-gray-400"
                >
                  Pricing
                </button>
                {pricingDropdown && <PricingDropdown closeDropdown={setPricingDropdown} />}
            </li>
            <li className="px-5 py-3 rounded-xl hover:bg-gray-400">
              <a href="#">About Us</a>
            </li>
            <li className="px-5 py-3 rounded-xl hover:bg-gray-400">
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <button className="py-2 px-3 border border-sky-900 rounded-md hover:-translate-y-1 hover:scale-110 duration-300">
              Sign In
            </button>
            <button
              className="bg-gradient-to-r from-sky-900 to-black py-2 px-3 rounded-md text-white hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease-in-out hover:from-black hover:to-sky-900"
            >
              Create an account
            </button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleDrawer}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="lg:hidden fixed right-0 z-20 bg-gray-400 backdrop-blur-lg shadow-xl w-full p-5 flex flex-col justify-center items-center">
            <ul className="text-white">
              <li className="py-4" ref={productsRef}>
                  <button>
                    Products
                  </button>
                  {/* {productsDropdown && <ProductsDropdown closeDropdown={setProductsDropdown} />} */}
              </li>
              <li className="py-4" ref={pricingRef}>
                <button>
                    Pricing
                  </button>
                  {/* {pricingDropdown && <PricingDropdown closeDropdown={setPricingDropdown} />} */}
              </li>
              <li className="py-4">
                <a href="#">About Us</a>
              </li>
              <li className="py-4">
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <button className="py-2 px-3 text-white border border-white rounded-md hover:-translate-y-1 hover:scale-110 duration-300">
                Sign In
              </button>
              <button
                className="bg-gradient-to-r from-sky-900 to-black py-2 px-3 rounded-md text-white hover:-translate-y-1 hover:scale-110 transition-all duration-300 ease-in-out hover:from-black hover:to-sky-900"
              >
                Create an account
              </button>
          </div>
        </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
