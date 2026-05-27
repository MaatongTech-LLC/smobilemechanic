"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

interface DatePickerProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  minDate?: string;
}

const DAYS = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function DatePicker({
  label,
  placeholder = "Select a date",
  value,
  onChange,
  required,
  minDate,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const min = minDate ? new Date(minDate + "T00:00:00") : null;

  function getDaysInMonth(month: number, year: number) {
    return new Date(year, month + 1, 0).getDate();
  }

  function getFirstDayOfMonth(month: number, year: number) {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  }

  function isDisabled(day: number) {
    if (!min) return false;
    const date = new Date(viewYear, viewMonth, day);
    return date < new Date(min.getFullYear(), min.getMonth(), min.getDate());
  }

  function isSelected(day: number) {
    if (!value) return false;
    const selected = new Date(value + "T00:00:00");
    return (
      selected.getDate() === day &&
      selected.getMonth() === viewMonth &&
      selected.getFullYear() === viewYear
    );
  }

  function isToday(day: number) {
    return (
      today.getDate() === day &&
      today.getMonth() === viewMonth &&
      today.getFullYear() === viewYear
    );
  }

  function selectDay(day: number) {
    const month = String(viewMonth + 1).padStart(2, "0");
    const d = String(day).padStart(2, "0");
    onChange(`${viewYear}-${month}-${d}`);
    setOpen(false);
  }

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  }

  const daysInMonth = getDaysInMonth(viewMonth, viewYear);
  const firstDay = getFirstDayOfMonth(viewMonth, viewYear);

  function formatDisplayValue() {
    if (!value) return null;
    const date = new Date(value + "T00:00:00");
    return `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }

  return (
    <div ref={ref} className="relative">
      {label && (
        <label className="block text-[14px] font-medium text-black mb-1.5">
          {label}
          {required && " *"}
        </label>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-3 border text-left outline-none transition-colors ${
          open ? "border-primary" : "border-gray-200"
        } bg-white`}
      >
        <span className={formatDisplayValue() ? "text-black" : "text-[#a3a3a3]"}>
          {formatDisplayValue() || placeholder}
        </span>
        <Calendar size={18} className="text-[#5e5e5e]" />
      </button>

      {open && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-gray-200 shadow-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={prevMonth}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft size={18} className="text-[#5e5e5e]" />
            </button>
            <span className="text-[15px] font-semibold text-black">
              {MONTHS[viewMonth]} {viewYear}
            </span>
            <button
              type="button"
              onClick={nextMonth}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronRight size={18} className="text-[#5e5e5e]" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-0.5 mb-1">
            {DAYS.map((day) => (
              <div
                key={day}
                className="text-center text-[12px] font-medium text-[#a3a3a3] py-1"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-0.5">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const disabled = isDisabled(day);
              const selected = isSelected(day);
              const todayMark = isToday(day);

              return (
                <button
                  key={day}
                  type="button"
                  disabled={disabled}
                  onClick={() => selectDay(day)}
                  className={`w-full aspect-square flex items-center justify-center text-[13px] transition-colors ${
                    disabled
                      ? "text-gray-300 cursor-not-allowed"
                      : selected
                        ? "bg-primary text-white font-semibold"
                        : todayMark
                          ? "border border-primary text-primary font-medium hover:bg-primary/10"
                          : "text-black hover:bg-gray-100"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
