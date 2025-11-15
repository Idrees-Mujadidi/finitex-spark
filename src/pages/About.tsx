import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Award, Users, TrendingUp, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "Empowering businesses through innovative digital solutions"
    },
    {
      icon: Eye,
      title: "Visionary",
      description: "Leading the future of digital transformation"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional quality"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Working together to achieve success"
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Driving continuous improvement and innovation"
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Loving what we do and delivering with care"
    }
  ];

  const team = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Mike Johnson",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Sarah Williams",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="px-4 py-20 text-center">
        <div className="container mx-auto max-w-4xl space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            About <span className="bg-gradient-to-r from-primary via-blue-500 to-blue-400 bg-clip-text text-transparent">FiniteX</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Building digital excellence since 2014
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8 md:p-12 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2014, FiniteX began with a simple mission: to help businesses thrive in the digital age. 
                  What started as a small team of passionate developers has grown into a full-service digital agency 
                  serving clients worldwide.
                </p>
                <p>
                  Over the years, we've successfully delivered over 500 projects, ranging from simple websites to 
                  complex enterprise solutions. Our commitment to excellence and innovation has earned us the trust 
                  of businesses across various industries.
                </p>
                <p>
                  Today, FiniteX stands as a leader in digital solutions, combining cutting-edge technology with 
                  creative design to deliver exceptional results. We're not just building applications; we're creating 
                  experiences that drive growth and success.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-20 border-y border-border/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The talented people behind FiniteX
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-600/10 to-background"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              By The Numbers
            </h2>
            <p className="text-xl text-muted-foreground">
              Our achievements speak for themselves
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary via-blue-500 to-blue-400 bg-clip-text text-transparent mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary via-blue-500 to-blue-400 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary via-blue-500 to-blue-400 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary via-blue-500 to-blue-400 bg-clip-text text-transparent mb-2">300+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Join Us on This Journey
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary via-blue-500 to-blue-600 hover:opacity-90 text-white border-0">
                Get In Touch
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-border/50 hover:bg-secondary">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
