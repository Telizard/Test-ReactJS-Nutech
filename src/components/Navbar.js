import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-400 text-white">
      <div className="d-flex justify-content-center">
        <Link to="/" className="text-2xl font-bold ">
          Dashboard Produk
        </Link>
      </div>
      <div>
        {user && (
          <div className="flex items-center">
            <span className="mr-2">Hello, {user}</span>
            <button onClick={onLogout} className="px-3 py-2 text-sm font-medium text-white bg-orange-600 rounded">
              Keluar
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
