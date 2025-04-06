
import { Briefcase, GraduationCap, Heart, User } from "lucide-react";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="space-y-6">
            <p className="text-lg">
              I'm a passionate technologist and student researcher focused on the 
              intersection of AI, Machine Learning, and Full Stack Development. 
              Currently pursuing my B.Tech in Computer Science at SRM IST Trichy 
              with a CGPA of 8.77 (expected graduation: 2027).
            </p>
            <p className="text-muted-foreground">
              With hands-on experience through internships at prestigious 
              institutions like NIT Trichy, IIT Madras, and CodeGalatta, I've developed 
              expertise in AI/ML research, software innovation, and networked robotics.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">Siddharth S</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Education</p>
                <p className="font-medium">B.Tech CSE, SRM IST Trichy</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">siddharths2006@gmail.com</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">CGPA</p>
                <p className="font-medium">8.77/10</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <Tabs defaultValue="education">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="education">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Education</span>
                </TabsTrigger>
                <TabsTrigger value="experience">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Experience</span>
                </TabsTrigger>
                <TabsTrigger value="interests">
                  <Heart className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Interests</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="education" className="space-y-4">
                <div>
                  <h3 className="font-medium text-primary">B.Tech Computer Science Engineering</h3>
                  <p className="text-sm">SRM IST Trichy (2023 - 2027)</p>
                  <p className="text-sm text-muted-foreground mt-1">CGPA: 8.77/10</p>
                </div>
              </TabsContent>
              
              <TabsContent value="experience" className="space-y-4">
                <div>
                  <h3 className="font-medium text-primary">OCR Intern</h3>
                  <p className="text-sm">NIT Trichy (May 2024 - July 2024)</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium text-primary">AI & ML Intern</h3>
                  <p className="text-sm">EduxLabs (IIT Madras) (Dec 2024 - Jan 2025)</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium text-primary">Full Stack Development Intern</h3>
                  <p className="text-sm">CodeGalatta (Feb 2023)</p>
                </div>
              </TabsContent>
              
              <TabsContent value="interests" className="space-y-2">
                <p>💻 AI/ML Research & Applications</p>
                <p>🔧 Software Engineering & System Design</p>
                <p>🤖 Networked Robotics & IoT</p>
                <p>📊 Data Visualization & Analytics</p>
                <p>🔍 Computer Vision & NLP</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
