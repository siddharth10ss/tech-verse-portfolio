
import { Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Siddharth demonstrated exceptional problem-solving skills during his internship. His ability to quickly grasp complex AI concepts and implement practical solutions was impressive.",
    name: "Dr. Ramesh Kumar",
    role: "Research Director",
    company: "NIT Trichy",
  },
  {
    quote:
      "Siddharth's contributions to our OCR project were invaluable. He brought fresh perspectives and innovative approaches that significantly improved our text recognition accuracy.",
    name: "Priya Sharma",
    role: "Project Lead",
    company: "EduxLabs",
  },
  {
    quote:
      "Working with Siddharth on our full-stack development project was a pleasure. His technical skills combined with his collaborative approach made him an asset to our team.",
    name: "Arun Madhav",
    role: "Technical Manager",
    company: "CodeGalatta",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Testimonials</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          What mentors and colleagues have to say about working with me
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-card">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/50 mb-4" />
                <p className="mb-6 italic">{testimonial.quote}</p>
                <div className="flex flex-col">
                  <span className="font-medium">{testimonial.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
