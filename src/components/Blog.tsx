
import { ArrowRight, CalendarDays } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "How AI is Transforming Healthcare Diagnostics",
    excerpt: "A look into how artificial intelligence is revolutionizing early disease detection and diagnostics in healthcare systems worldwide.",
    date: "March 15, 2024",
    tags: ["AI", "Healthcare", "Machine Learning"],
    readTime: "6 min read",
    slug: "ai-healthcare-diagnostics",
  },
  {
    title: "Building Robust IoT Systems for Vehicle Safety",
    excerpt: "Exploring the integration of IoT sensors and real-time data processing for modern vehicle safety systems.",
    date: "February 2, 2024",
    tags: ["IoT", "Vehicle Safety", "Real-time Systems"],
    readTime: "8 min read",
    slug: "iot-vehicle-safety-systems",
  },
  {
    title: "The Future of Full Stack Development",
    excerpt: "Examining how modern full stack development is evolving with new frameworks, tools, and methodologies.",
    date: "January 10, 2024",
    tags: ["Web Development", "Full Stack", "Programming"],
    readTime: "5 min read",
    slug: "future-full-stack-development",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title">Blog & Insights</h2>
          <Button variant="outline">
            View All Posts <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="hover-card h-full flex flex-col">
              <CardHeader>
                <h3 className="text-xl font-bold">{post.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="p-0">
                  <a href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
