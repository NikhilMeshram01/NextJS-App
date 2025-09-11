'use client';
import React, { useState } from 'react';

interface SearchViewProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SearchView: React.FC<SearchViewProps> = ({
  placeholder = "Search",
  value = "",
  onChange,
  onSearch,
  leftIcon = "/images/img_search.svg",
  rightIcon,
  disabled = false,
  className = "",
  size = "md"
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(inputValue);
    }
  };

  const handleSearchClick = () => {
    onSearch?.(inputValue);
  };

  const sizes = {
    sm: 'px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm',
    md: 'px-3 py-2 text-sm sm:px-4 sm:py-2.5 sm:text-base',
    lg: 'px-4 py-3 text-base sm:px-5 sm:py-3.5 sm:text-lg'
  };

  const iconSizes = {
    sm: 'w-3 h-3 sm:w-4 sm:h-4',
    md: 'w-4 h-4 sm:w-5 sm:h-5',
    lg: 'w-5 h-5 sm:w-6 sm:h-6'
  };

  return (
    <div className={`relative flex items-center w-full ${className}`}>
      {leftIcon && (
        <div className="absolute left-2 sm:left-3 flex items-center pointer-events-none">
          <img
            src={leftIcon}
            alt="Search"
            className={`${iconSizes[size]} opacity-60`}
          />
        </div>
      )}

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full
          ${leftIcon ? 'pl-8 sm:pl-10' : 'pl-3 sm:pl-4'}
          ${rightIcon ? 'pr-8 sm:pr-10' : 'pr-3 sm:pr-4'}
          ${sizes[size]}
          bg-transparent
          border-0
          text-white-transparent
          placeholder-white-transparent
          focus:outline-none
          focus:ring-0
          transition-all
          duration-200
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `.trim().replace(/\s+/g, ' ')}
      />

      {rightIcon && (
        <button
          onClick={handleSearchClick}
          disabled={disabled}
          className="absolute right-2 sm:right-3 flex items-center hover:opacity-80 transition-opacity"
        >
          <img
            src={rightIcon}
            alt="Search"
            className={`${iconSizes[size]} opacity-60`}
          />
        </button>
      )}
    </div>
  );
};

export default SearchView;