import { useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PricingDropdown = ({ closeDropdown }) => {
    const dropdownRef = useRef(null);

  return (
    <div className="select-none	absolute rounded-lg my-1 top-11 w-60 bg-gray-700 divide-gray-100 shadow" ref={dropdownRef}>
        <ul className="text-md text-white">
            <li className="first:rounded-t-lg overflow-hidden">
                <Link to="/pricing/smart-i9" className="block hover:bg-gray-500 p-5" onClick={() => closeDropdown()}>Smart I-9 Pricing</Link>
            </li>
            <li>
                <Link to="/onboarding-pricing" className="block hover:bg-gray-500 p-5" onClick={() => closeDropdown()}>Onboarding Forms Pricing</Link>
            </li>
            <li className="last:rounded-b-lg overflow-hidden">
                <Link to="/" className="block hover:bg-gray-500 p-5" onClick={() => closeDropdown()}>ATS Pricing</Link>
            </li>
        </ul>
    </div>
  )
}

PricingDropdown.propTypes = {
    closeDropdown: PropTypes.func.isRequired,
};

export default PricingDropdown