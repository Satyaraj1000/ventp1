'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import menuData from '@/data/menuList.json';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl sm:text-2xl lg:text-4xl font-black text-[#0E9696]">
                VE
              </span>
              <span className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#0E9696] ml-3 tracking-tighter">
                VAIBHAVI ENTERPRISES
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-lg sm:text-xl md:text-xl text-gray-700 font-medium hover:text-[#0E9696] transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-lg sm:text-xl md:text-xl text-gray-700 font-medium hover:text-[#0E9696] transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li className="relative group">
                <button
                  className="flex items-center text-lg sm:text-xl md:text-xl text-gray-700 font-medium hover:text-[#0E9696] transition duration-300"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  Products & Services
                  <ChevronDown size={20} className="ml-1 font-semibold" />
                </button>
                <div className="absolute top-full bg-white shadow-md rounded-md w-48 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-10">
                  {menuData.productName.map((product) => (
                    <Link
                      key={product}
                      href={`/products/${product.toLowerCase().replace(/ /g, '-')}`}
                      className="block px-4 py-3 text-gray-700 font-medium hover:bg-[#0E9696] hover:text-black transition duration-300"
                    >
                      {product}
                    </Link>
                  ))}
                </div>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-lg sm:text-xl md:text-xl text-gray-700 font-medium hover:text-[#0E9696] transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/enquiry"
                  className="text-lg sm:text-xl md:text-xl text-gray-700 font-medium hover:text-[#0E9696] transition duration-300"
                >
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-2">
          <ul>
            <li>
              <Link
                href="/"
                className="block px-4 py-2 text-lg sm:text-xl text-gray-700 font-medium hover:bg-gray-100 hover:text-[#0E9696] transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-4 py-2 text-lg sm:text-xl text-gray-700 font-medium hover:bg-gray-100 hover:text-[#0E9696] transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="w-full text-left px-4 py-2 text-lg sm:text-xl text-gray-700 font-medium hover:text-[#0E9696] transition duration-300 flex items-center justify-between"
              >
                Products & Services
                <ChevronDown
                  size={20}
                  className={`ml-1 transition-transform duration-300 ${
                    isProductsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isProductsOpen && (
                <div className="bg-gray-50 py-2">
                  {menuData.productName.map((product) => (
                    <Link
                      key={product}
                      href={`/products/${product.toLowerCase().replace(/ /g, '-')}`}
                      className="block px-8 py-2 text-gray-700 font-medium hover:bg-gray-100 hover:text-[#0E9696] transition duration-300"
                    >
                      {product}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-4 py-2 text-lg sm:text-xl text-gray-700 font-medium hover:bg-gray-100 hover:text-[#0E9696] transition duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/enquiry"
                className="block px-4 py-2 text-lg sm:text-xl text-gray-700 font-medium hover:bg-gray-100 hover:text-[#0E9696] transition duration-300"
              >
                Request Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}