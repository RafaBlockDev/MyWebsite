"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from 'lucide-react'
import type React from "react" // Added import for React

interface AddressData {
  address: string
  addressLine2: string
  city: string
  state: string
}

interface AddressFormSlideProps {
  question: string
  subtitle?: string
  onAnswer: (questionId: number, answer: string) => void
  onNext: () => void
  onPrevious: () => void // Added onPrevious prop
  currentStep: number
  totalSteps: number
  questionId: number
}

export default function AddressFormSlide({
  question,
  subtitle,
  onAnswer,
  onNext,
  onPrevious, // Added onPrevious prop
  currentStep,
  totalSteps,
  questionId,
}: AddressFormSlideProps) {
  const [address, setAddress] = useState<AddressData>({
    address: "",
    addressLine2: "",
    city: "",
    state: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const addressString = JSON.stringify(address)
    onAnswer(questionId, addressString)
    onNext()
  }

  const isComplete = address.address && address.city && address.state

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="question-number text-white">
        {currentStep} → {totalSteps}
      </div>
      <h2 className="text-3xl font-normal mb-4 text-white">{question}</h2>
      {subtitle && <p className="text-lg mb-8 text-white">{subtitle}</p>}
      <form onSubmit={handleSubmit} className="space-y-8 mt-10">
        <div className="space-y-6">
          <div>
            <label className="text-white text-xl mb-2 block">Calle y número</label>
            <input
              type="text"
              name="address"
              placeholder="65 Avenue"
              value={address.address}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-gray-300 focus:border-white text-white text-xl p-2 outline-none placeholder-gray-300"
            />
          </div>

          <div>
            <label className="text-white text-xl mb-2 block">Ciudad</label>
            <input
              type="text"
              name="city"
              placeholder="Palo Alto"
              value={address.city}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-gray-300 focus:border-white text-white text-xl p-2 outline-none placeholder-gray-300"
            />
          </div>

          <div>
            <label className="text-white text-xl mb-2 block">Estado</label>
            <input
              type="text"
              name="state"
              placeholder="California"
              value={address.state}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-gray-300 focus:border-white text-white text-xl p-2 outline-none placeholder-gray-300"
            />
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <Button
            onClick={onPrevious}
            variant="ghost"
            className="text-gray-300 hover:text-white hover:bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button 
            type="submit"
            disabled={!isComplete}
            className="bg-white text-black hover:bg-black hover:text-white"
          >
            Siguiente <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  )
}
