"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "../ui/button"

interface Answers {
  [key: number]: string
}

interface EndSlideProps {
  answers: Answers
}


export default function EndSlide({ answers }: EndSlideProps) {
  const [success, setSuccess] = useState(false)
  
  const handleSubmit = async () => {

    const formattedData = {
      nombre: answers[1],
      nombre_negocio: answers[2],
      correo: answers[3],
      sitio_web: answers[4],
      propiedad: answers[5],
      tipo_propietario: answers[6],
      tipo_inmueble: answers[7],
      actividad_lucrativa: answers[8],
      direccion: answers[9],
      titulo_propiedad: answers[10],
      certificado_gravamen: answers[11],
      identificacion_propietario: answers[12],
    }

    // Lógica de confetti
    const duration = 15 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
    }, 250)

    try {

    } catch (error) {
      console.error("Error en la solicitud:", error)
    } finally {
      clearInterval(interval)
    }
  }

  return (
    <>
      {!success && (
        <div className="max-w-2xl mx-auto p-8 flex flex-col items-center justify-center">
          <div className="flex justify-center items-center bg-green-200 rounded-full w-24 h-24 mb-10">
            <p className="text-5xl">
            🙌🏻
            </p>
          </div>
          <h1 className="text-2xl font-normal text-center mb-6 text-black">
            Al hacer click en <span className="font-bold text-[#5625EE]">finalizar</span>, se enviará el formulario y nos pondremos en contacto contigo!
          </h1>
          <Button className="bg-[#5625EE] text-white font-medium text-2xl rounded-2xl px-7 py-6" onClick={handleSubmit}>
              Finalizar
          </Button>
        </div>
      )}
      {success && (
        <div className="max-w-2xl mx-auto p-8 flex flex-col items-center justify-center">
        <div className="flex justify-center items-center bg-[#5625EE]/20 rounded-full w-24 h-24 mb-10">
          <Image src="/congrats.png" alt="Logo" width={100} height={100} />
        </div>
        <h1 className="text-4xl font-normal mb-6 text-black text-center">¡Gracias por completar el formulario!</h1>
        <p className="text-xl text-gray-600 text-center mb-8">
          Hemos guardado todas tus respuestas. Pronto podrás tokenizar tu inmueble.
        </p>        
      </div>
      )}
    </>
  )
}