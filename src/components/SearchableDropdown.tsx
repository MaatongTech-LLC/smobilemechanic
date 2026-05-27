"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface SearchableDropdownProps {
  label?: string;
  placeholder?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export default function SearchableDropdown({
  label,
  placeholder = "Search or type...",
  options,
  value,
  onChange,
  required,
}: SearchableDropdownProps) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = options.filter((o) =>
    o.toLowerCase().includes(inputValue.toLowerCase())
  );

  function handleInputChange(val: string) {
    setInputValue(val);
    onChange(val);
    if (!open) setOpen(true);
  }

  function selectOption(option: string) {
    setInputValue(option);
    onChange(option);
    setOpen(false);
  }

  function handleFocus() {
    setOpen(true);
  }

  return (
    <div ref={ref} className="relative">
      {label && (
        <label className="block text-[14px] font-medium text-black mb-1.5">
          {label}
          {required && " *"}
        </label>
      )}
      <div
        className={`flex items-center border transition-colors bg-white ${
          open ? "border-primary" : "border-gray-200"
        }`}
      >
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={handleFocus}
          placeholder={placeholder}
          className="flex-1 px-4 py-3 outline-none text-[15px] bg-transparent"
        />
        <button
          type="button"
          onClick={() => {
            setOpen(!open);
            if (!open) inputRef.current?.focus();
          }}
          className="px-3 py-3"
        >
          <ChevronDown
            size={18}
            className={`text-[#5e5e5e] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-gray-200 shadow-lg max-h-[240px] overflow-y-auto">
          {filtered.length > 0 ? (
            filtered.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => selectOption(option)}
                className={`w-full text-left px-4 py-2.5 text-[15px] transition-colors hover:bg-gray-50 ${
                  option === value
                    ? "text-primary font-medium bg-primary/5"
                    : "text-black"
                }`}
              >
                {option}
              </button>
            ))
          ) : inputValue ? (
            <div className="px-4 py-3">
              <span className="text-[14px] text-[#5e5e5e]">
                No match — using{" "}
              </span>
              <span className="text-[14px] font-medium text-primary">
                &quot;{inputValue}&quot;
              </span>
            </div>
          ) : (
            <div className="px-4 py-3 text-[14px] text-[#a3a3a3]">
              Start typing to search...
            </div>
          )}
        </div>
      )}
    </div>
  );
}
