"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Button } from "../ui/button"

interface Choice {
  key: string
  label: string
}

interface SingleChoiceSlideProps {
  question: string
  subtitle?: string
  choices: Choice[]
  onAnswer: (questionId: number, answer: string) => void
  onNext: () => void
  onPrevious: () => void
  currentStep: number
  totalSteps: number
  questionId: number
}

export default function SingleChoiceSlide({
  question,
  subtitle,
  choices,
  onAnswer,
  onNext,
  onPrevious,
  currentStep,
  totalSteps,
  questionId,
}: SingleChoiceSlideProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleNext = () => {
    if (selectedOption) {
      onAnswer(questionId, selectedOption)
      onNext()
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="question-number text-white">{currentStep} → {totalSteps}</div>
      <h2 className="text-3xl font-normal mb-4 text-white">{question}</h2>    
      {subtitle && (
        <p className="text-lg mb-8 text-purple-200">{subtitle}</p>
      )}
      <div className="space-y-3">
          {choices.map((option) => (
            <button
              key={option.key}
              onClick={() => setSelectedOption(option.key)}
              className={`w-full py-4 px-6 flex items-center rounded-lg border-2 border-white/20 hover:bg-white/20 transition-colors ${
                selectedOption === option.key ? "bg-white/20" : ""
              }`}
            >
                <div className="flex items-center space-x-3">
                <span className={`
                inline-flex items-center justify-center
                w-8 h-8 rounded-lg border-2
                ${selectedOption === option.key
                  ? 'border-gray-300 text-gray-300'
                  : 'border-gray-300 text-gray-300 group-hover:border-white group-hover:text-white'
                }
              `}>
                {selectedOption === option.key ? (
                  <Check className="w-5 h-5" color="white" />
                ) : (
                  option.key
                )}
              </span>
              <span className="text-xl text-white">{option.label}</span>
                </div>
            </button>
          ))}
        </div>

      <div className="flex justify-between items-center mt-6">
        <Button
          onClick={onPrevious}
          variant="ghost"
          className="text-gray-300 bg-transparent border-none shadow-none hover:bg-transparent hover:text-white mr-2"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={handleNext}
          className="bg-white text-black hover:bg-black hover:text-white"
        >
          Siguiente <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

