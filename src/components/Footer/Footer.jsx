import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  const teamMembers = [
    {
      name: (
        <>
          Fatima Zohra <br /> Merzouk
        </>
      ),
      linkedin: "https://www.linkedin.com/in/fatima-merzouk/",
      github: "https://github.com/merzoukfatima",
    },
    {
      name: (
        <>
          Hachem <br /> Bouhadede
        </>
      ),
      linkedin: "https://www.linkedin.com/in/hachem-bouhadede/",
      github: "https://github.com/HachemBouhadede",
    },
    {
      name: (
        <>
          Katia <br /> Ghezali
        </>
      ),
      linkedin: "https://www.linkedin.com/in/katiaghezali/",
      github: "https://github.com/katia-github",
    },
    {
      name: (
        <>
          Hadj <br />
          Bouras
        </>
      ),
      linkedin: "https://www.linkedin.com/in/hadj-said-a577a8255/",
      github: "https://github.com/Hadj-Said-Bouras",
    },
    {
      name: (
        <>
          Sami <br />
          Babouche
        </>
      ),
      linkedin: "https://www.linkedin.com/in/sami-babouche-4400551b0/",
      github: "https://github.com/samiba6",
    },
    {
      name: (
        <>
          Hadil <br />
          Khenissa
        </>
      ),
      linkedin: " https://www.linkedin.com/in/hadil-khenissa/   ",
      github: "https://github.com/hadilkhe",
    },
  ]

  // Split the team members into two groups, each containing three members
  const membersGroup1 = teamMembers.slice(0, 3)
  const membersGroup2 = teamMembers.slice(3, 6)

  return (
    <footer className="footer p-2 bg-base-200 text-base-content fixed bottom-0 w-full">
      <h2 className="text-lg font-semibold mb-2">Team Members</h2>
      <div className="grid grid-cols-8 gap-4">
        {membersGroup1.map((member, index) => (
          <div key={index} className="flex items-center mb-2">
            <span className="mr-2">{member.name}</span>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 ml-1"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        ))}
        {membersGroup2.map((member, index) => (
          <div key={index} className="flex items-center mb-2">
            <span className="mr-2">{member.name}</span>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 ml-1"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        ))}
      </div>
    </footer>
  )
}
