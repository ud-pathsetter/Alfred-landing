"use client";
import { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";

interface HeaderProps {
  onOpenModal: () => void;
}

export function Header({ onOpenModal }: HeaderProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className='py-5'>
        <div className='container relative'>
          <div className='flex items-center justify-between'>
            <Link href="/" className="flex items-center">
              <Image src={logo} alt='Saas Logo' width={200} />
            </Link>
            <MenuIcon
              className='h-5 w-5 md:hidden cursor-pointer'
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            />
            <nav className='hidden md:flex gap-4 text-black/60 items-center'>
              <a href='#about'>About</a>
              <a href='#product'>Product</a>
              {/* <a href='#features'>Features</a> */}
              <a href='#resources'>Insights</a>
              <a href='#testimonials'>Customers</a>
              <a href='#team'>Team</a>
              <a href='#updates'>Updates</a>

              <button onClick={onOpenModal} className='btn btn-primary'>
                Contact Us
              </button>
            </nav>
          </div>
          {isMobileMenuOpen && (
            <nav className='md:hidden absolute top-full left-0 w-full bg-white bg-opacity-75 backdrop-blur-sm shadow-md'>
              <ul className='flex flex-col p-4 space-y-4 text-center'>
                <li>
                  <a href='#about' onClick={() => setMobileMenuOpen(false)}>
                    About
                  </a>
                </li>
                <li>
                  <a href='#product' onClick={() => setMobileMenuOpen(false)}>
                    Product
                  </a>
                </li>
                <li>
                  <a href='#features' onClick={() => setMobileMenuOpen(false)}>
                    Features
                  </a>
                </li>
                <li>
                  <a href='#resources' onClick={() => setMobileMenuOpen(false)}>
                    Insights
                  </a>
                </li>
                <li>
                  <a
                    href='#testimonials'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Customers
                  </a>
                </li>
                <li>
                  <a href='#team' onClick={() => setMobileMenuOpen(false)}>
                    Team
                  </a>
                </li>
                <li>
                  <a href='#updates' onClick={() => setMobileMenuOpen(false)}>
                    Updates
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenModal();
                    }}
                    className='btn btn-primary'
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
