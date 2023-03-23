import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Factory Subgraph",
    description:
      "I built a Factory subgraph that query NFTs from NFT Collections built in a factory contract",
    image: "/subgraph.jpg",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://github.com/RafaBlockDev/Factory-Subgraph",
  },
  {
    name: "ERC-4337",
    description:
      "I implement the new ERC-4337 standard by my self, with foundry and testing, also has a subgraph implementation",
    image: "/portfolio.jpeg",
    github: "https://github.com/RafaBlockDev/ERC-4337",
    link: "https://github.com/RafaBlockDev/ERC-4337",
  },
  {
    name: "Automated Market Maker",
    description:
      "I created an AMM using Uniswap router and secure implementations provided by the biggest AMM in web3",
    image: "/amm.jpg",
    github: "https://github.com/RafaBlockDev/Lending-Pool",
    link: "https://github.com/RafaBlockDev/Lending-Pool",
  },
  {
    name: "NFT Collection",
    description:
      "I created a NFT collection since scratch in foundry as smart contract backend, a subgraph, and a nextJS website interacting with the smart contracts using ethers",
    image: "/collection.png",
    github: "https://github.com/RafaBlockDev/NFT-Collection",
    link: "https://github.com/RafaBlockDev/NFT-Collection",
  },
  {
    name: "MEV and Flashbots",
    description:
      "I created flashbots in hardhat, where I document each part of the code, interesting practice of MEV and flashbots",
    image: "/mev.jpg",
    github: "https://github.com/RafaBlockDev/Flashbots-Labs",
    link: "https://github.com/RafaBlockDev/Flashbots-Labs",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
