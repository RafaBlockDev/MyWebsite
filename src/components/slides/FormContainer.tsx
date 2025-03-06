"use client"

import { useState } from "react"
import WelcomeSlide from "./WelcomeSlide"
import QuestionSlide from "./QuestionSlide"
import MultipleChoiceSlide from "./MultipleChoiceSlide"
import AddressFormSlide from "./AddressFormSlide"
import EndSlide from "./EndSlide"
import SingleChoiceSlide from "./SingleChoiceSlide"

const questions = [
  { id: 1, type: "question-choice", question: "¿Cuál es tu nombre?", metaPlaceholder: "Satoshi Nakamoto..." },
  { id: 2, type: "question-choice", question: "¿Cuál es el nombre de tu negocio?", metaPlaceholder: "Tulum Shine..." },
  { id: 3, type: "question-choice", question: "Escribe un correo de contacto", metaPlaceholder: "satoshi@gmail.com..." },
  { id: 4, type: "question-choice", question: "¿Cuál es tu sitio web?", metaPlaceholder: "https://" },
  { id: 5, 
    question: "El inmueble es:",
    type: "single-choice",
    subtitle: "",
    choices: [
      { key: "A", label: "Propio" },
      { key: "B", label: "De un tercero" },
    ],
  },
  { id: 6, 
    question: "El propietario es:",
    type: "single-choice",
    subtitle: "",
    choices: [
      { key: "A", label: "Persona física" },
      { key: "B", label: "Persona moral" },
      { key: "C", label: "Fideicomiso" },
    ],
  },
  { id: 7, 
    question: "¿Qué tipo de inmueble es?",
    type: "multiple-choice",
    subtitle: "",
    choices: [
      { key: "A", label: "Residencial" },
      { key: "B", label: "Turístico" },
      { key: "C", label: "Comercial" },
      { key: "D", label: "Industrial" },
      { key: "E", label: "Tierra" },
      { key: "F", label: "Otro" },
    ],
  },
  { id: 8, 
    question: "¿Cual es la actividad lucrativa?",
    type: "multiple-choice",
    subtitle: "",
    choices: [
      { key: "A", label: "Alquiler" },
      { key: "B", label: "Venta" },
      { key: "C", label: "Financiamiento" },
      { key: "D", label: "Otro" },
    ],
  },
  {
    id: 9,
    question: "Dirección del inmueble",
    type: "address",
    subtitle: "",
  },
  {
    id: 10,
    type: "file",
    question: "Sube el título de propiedad o la escritura pública",
    subtitle: "Es importante que este en PDF",
  },
  {
    id: 11,
    type: "file",
    question: "Sube tu certificado de libertad de gravamen",
    subtitle: "Es importante que este en PDF",
  },
  {
    id: 12,
    type: "file",
    question: "Por último, sube la identificación del propietario",
    subtitle: "Es importante que este en PDF",
  },
]

interface Answers {
  [key: number]: string
}

export default function FormContainer() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})

  const handleNext = () => {
    if (currentSlide < questions.length + 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }))
    console.log("The answers is:", answers)
  }

  const currentQuestion = questions[currentSlide - 1]
  const isSpecialBackground = currentSlide === questions.length + 1

  return (
    <div
        className={`min-h-screen flex items-center justify-center bg-[#111111] ${isSpecialBackground ? "bg-white" : ""}`}
    >
      <div className="absolute top-0 bg-transparent">
        {/*<NavbarForm />*/}
      </div>
      <div className="w-full">
        {currentSlide === 0 && <WelcomeSlide onNext={handleNext} />}
        {currentSlide > 0 && currentSlide <= questions.length && (
          <>
            {currentQuestion?.type === "multiple-choice" ? (
              <MultipleChoiceSlide
                question={currentQuestion.question}
                subtitle={currentQuestion.subtitle}
                choices={currentQuestion.choices || []}
                questionId={currentQuestion.id}
                onAnswer={handleAnswer}
                onNext={handleNext}
                onPrevious={handlePrevious}
                currentStep={currentSlide}
                totalSteps={questions.length}
              />
            ) : currentQuestion?.type === "address" ? (
              <AddressFormSlide
                question={currentQuestion.question}
                subtitle={currentQuestion.subtitle}
                questionId={currentQuestion.id}
                onAnswer={handleAnswer}
                onNext={handleNext}
                onPrevious={handlePrevious}
                currentStep={currentSlide}
                totalSteps={questions.length}
              />
            ) : currentQuestion?.type === "question-choice" ? (
              <QuestionSlide
                question={currentQuestion.question}
                questionId={currentQuestion.id}
                onAnswer={handleAnswer}
                onNext={handleNext}
                onPrevious={handlePrevious}
                currentStep={currentSlide}
                totalSteps={questions.length}
                metaPlaceholder={currentQuestion.metaPlaceholder || ""}
              />
            ) : (
              <SingleChoiceSlide
                question={currentQuestion.question}
                subtitle={currentQuestion.subtitle}
                choices={currentQuestion.choices || []}
                questionId={currentQuestion.id}
                onAnswer={handleAnswer}
                onNext={handleNext}
                onPrevious={handlePrevious}
                currentStep={currentSlide}
                totalSteps={questions.length}
              />
            )
            }
          </>
        )}
        {currentSlide === questions.length + 1 && <EndSlide />}
      </div>
    </div>
  )
}
