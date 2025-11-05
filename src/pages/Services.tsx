import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code2, Smartphone, Palette, LineChart, Database, Cloud, ShoppingCart, Search } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices",
      features: ["React & Vue.js", "Node.js Backend", "RESTful APIs", "Progressive Web Apps"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions for iOS and Android",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: LineChart,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to boost your online presence",
      features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust and scalable server-side solutions",
      features: ["API Development", "Database Design", "Microservices", "Cloud Integration"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud infrastructure and deployment services",
      features: ["AWS/Azure/GCP", "DevOps", "CI/CD Pipeline", "Serverless Architecture"]
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Complete online store development and management",
      features: ["Shopping Cart", "Payment Gateway", "Inventory System", "Order Management"]
    },
    {
      icon: Search,
      title: "SEO & Analytics",
      description: "Data-driven strategies to improve visibility and performance",
      features: ["Keyword Research", "Technical SEO", "Performance Tracking", "Conversion Optimization"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="px-4 py-16 text-center">
        <div className="container mx-auto max-w-4xl space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            Our <span className="bg-gradient-royal bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive digital solutions to help your business thrive in the digital age
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-royal transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals and requirements" },
              { step: "02", title: "Planning", desc: "Creating a strategic roadmap" },
              { step: "03", title: "Development", desc: "Building your solution with excellence" },
              { step: "04", title: "Launch", desc: "Deploying and supporting your project" }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="text-6xl font-bold text-primary/20">{item.step}</div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss how we can help transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Us
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
