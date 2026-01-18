import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Computer Specialist I",
      company: "UIC - School Of Public Health",
      location: "Chicago, Illinois, USA",
      duration: "December 2025 - Present",
      description: "Web Application Development and Database Management.",
      achievements: [
        "Design, build, and optimize full-stack, object oriented ASP.NET Web Forms applications used by 200+ faculty, staff, and students across UIC School of Public Health.",
        "Work directly with deans and administrators to gather user requirements through monthly reviews and iterate on features.",
        "Develop frontend components using HTML, CSS, and JavaScript within ASP.NET.",
        "Design, modify, and maintain SQL Server schemas, and optimize queries for better performance.",
        "Debug production issues and improve reliability through refactoring and secure releases.",
      ],
      technologies: ["ASP.NET", ".Net", "C#", "Web Development", "SQL"],
    },
    {
      title: "Software Engineer Intern",
      company: "KreedaLoka",
      location: "Bangalore, India",
      duration: "July 2023 - December 2023",
      description: "ChessEra: Multi-Platform game client and server development.",
      achievements: [
        "Built core systems for ChessEra used by 4 academies and 500+ users.",
        "Designed and developed an arena pairing system from scratch by applying matching algorithms and implemented real-time leaderboard updates using Java, C# and Unity.",
        "Built matchmaking and state-management logic on top of a WebSocket-based real-time client–server architecture, coordinating player state, events, and in-game updates.",
        "Stored, managed, and retrieved user data for pairing using SQL, ensuring consistency and low-latency access.",
        "Designed modular game objects and drafted product specification documents.",
      ],
      technologies: ["Java", "C#", "Unity2D", "Game Development", "Real-time Systems", "SQL", ".NET"],
    },
  ]

  const education = [
    {
      degree: "Master of Science",
      field: "Computer Science",
      institution: "University of Illinois at Chicago",
      location: "Chicago, USA",
      duration: "August 2025 - May 2027",
      grade: "CGPA: 4.0/4.0",
    },
    {
      degree: "Bachelor of Engineering",
      field: "Information Science and Engineering",
      institution: "Global Academy of Technology",
      location: "Bangalore, India",
      duration: "December 2021 - July 2025",
      grade: "CGPA: 9.02/10",
    },
  ]

  return (
    <section id="experience" className="container py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience & Education</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My professional experience and academic background.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground">{exp.company}</CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarDays className="mr-1 h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <CardDescription>{edu.field}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">{edu.institution}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarDays className="mr-1 h-4 w-4" />
                      {edu.duration}
                    </div>
                    <Badge variant="outline">{edu.grade}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
