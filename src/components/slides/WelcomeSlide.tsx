"use client"

import Image from "next/image"

interface WelcomeSlideProps {
  onNext: () => void
}

export default function WelcomeSlide({ onNext }: WelcomeSlideProps) {
  return (
    <>
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      <div className="absolute right-0 top-0 w-1/3 h-screen">
        <div className="absolute right-0 top-0 w-full h-1/2 bg-blue-500 rounded-bl-[50%]"></div>
        <div className="absolute right-0 top-1/3 w-1/2 h-screen bg-green-400"></div>
        <div className="absolute right-1/3 top-1/2 w-1/3 h-1/3 bg-pink-400"></div>
        <div className="absolute right-1/4 bottom-0 w-1/4 h-1/4 bg-yellow-300"></div>
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-purple-400"></div>
        <div className="absolute right-0 top-1/2 w-1/6 h-1/3 bg-red-400"></div>
      </div>

      <div className="relative z-10 p-8">

        <div className="mb-20">
          <h1 className="text-3xl font-bold">🦄</h1>
        </div>

        <div className="max-w-3xl mb-32">
          <h2 className="text-6xl font-bold leading-tight">I build the new <span className="text-blue-500">technology</span> of <span className="text-red-500">payments</span> and <span className="text-green-500">privacy</span></h2>
        </div>

        <div className="mt-16">
          <div className="w-48 h-48 bg-yellow-400 p-4 mb-4 rounded-2xl">
            <div className="w-full h-full bg-blue-500 p-2 rounded-2xl">
              <div className="w-full h-full border-2 border-black rounded-2xl">
                <Image
                  src="/photo.png"
                  alt="Profile picture"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover bg-teal-300 rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-6xl font-bold mb-2">
              Rafael Fuentes <span className="text-2xl font-normal">Mexico City</span>
            </h3>
            <div className="bg-black text-white inline-block px-4 py-2 mt-2 rounded-2xl">
              <p className="flex items-center gap-2">
                SENIOR BLOCKCHAIN DEVELOPER <span className="font-bold">@LinkedIn</span>
              </p>
            </div>
            <div className="mt-4">
            <button className="bg-white text-gray-500 px-4 py-2 rounded-2xl hover:underline hover:text-gray-800 transition-all duration-300">
              Know more about me
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}