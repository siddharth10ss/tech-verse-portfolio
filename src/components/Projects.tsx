
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  links?: {
    demo?: string;
    github?: string;
  };
  category: "ai" | "web" | "iot" | "research";
  status: "completed" | "ongoing";
};

const projects: Project[] = [
  {
    title: "ResQ – Smart Vehicle Data Recorder",
    description:
      "A real-time vehicle tracking & incident detection system with SOS alert capabilities. Integrated emergency button for alerts with location, impact force, and multimedia evidence.",
    techStack: ["ESP32", "NEO-6M GPS", "ADXL345", "ESP32-CAM", "SIM800L GSM"],
    links: {
      github: "https://github.com/siddharth10ss",
    },
    category: "iot",
    status: "ongoing",
  },
  {
    title: "AI-Powered OCR for Pharmaceutical Tablets",
    description:
      "Extracts tablet information using OCR, reducing manual data entry time by 80%. Employs image preprocessing techniques to improve text recognition accuracy.",
    techStack: ["Python", "OpenCV", "Tkinter", "OCR.Space API"],
    links: {
      demo: "#",
      github: "https://github.com/siddharth10ss",
    },
    category: "ai",
    status: "completed",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Features interactive project gallery, dynamic navigation, and contact form. Developed with modern web technologies for performance and responsiveness.",
    techStack: ["React", "Tailwind CSS", "TypeScript"],
    links: {
      demo: "#",
      github: "https://github.com/siddharth10ss",
    },
    category: "web",
    status: "completed",
  },
  {
    title: "Park Sync – Smart Parking Management",
    description:
      "A smart parking management system with real-time monitoring, ML-based parking predictions, and mobile reservations. Helps reduce congestion and optimize parking space usage.",
    techStack: ["IoT Sensors", "Machine Learning", "Mobile App"],
    links: {
      github: "https://github.com/siddharth10ss",
    },
    category: "iot",
    status: "completed",
  },
  {
    title: "Nutrients Deficiency Detection System",
    description:
      "AI-powered diagnostic tool with mobile app integration. Analyzes user samples for early detection of nutrient deficiencies, providing actionable health insights.",
    techStack: ["AI", "Mobile App", "Health Tech"],
    category: "research",
    status: "ongoing",
  },
  {
    title: "Drug Discovery Acceleration",
    description:
      "Computational modeling with AI for accelerated drug discovery. Aims to reduce pharmaceutical research time through advanced ML techniques and predictive models.",
    techStack: ["AI", "Computational Modeling", "Medical Research"],
    category: "research",
    status: "ongoing",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="hover-card overflow-hidden flex flex-col h-full">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-2 mb-1">
                  <CardTitle>{project.title}</CardTitle>
                  <Badge variant={project.status === "ongoing" ? "outline" : "default"}>
                    {project.status === "ongoing" ? "Ongoing" : "Completed"}
                  </Badge>
                </div>
                <Badge
                  className={`tech-${project.category}`}
                  variant="outline"
                >
                  {project.category === "ai" && "AI/ML"}
                  {project.category === "web" && "Web Development"}
                  {project.category === "iot" && "IoT & Hardware"}
                  {project.category === "research" && "Research"}
                </Badge>
              </CardHeader>
              <CardContent className="py-4 flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
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
  );
}
