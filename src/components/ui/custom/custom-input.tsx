"use client"

import { useState } from "react"

export default function CustomInput({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  const [isFocused, setIsFocused] = useState(false)

  console.log("The value is:", value)

  return (
    <div>
      <div className="w-full">
        <input
          type="text"
          className="w-full bg-transparent text-white text-4xl placeholder-gray-300 placeholder-opacity-50 outline-none"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div
          className={`h-[1px] mt-2 transition-colors duration-100 ${
            isFocused || value ? "bg-white" : "bg-gray-300 opacity-50"
          }`}
        ></div>
      </div>
    </div>
  )
}

