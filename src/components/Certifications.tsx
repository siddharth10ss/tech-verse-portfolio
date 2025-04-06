
import { Award } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

const certifications = [
  {
    title: "AICTE Edunet & Shell – AI with Green Tech Internship",
    issuer: "AICTE & Shell",
    date: "2023",
  },
  {
    title: "Tata Data Visualization & EA Software Engineering Simulations",
    issuer: "Forage",
    date: "2023",
  },
  {
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    date: "2023",
  },
  {
    title: "MongoDB Python Developer Path",
    issuer: "MongoDB University",
    date: "2023",
  },
  {
    title: "MATLAB, ONRAMP, MATWORKS Certification",
    issuer: "MathWorks",
    date: "2022",
  },
  {
    title: "The Joy of Computing using Python",
    issuer: "NPTEL",
    date: "2022",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Certifications & Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary" />
                  <h3 className="font-bold">{cert.title}</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
