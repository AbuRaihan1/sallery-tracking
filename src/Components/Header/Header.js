import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white w-full py-3 shadow-lg">
      <nav className="flex justify-between items-center mx-5">
        <Link to="/" className="text-3xl">
          Income Tracker
        </Link>
        <div className="">
          <Link
            to="/"
            className="font-bold hover:bg-slate-200 px-3 py-1 rounded-md"
          >
            Income
          </Link>
          <Link
            to="/expense"
            className="font-bold hover:bg-slate-200 px-3 py-1 rounded-md"
          >
            Expense
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
