import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between  bg-amber-300 ">
      <div className="flex gap-5">
        <p>Women</p>
        <p>Men</p>
        <p>About</p>
      </div>
      <div className="flex gap-5">
        <p>Search </p>
        <p>Profile </p>
        <p>Cart </p>
      </div>
    </div>
  );
};

export default Navbar;
