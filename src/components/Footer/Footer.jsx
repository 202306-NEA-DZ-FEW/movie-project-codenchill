import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  const teamMembers = [
    {
      name: <>Fatima Zohra Merzouk</>,
      linkedin: "https://www.linkedin.com/in/fatima-merzouk/",
      github: "https://github.com/merzoukfatima",
    },
    {
      name: <>Hachem Bouhadede</>,
      linkedin: "https://www.linkedin.com/in/hachem-bouhadede/",
      github: "https://github.com/HachemBouhadede",
    },
    {
      name: <>Katia Ghezali</>,
      linkedin: "https://www.linkedin.com/in/katiaghezali/",
      github: "https://github.com/katia-github",
    },
    {
      name: <>Hadj Bouras</>,
      linkedin: "https://www.linkedin.com/in/hadj-said-a577a8255/",
      github: "https://github.com/Hadj-Said-Bouras",
    },
    {
      name: <>Sami Babouche</>,
      linkedin: "https://www.linkedin.com/in/sami-babouche-4400551b0/",
      github: "https://github.com/samiba6",
    },
    {
      name: <>Hadil Khenissa</>,
      linkedin: " https://www.linkedin.com/in/hadil-khenissa/   ",
      github: "https://github.com/hadilkhe",
    },
  ]

  // Split the team members into two groups, each containing three members
  const membersGroup1 = teamMembers.slice(0, 3)
  const membersGroup2 = teamMembers.slice(3, 6)

  return (
    <footer className="footer p-2  inset-0 relative bg-gradient-to-t from-red-400 opacity-80 via-transparent to-transparent opacity-80 py-6 w-full">
      <h2 className="text-lg font-semibold mb-2">Team Members</h2>
      <div className="grid  relative items-center  grid-cols-6 gap-4 z-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="items-center">
            <p className="text-white text-center text-base uppercase font-montserrat text-32 font-normal leading-none">
              {member.name}
            </p>
            <div className=" text-white text-center mt-2 text-2xl">
              {" "}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mr-2 hover:text-red-500"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              |
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 ml-2"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>{" "}
            </div>
          </div>
        ))}
      </div>
    </footer>
  )
}
