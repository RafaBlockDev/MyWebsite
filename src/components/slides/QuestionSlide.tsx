'use client';

import { useState } from 'react'
import type React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from 'lucide-react'
import CustomInput from '../ui/custom/custom-input'

interface QuestionSlideProps {
  question: string
  questionId: number
  onAnswer: (questionId: number, answer: string) => void
  onNext: () => void
  onPrevious: () => void
  currentStep: number
  totalSteps: number
  metaPlaceholder: string
}

export default function QuestionSlide({ 
  question, 
  questionId,
  onAnswer, 
  onNext,
  onPrevious,
  currentStep,
  totalSteps,
  metaPlaceholder
}: QuestionSlideProps) {
  const [inputValue, setInputValue] = useState("")

  const handleNext = () => {
    if (inputValue.trim()) {
      onAnswer(questionId, inputValue)
      setInputValue("")
      onNext()
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="question-number text-white">{currentStep} → {totalSteps}</div>
      <h2 className="text-2xl font-normal mb-8 text-white">{question}</h2>
      <div className="space-y-6">
        <CustomInput
          placeholder={metaPlaceholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="flex justify-between items-center mt-6">
          <Button
            onClick={onPrevious}
            variant="ghost"
            className="text-gray-300 bg-transparent border-none shadow-none hover:bg-transparent hover:text-white mr-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300">
              Presiona Enter ↵
            </span>
            <Button 
              onClick={handleNext}
              disabled={!inputValue.trim()}
              className="bg-white hover:bg-black text-black hover:text-white"
            >
              Siguiente <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}