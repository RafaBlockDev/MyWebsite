import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Solidity" },
  { skill: "RUST" },
  { skill: "Golang" },
  { skill: "EthersJS" },
  { skill: "Harhdat" },
  { skill: "Foundry" },
  { skill: "Zero-Knowledge" },
  { skill: "DEFI" },
  { skill: "Subgraph" },
  { skill: "GraphQL" },
  { skill: "NodeJS" },
  { skill: "MongoDB" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" }
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Know me!  🚀
            </h1>
            <p>
              Hi, my name is Rafael and I am a{" "}
              <span className="font-bold">{"ambitious engineer"}</span>,
              <span className="font-bold">{" motivated by web3"}</span>, and
              <span className="font-bold">{" professional"}</span> blockchain engineer
              based in Mexico City.
            </p>
            <br />
            <p>
              I have 3 years of experience in blockchain engineering, starting with smart contracts
              development, specially with ICO, DEFI protocols, ERC20 tokens, etc.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy and chill 🤙🏻.
              From going to the gym, learn new technologies, trading in DEFI, traveling as digital nomad around the world 🌎.
              <br/>
              I am always looking for new experiences into the job, my career, in my travels, and making
              relationships with people from web3 business and tech bros 😎.
            </p>
            <br />
            <p>
              I´m always open to learn {" "}
              <span className="font-bold text-teal-500">
               new technologies
              </span>{" "}
              that impact into projects that I would work. I have very good relationships with web3 community 
              around LATAM and USA too. Also, I´m keeping updated everyday about web3 and finantial ecosystem.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/avatar.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
