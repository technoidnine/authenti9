// import { useState } from "react";
import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import { useRef } from "react";


const ProductsDropdown = ({ closeDropdown }) => {
    const dropdownRef = useRef(null);

    return (
    <div className="select-none	absolute top-11 rounded-lg my-1 z-10 w-60 bg-gray-700 divide-gray-100 shadow" ref={dropdownRef}>
        <ul className="text-md text-white">
            <li className="first:rounded-t-lg overflow-hidden">
                <Link to="/" className="block hover:bg-gray-500 p-5" onClick={() => closeDropdown()}>Smart I-9</Link>
            </li>
            <li>
                <Link to="/hr-onboarding" className="block hover:bg-gray-500 p-5" onClick={() => closeDropdown()}>HR Onboarding</Link>
            </li>
            <li className="last:rounded-b-lg overflow-hidden">
                <Link to="/" className="block hover:bg-gray-500 p-5" onClick={() => closeDropdown()}>ATS</Link>
            </li>
        </ul>
    </div>
  )
}

ProductsDropdown.propTypes = {
    closeDropdown: PropTypes.func.isRequired,
};

export default ProductsDropdown