import { ArrowRight, Download, Github } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Siddharth S
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                AI/ML Developer | Full Stack Engineer | Researcher
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Building intelligent solutions at the intersection of AI, web development, 
              and cutting-edge research. Currently pursuing B.Tech CSE at SRM IST Trichy.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="group">
                <a href="#projects">
                  View Projects 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              {/* Profile Image Container with Decorative Elements */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse" />
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-primary/50">
                {/* Your profile image */}
                <img 
                  src="/lovable-uploads/72f7ba8f-8565-480d-b7e6-640541174ecc.png" 
                  alt="Siddharth S" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Tech Labels */}
              <div className="absolute -top-4 -right-4 tech-pill tech-ai">
                AI/ML
              </div>
              <div className="absolute -bottom-2 left-0 tech-pill tech-web">
                Full Stack
              </div>
              <div className="absolute top-1/2 -right-8 tech-pill tech-research">
                Research
              </div>
              <div className="absolute -bottom-8 right-8 tech-pill tech-iot">
                IoT
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl" />
    </section>
  );
}
