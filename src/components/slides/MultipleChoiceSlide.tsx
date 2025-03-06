'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'

interface Choice {
  key: string;
  label: string;
}

interface MultipleChoiceSlideProps {
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

export default function MultipleChoiceSlide({
  question,
  subtitle,
  choices,
  onAnswer,
  onNext,
  onPrevious,
  currentStep,
  totalSteps,
  questionId
}: MultipleChoiceSlideProps) {

  const [selectedChoices, setSelectedChoices] = useState<string[]>([]);

  const handleSelect = (choice: Choice) => {
    console.log(selectedChoices);
    
    if (selectedChoices.includes(choice.label)) {
      // Si ya está seleccionado, quitarlo
      const updatedChoices = selectedChoices.filter(c => c !== choice.label);
      setSelectedChoices(updatedChoices);
    } else {
      // Si no está seleccionado, agregarlo
      const updatedChoices = [...selectedChoices, choice.label];
      setSelectedChoices(updatedChoices);
    }
  }

  const handleNext = () => {
    if (selectedChoices.length > 0) {
      onAnswer(questionId, selectedChoices.join(',')); // Enviar como cadena delimitada por comas
      onNext();
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="question-number text-white">{currentStep} → {totalSteps}</div>
      <h2 className="text-3xl font-normal mb-4 text-white">{question}</h2>
      {subtitle && (
        <p className="text-lg mb-8 text-purple-200">{subtitle}</p>
      )}
      <div className="space-y-3 mt-8">
        {choices.map((choice) => (
          <button
            key={choice.key}
            onClick={() => handleSelect(choice)}
            className={`
              w-full text-left px-6 py-4
              rounded-lg border-2 border-white/20 hover:bg-white/20
              transition-all duration-200 transition-colors ${
                selectedChoices.includes(choice.label) ? "bg-white/20" : ""
              }
              group relative
              ${selectedChoices.includes(choice.label)
                ? 'text-white border-white/20'
                : 'text-white hover:border-white/20'
              }
            `}
          >
            <div className="flex items-center space-x-4">
              <span className={`
                inline-flex items-center justify-center
                w-8 h-8 rounded-lg border-2
                ${selectedChoices.includes(choice.label)
                  ? 'border-gray-300 text-white'
                  : 'border-gray-300 text-white group-hover:border-white group-hover:text-white'
                }
              `}>
                {selectedChoices.includes(choice.label) ? (
                  <Check className="w-5 h-5" color="white" />
                ) : (
                  choice.key
                )}
              </span>
              <span className="text-xl">{choice.label}</span>
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
          disabled={selectedChoices.length === 0}
          className="bg-white text-black hover:bg-black hover:text-white"
        >
          Siguiente <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
