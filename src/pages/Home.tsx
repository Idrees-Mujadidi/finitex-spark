import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Smartphone, Palette, TrendingUp, CheckCircle, Users } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web solutions built with cutting-edge technologies"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that users love"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic marketing to grow your online presence"
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "300+", label: "Happy Clients" },
    { value: "50+", label: "Team Members" },
    { value: "10+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-primary text-primary-foreground">New</span>
              <span className="text-sm text-foreground">Innovative Digital Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Transform Your Ideas Into
              <span className="block mt-2 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We create innovative digital solutions that drive growth and deliver exceptional results for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 shadow-lg shadow-primary/50 text-white border-0">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-border/50 hover:bg-secondary">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 border-y border-border/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Why Choose
                <span className="block bg-gradient-royal bg-clip-text text-transparent">
                  FiniteX?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We combine creativity, technology, and strategy to deliver exceptional results that exceed expectations.
              </p>
              <ul className="space-y-4">
                {[
                  "Expert team of developers and designers",
                  "Cutting-edge technology stack",
                  "Agile development methodology",
                  "24/7 customer support",
                  "Proven track record of success"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button className="mt-4">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-royal opacity-20 blur-3xl rounded-full"></div>
              <Card className="relative">
                <CardContent className="p-8">
                  <Users className="h-16 w-16 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Client-Centric Approach</h3>
                  <p className="text-muted-foreground mb-6">
                    Your success is our priority. We work closely with you throughout the entire process to ensure your vision becomes reality.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <div className="text-3xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">95%</div>
                      <div className="text-sm text-muted-foreground">Repeat Clients</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-hero text-white border-0 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
            </div>
            <CardContent className="relative z-10 py-16 px-8 text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life with innovative solutions
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="mt-4">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
