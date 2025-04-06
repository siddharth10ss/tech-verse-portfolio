
import { useState, useEffect } from "react";
import { Code, Database, Bot, Server, Zap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

type Skill = {
  name: string;
  level: number;
};

const skillCategories = [
  {
    id: "programming",
    label: "Programming",
    icon: <Code className="mr-2 h-4 w-4" />,
    skills: [
      { name: "Python", level: 90 },
      { name: "C/C++", level: 85 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    id: "aiml",
    label: "AI/ML",
    icon: <Bot className="mr-2 h-4 w-4" />,
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "OpenCV", level: 90 },
      { name: "NumPy", level: 95 },
      { name: "Machine Learning", level: 80 },
      { name: "NLP", level: 75 },
    ],
  },
  {
    id: "web",
    label: "Web Dev",
    icon: <Server className="mr-2 h-4 w-4" />,
    skills: [
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Spring Boot", level: 70 },
      { name: "Flask", level: 80 },
    ],
  },
  {
    id: "iot",
    label: "IoT & Networking",
    icon: <Zap className="mr-2 h-4 w-4" />,
    skills: [
      { name: "Embedded Systems", level: 70 },
      { name: "ESP32", level: 80 },
      { name: "NEO-6M GPS", level: 75 },
      { name: "ADXL345", level: 65 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: <Database className="mr-2 h-4 w-4" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "Power BI", level: 85 },
      { name: "MATLAB", level: 70 },
    ],
  },
];

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillId = entry.target.id.replace("skill-", "");
          setVisibleSkills((prev) => ({ ...prev, [skillId]: true }));
        }
      });
    }, options);

    const skillElements = document.querySelectorAll(".skill-item");
    skillElements.forEach((el) => observer.observe(el));

    return () => {
      skillElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Tech Stack</h2>
        
        <div className="mt-12">
          <Tabs defaultValue="programming" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center">
                  {category.icon}
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                  {category.skills.map((skill, index) => (
                    <div 
                      key={skill.name} 
                      className="skill-item" 
                      id={`skill-${category.id}-${index}`}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{
                            "--progress-width": visibleSkills[`${category.id}-${index}`] ? `${skill.level}%` : "0%",
                          } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Problem-solving', 'Teamwork', 'Adaptability', 'Quick Learning'].map((skill) => (
              <div key={skill} className="glass-card p-4 text-center hover-card">
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
