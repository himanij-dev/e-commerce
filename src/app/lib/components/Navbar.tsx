import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-6">
      <div className="flex gap-5">
        <p>Women</p>
        <p>Men</p>
        <p>About</p>
      </div>
      <div className="flex gap-5">
        <p>Search </p>
        <p>Profile </p>
        <p>Cart </p>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
