"use client"

import { Github, Linkedin, Mail, ExternalLink, Download, CalendarDays } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExperienceSection } from "@/components/experience-section"
import { AnimatedText } from "@/components/animated-text"
import { FloatingElements } from "@/components/floating-elements"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: "DataGuard",
      description:
        "An NER-based application that masks personal and medical information using regex, spaCy, and SciSpacy, with a Gradio UI for input and chatbot interaction.",
      image: "..\\DataGuard.png?height=200&width=300",
      technologies: ["Python", "spacy", "scispacy", "Regex", "Phonenumbers", "Pandas", "NER", "Gradio", "Gemini"],
      github: "https://github.com/sanketh-1850/DataGuard",
      live: "https://huggingface.co/spaces/sanketh2003/DataGuard",
      date: "February 2025",
      id: "Live Demo",
    },
    {
      title: "Hospital Connect",
      description:
        "A comprehensive webapp enabling users to locate nearby hospitals and consult with doctors via integrated maps, chat, and video call features.",
      image: "..\\Hospital_Connect.png?height=200&width=300",
      technologies: ["React", "Firebase", "Maps API", "ZegoCloud API", "Flask"],
      github: "https://github.com/Tryambak01/hospital-connect-final",
      live: "https://youtu.be/FhRxT80_ZGg",
      date: "October 2024",
      id: "Video Demo",
    },
    {
      title: "RemiAI",
      description:
        "A web application that utilizes symptom information to predict diseases using machine learning, achieving 93.4% accuracy with the ML model.",
      image: "..\\RemiAi.jpeg?height=200&width=300",
      technologies: ["Python", "Scikit-Learn", "Flask", "HTML", "CSS"],
      github: "https://github.com/geekguyadarsh/RemiAI",
      live: "https://www.loom.com/share/6d77b8b9e26c410e8e0b837f31eff0ed?t=0",
      date: "February 2024",
      id: "Video Demo",
    },
    {
      title: "Panic Shield",
      description:
        "A smart watch app that detects and responds to panic attacks using machine learning, achieving 91.1% accuracy with Python and Swift.",
      image: "..\\PanicShield.png?height=200&width=300",
      technologies: ["Python", "Swift", "SKLearn", "Numpy", "WatchOS"],
      github: "https://github.com/geekguyadarsh/panic-detection-svm",
      live: "https://youtu.be/PHgSPP1H-j8",
      date: "October 2023",
      id: "Video Demo",
    },
    {
      title: "Blockchain Inventory Management",
      description:
        "A decentralized inventory management system built with blockchain technology, winning 1st place at NITK Suratkal blockchain workshop hackathon.",
      image: "..\\BlockChain.png?height=200&width=300",
      technologies: ["HTML", "JavaScript", "Solidity", "Blockchain"],
      github: "https://github.com/geekguyadarsh/blockchainInventoryManagement",
      live: "#",
      date: "June 2023",
      id: "blockchain",
    },
    {
      title: "KCET College Predictor",
      description:
        "An application for predicting college acceptance based on KCET exam rank and other factors using machine learning algorithms.",
      image: "..\\kcet_college_predictor.png?height=200&width=300",
      technologies: ["Python", "Tkinter", "Pandas"],
      github: "https://github.com/sanketh-1850/KCET-College-Predictor",
      live: "#",
      date: "May 2023",
      id: "blockchain",
    },
  ]

  const skills = [
    {
      category: "Programming Languages",
      technologies: ["Python", "Java", "C#", "C++", "C", "HTML", "CSS"],
    },
    {
      category: "Libraries & Frameworks",
      technologies: ["Scikit-Learn", "Pandas", "Numpy", "Matplotlib", "Unity2D"],
    },
    {
      category: "Tools & Technologies",
      technologies: ["Git", "GitHub", "MySQL", "VS Code", "Eclipse", "Google Colab", "Jira"],
    },
  ]

  const awards = [
    {
      title: "Gold Award - BroCode Hackathon",
      description: "Won 1st place in a college hackathon with 20+ teams by solving HackerRank problems in the fastest time",
      date: "July 2023",
    },
    {
      title: "Gold Award - Blockchain Hackathon",
      description: "Secured 1st place for Blockchain Inventory Management website at NITK Suratkal workshop",
      date: "March 2023",
    },
    {
      title: "Bronze Standard - Duke of Edinburgh's International Award",
      description:
        "Achieved through community volunteering, physical fitness, skill development, and adventurous trek at Ramanagara Hills",
      date: "February 2019",
    },
  ]

  const handleDownloadResume = () => {
    // Create a temporary link to download the resume
    const link = document.createElement("a")
    link.href = "..\\sanketh_resume.pdf" // You'll need to add your actual resume file
    link.download = "Sanketh_Sequeira_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="max-w-4xl w-full mx-auto">
            <div className="min-h-screen bg-background text-foreground">
          <ScrollProgress />
          <FloatingElements />

          {/* Navigation */}
          <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-center">
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link
                  href="#about"
                  className="transition-colors hover:text-foreground/80 hover:scale-105 transform duration-200"
                >
                  About
                </Link>
                <Link
                  href="#experience"
                  className="transition-colors hover:text-foreground/80 hover:scale-105 transform duration-200"
                >
                  Experience
                </Link>
                <Link
                  href="#projects"
                  className="transition-colors hover:text-foreground/80 hover:scale-105 transform duration-200"
                >
                  Projects
                </Link>
                <Link
                  href="#skills"
                  className="transition-colors hover:text-foreground/80 hover:scale-105 transform duration-200"
                >
                  Skills
                </Link>
                <Link
                  href="#awards"
                  className="transition-colors hover:text-foreground/80 hover:scale-105 transform duration-200"
                >
                  Awards
                </Link>
                <Link
                  href="#contact"
                  className="transition-colors hover:text-foreground/80 hover:scale-105 transform duration-200"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="container flex min-h-[calc(100vh-3.5rem)] items-center justify-center py-12">
            <div
              className={`flex flex-col items-center space-y-8 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Profile Image */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative">
                  <Image
                    src="..\profile_picture.png?height=200&width=200"
                    alt="Sanketh Sequeira"
                    width={200}
                    height={200}
                    className="rounded-full border-4 border-background shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="block mb-2">Hi, I'm</span>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    <AnimatedText text="Sanketh Sequeira" delay={500} />
                  </span>
                </h1>
                <p
                  className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl opacity-0 animate-fade-in-up"
                  style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
                >
                  Software Engineering student passionate about building innovative solutions through code. I have experience in machine learning and game development, and enjoy creating meaningful applications that address real-world challenges.
                </p>
              </div>

              <div
                className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up"
                style={{ animationDelay: "2s", animationFillMode: "forwards" }}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleDownloadResume}
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>

              <div
                className="flex space-x-4 opacity-0 animate-fade-in-up"
                style={{ animationDelay: "2.5s", animationFillMode: "forwards" }}
              >
                <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform duration-200">
                  <Link href="https://github.com/sanketh-1850" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform duration-200">
                  <Link href="https://www.linkedin.com/in/sanketh-sequeira-65436422b/" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform duration-200">
                  <Link href="mailto:sankethsequeira.work@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <hr></hr>

          {/* About Section */}
          <section id="about" className="container py-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">About Me</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p
                  className="opacity-0 animate-fade-in-up"
                  style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
                >
                  I'm an incoming Master's student in Computer Science at the University of Illinois Chicago. I recently completed my undergraduate studies in Information Science and Engineering at Global Academy of Technology with a CGPA of 9.02. As a Software Engineering Intern at KreedaLoka, I worked on ChessEra, where I designed and developed an arena pairing mode using Java, C#, and Unity2D, along with real-time leaderboard updates and game object mechanics.
                </p>
                <p
                  className="opacity-0 animate-fade-in-up"
                  style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
                >
                  I enjoy building projects that solve meaningful problems, with hands-on experience in machine learning and game development. I'm always eager to learn, grow, and work on impactful technology.
                </p>
              </div>
            </div>
          </section>

          <hr></hr>

          {/* Experience Section */}
          <ExperienceSection />

          <hr></hr>

          {/* Projects Section */}
          <section id="projects" className="container py-24">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Here are some of my recent projects that showcase my skills and experience.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-blue-600 transition-colors duration-200">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="hover:scale-105 transition-transform duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="hover:scale-105 transition-transform duration-200"
                        >
                          <Link href={project.github}>
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                          </Button>
                          {project.id !== "blockchain" && project.live && (
                          <Button size="sm" asChild className="hover:scale-105 transition-transform duration-200">
                            <Link href={project.live}>
                              <ExternalLink className="mr-2 h-4 w-4" />
                              {project.id}
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <hr></hr>

          {/* Skills Section */}
          <section id="skills" className="container py-24">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Technologies</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Technologies and tools I work with to bring ideas to life.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {skills.map((skillGroup, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "forwards" }}
                  >
                    <CardHeader>
                      <CardTitle>{skillGroup.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="hover:scale-105 transition-transform duration-200 hover:bg-primary hover:text-primary-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <hr></hr>
          
          {/* Awards */}
          <section id="awards" className="container py-24">
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Awards and Recognition</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {awards.map((award, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{award.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">{award.description}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarDays className="mr-1 h-4 w-4" />
                        {award.date}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <hr></hr>

          {/* Contact Section */}
          <section id="contact" className="container py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                I'm always interested in new opportunities and collaborations. Let's connect and discuss how we can work
                together!
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                <Button size="lg" asChild className="hover:scale-105 transition-transform duration-200">
                  <Link href="mailto:sankethsequeira.work@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-transform duration-200">
                  <Link href="https://www.linkedin.com/in/sanketh-sequeira-65436422b/">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t py-8">
            <div className="container text-center text-sm text-muted-foreground">
              <p>&copy; 2025 Sanketh Sequeira. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
    
  )
}
