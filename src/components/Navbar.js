import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-500 text-white">
      <div className="d-flex justify-content-center">
        <Link to="/" className="text-xl font-bold ">
          Dashboard Produk
        </Link>
      </div>
      <div>
        {user && (
          <div className="flex items-center">
            <span className="mr-2">Admin, {user}</span>
            <button onClick={onLogout} className="px-3 py-2 text-sm font-medium text-white bg-blue-400 rounded">
              Keluar
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
