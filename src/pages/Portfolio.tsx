import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code2 } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "web", "mobile", "design", "ecommerce"];

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "ecommerce",
      description: "Modern online shopping platform with advanced features",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
    },
    {
      title: "Healthcare Mobile App",
      category: "mobile",
      description: "Patient management and telemedicine solution",
      tags: ["React Native", "Firebase", "Healthcare"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
    },
    {
      title: "Financial Dashboard",
      category: "web",
      description: "Real-time analytics and reporting platform",
      tags: ["Vue.js", "D3.js", "REST API"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      title: "Brand Identity Design",
      category: "design",
      description: "Complete brand redesign for tech startup",
      tags: ["UI/UX", "Branding", "Figma"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
    },
    {
      title: "Food Delivery App",
      category: "mobile",
      description: "On-demand food ordering and delivery service",
      tags: ["Flutter", "Google Maps", "Payment"],
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop"
    },
    {
      title: "SaaS Dashboard",
      category: "web",
      description: "Project management and collaboration tool",
      tags: ["React", "TypeScript", "GraphQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      title: "Real Estate Platform",
      category: "ecommerce",
      description: "Property listing and management system",
      tags: ["Next.js", "PostgreSQL", "Maps API"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
    },
    {
      title: "Educational Platform",
      category: "web",
      description: "Online learning and course management system",
      tags: ["React", "Video Streaming", "LMS"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop"
    },
    {
      title: "Fitness Tracker",
      category: "mobile",
      description: "Workout tracking and nutrition planning app",
      tags: ["React Native", "Health Kit", "Analytics"],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="px-4 py-20 text-center">
        <div className="container mx-auto max-w-4xl space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            Our <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our latest projects and success stories
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="px-4 py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={filter === category ? "bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 text-white border-0 capitalize" : "border-border/50 hover:bg-secondary capitalize"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-4 py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-primary/90 hover:bg-primary text-white">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="border-border/50">
                        <Code2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-20 border-y border-border/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-2">300+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
