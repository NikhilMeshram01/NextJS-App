'use client';
import React, { useState } from 'react';
import Button from '../ui/Button';
import SearchView from '../ui/SearchView';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('Home');

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Explore AI', href: '#explore-ai' },
    { name: 'Services', href: '#services' },
    { name: 'E-commerce', href: '#ecommerce' },
    { name: 'Products', href: '#products' },
    { name: 'Blogs', href: '#blogs' }
  ];

  const handleMenuItemClick = (itemName: string) => {
    setActiveMenuItem(itemName);
    setIsMenuOpen(false);
  };

  return (
    <header className='w-full bg-header sticky top-0 z-50'>
      <div className={`bg-black/40 shadow-[0px_2px_2px_#00000005] ${className}`}>
        <div className="w-full max-w-[1440px]  mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between items-center py-2 sm:py-2.5 md:py-3">
            {/* Logo and Search Section */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 w-full lg:w-[68%]">
              {/* Logo and Search Row */}
              <div className="flex justify-between items-center w-full lg:w-[44%]">
                {/* Logo */}
                <div className="w-[80px] sm:w-[100px] md:w-[128px]">
                  <img
                    src="/images/img_logo_final_1.svg"
                    alt="Chomesy Logo"
                    className="w-full h-auto"
                  />
                </div>

                {/* Search - Hidden on mobile, visible on larger screens */}
                <div className="hidden md:block w-[58%]">
                  <SearchView
                    placeholder="Search"
                    leftIcon="/images/img_search.svg"
                    className="bg-transparent"
                    size="sm"
                  />
                </div>
              </div>

              {/* Desktop Navigation Menu */}
              <nav className="hidden lg:flex items-center border-b border-white/10 px-4">
                <div className="flex items-center gap-6 xl:gap-8">
                  {menuItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleMenuItemClick(item.name)}
                      role="menuitem"
                      className={`
                      py-3 text-xs xl:text-xs font-small text-white
                      transition-all duration-200 hover:text-blue-300
                      ${activeMenuItem === item.name
                          ? 'border-b-2 border-solid'
                          : ''
                        }
                    `}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </nav>
            </div>

            {/* Right Section - About Us and Contact */}
            <div className="hidden lg:flex justify-between items-center w-[16%]">
              <button className="text-xs xl:text-sm font-medium text-white hover:text-blue-300 transition-colors">
                About Us
              </button>
              <Button
                variant="primary"
                size="sm"
                className="capitalize rounded-full px-4 sm:px-5 py-2 sm:py-2.5"
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-3">
            <SearchView
              placeholder="Search"
              leftIcon="/images/img_search.svg"
              className="bg-transparent"
              size="sm"
            />
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-white-overlay">
              <nav className="py-4 space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleMenuItemClick(item.name)}
                    role="menuitem"
                    className={`
                    block w-full text-left px-4 py-3 text-sm font-medium text-white
                    transition-all duration-200 hover:bg-white-overlay rounded
                    ${activeMenuItem === item.name ? 'bg-white-overlay' : ''}
                  `}
                  >
                    {item.name}
                  </button>
                ))}
                <div className="px-4 pt-4 space-y-3">
                  <button className="block w-full text-left text-sm font-medium text-white hover:text-blue-300 transition-colors">
                    About Us
                  </button>
                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    className="capitalize rounded-[20px]"
                  >
                    Contact Us
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>

  );
};

export default Header;