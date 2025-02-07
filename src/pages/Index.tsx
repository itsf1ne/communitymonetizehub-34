
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Users, DollarSign, ChartBar, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20 text-center animate-fade-up">
        <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">
          Welcome to Community Hub
        </span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
          Build & Monetize Your
          <span className="text-primary"> Community</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Transform your passion into profit with our powerful community building and monetization tools.
        </p>
        <Button size="lg" className="animate-fade-in" onClick={() => toast({ title: "Getting Started!", description: "Welcome aboard! Let's build something amazing together." })}>
          Get Started
        </Button>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Users,
              title: "Community Growth",
              description: "Build and nurture your community with powerful engagement tools",
            },
            {
              icon: DollarSign,
              title: "Monetization",
              description: "Multiple revenue streams to maximize your earning potential",
            },
            {
              icon: ChartBar,
              title: "Analytics",
              description: "Deep insights into your community's engagement and growth",
            },
            {
              icon: Heart,
              title: "Member Success",
              description: "Tools and resources to keep your members engaged and happy",
            },
          ].map((feature, index) => (
            <Card key={index} className="p-6 backdrop-blur-sm bg-white/50 hover:bg-white/80 transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Get the latest community building tips and strategies delivered to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="backdrop-blur-sm bg-white/50"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
