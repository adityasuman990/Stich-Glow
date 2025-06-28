

"use client";

import { FiSearch, FiShoppingCart, FiMenu, FiX, FiUser, FiLogIn, FiUserPlus } from "react-icons/fi"; // Import more icons
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const { isSignedIn } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full px-4 py-4 flex items-center justify-between border-b relative">
      {/* Left - Navigation Links */}
      <div className="flex space-x-4 text-lg font-semibold md:space-x-6">
        <Link href="/" className="hover:text-gray-400 transition">Home</Link>
        <Link href="/collection" className="hover:text-gray-400 transition">Collection</Link>
      </div>

      {/* Center - Logo (Icon for now) */}
      <Link href="/" className="flex items-center text-2xl font-bold"> {/* Simple text logo */}
        LOGO {/* Or use an icon: <FiShoppingCart />  */}
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-xl">
        {/* {isMobileMenuOpen ? (
          <FiX className="cursor-pointer hover:text-gray-400 transition" onClick={toggleMobileMenu} />
        ) : (
          <FiMenu className="cursor-pointer hover:text-gray-400 transition" onClick={toggleMobileMenu} />
        )} */}
      </div>

      {/* Right - Icons & Authentication */}
      <div className="flex items-center space-x-4 text-xl md:space-x-6">
        <FiSearch className="cursor-pointer hover:text-gray-400 transition" />
        <FiShoppingCart className="cursor-pointer hover:text-gray-400 transition" />

        {!isSignedIn && (
          <>
            <Link href="/sign-in" className="flex items-center">
              <FiLogIn className="hover:text-gray-400 transition" /> {/* Sign In Icon */}
            </Link>
            <Link href="/sign-up" className="flex items-center">
              <FiUserPlus className="hover:text-gray-400 transition" /> {/* Sign Up Icon */}
            </Link>
          </>
        )}

        {isSignedIn && (
          <Link href="/dashboard" className="md:block">
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-200 transition">Dashboard</button>
          </Link>
        )}

        {isSignedIn && <UserButton />}
      </div>

      {/* Mobile Menu */}
      {/* {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t py-4 flex flex-col space-y-4 md:hidden">
          <Link href="/" className="px-6 hover:text-gray-400 transition" onClick={toggleMobileMenu}>Home</Link>
          <Link href="/collection" className="px-6 hover:text-gray-400 transition" onClick={toggleMobileMenu}>Collection</Link>
          {isSignedIn && (
            <Link href="/dashboard" className="px-6 hover:text-gray-400 transition" onClick={toggleMobileMenu}>Dashboard</Link>
          )}
          {!isSignedIn && (
            <>
              <Link href="/sign-in" className="px-6 hover:text-gray-400 transition" onClick={toggleMobileMenu}>Sign In</Link>
              <Link href="/sign-up" className="px-6 hover:text-gray-400 transition" onClick={toggleMobileMenu}>Sign Up</Link>
            </>
          )}
        </div>
      )} */}
    </nav>
  );
}