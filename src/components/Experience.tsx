
import { CalendarClock } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

const experiences: Experience[] = [
  {
    title: "Optical Character Recognition Intern",
    company: "NIT Trichy",
    period: "May 2024 - July 2024",
    description:
      "Developed OCR-based applications for text extraction using OpenCV & NumPy. Implemented image preprocessing techniques to improve text recognition accuracy.",
    technologies: ["OpenCV", "NumPy", "Python", "Image Processing"],
  },
  {
    title: "AI & Machine Learning Intern",
    company: "EduxLabs (IIT Madras)",
    period: "Dec 2024 - Jan 2025",
    description:
      "Gained hands-on experience with Deep Learning, NLP, and Computer Vision. Implemented AI/ML models using Python & TensorFlow.",
    technologies: ["Deep Learning", "NLP", "Computer Vision", "TensorFlow", "Python"],
  },
  {
    title: "Python Full Stack Development Intern",
    company: "CodeGalatta",
    period: "Feb 2023",
    description:
      "Built a React.js & Node.js based full-stack web application. Participated in SDLC from requirements gathering to deployment.",
    technologies: ["React.js", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Power BI Intern",
    company: "CodeGalatta",
    period: "Jan 2023",
    description:
      "Developed data visualization dashboards for business intelligence. Automated data pipeline delivery using Power BI.",
    technologies: ["Power BI", "Data Visualization", "Data Analysis", "Business Intelligence"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work Experience</h2>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover-card">
              <CardHeader>
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <CalendarClock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
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
