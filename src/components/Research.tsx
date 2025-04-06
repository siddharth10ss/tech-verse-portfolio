
import { ExternalLink, FileText } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

const publications = [
  {
    title: "Enhancing Wellness and Empowering Individuals through Technology",
    description:
      "This research explores how technology can be leveraged to improve personal wellness and empower individuals through AI-driven health monitoring and intervention systems.",
    link: "#",
    date: "2023",
  },
];

export default function Research() {
  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Research & Publications</h2>

        <div className="mt-12 space-y-8">
          {publications.map((pub, index) => (
            <Card key={index} className="hover-card">
              <CardHeader>
                <div className="flex items-center space-x-2 text-primary mb-1">
                  <FileText className="h-5 w-5" />
                  <span className="font-medium">Publication</span>
                </div>
                <h3 className="text-xl font-bold">{pub.title}</h3>
                <p className="text-sm text-muted-foreground">{pub.date}</p>
              </CardHeader>
              <CardContent>
                <p>{pub.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read Publication
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 glass-card p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Current Research Interests</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-4 bg-secondary/50 rounded-lg">
              <h4 className="font-medium mb-2">AI in Healthcare</h4>
              <p className="text-sm text-muted-foreground">
                Developing AI systems for early disease detection and personalized treatment plans
              </p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-lg">
              <h4 className="font-medium mb-2">Computer Vision</h4>
              <p className="text-sm text-muted-foreground">
                Advancing image processing techniques for medical imaging and object recognition
              </p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-lg">
              <h4 className="font-medium mb-2">IoT Integration</h4>
              <p className="text-sm text-muted-foreground">
                Connecting smart devices with AI for intelligent environmental monitoring
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
