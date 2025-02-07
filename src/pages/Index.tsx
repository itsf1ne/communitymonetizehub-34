
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Users, DollarSign, ChartBar, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Erfolgreich!",
        description: "Du wurdest erfolgreich zur Warteliste hinzugefügt!",
      });
      setEmail("");
    }
  };

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20 text-center animate-fade-up">
        <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">
          Willkommen bei Community Hub
        </span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
          Baue & Monetarisiere deine
          <span className="text-primary"> Community</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Verwandle deine Leidenschaft in Profit mit unseren leistungsstarken Community-Building und Monetarisierungs-Tools.
        </p>
        <Button size="lg" className="animate-fade-in" onClick={scrollToWaitlist}>
          Jetzt Starten
        </Button>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Users,
              title: "Community Wachstum",
              description: "Baue und pflege deine Community mit leistungsstarken Engagement-Tools",
            },
            {
              icon: DollarSign,
              title: "Monetarisierung",
              description: "Mehrere Einnahmequellen um dein Ertragspotential zu maximieren",
            },
            {
              icon: ChartBar,
              title: "Analytik",
              description: "Tiefe Einblicke in das Engagement und Wachstum deiner Community",
            },
            {
              icon: Heart,
              title: "Mitglieder Erfolg",
              description: "Tools und Ressourcen um deine Mitglieder engaged und zufrieden zu halten",
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

      {/* Waitlist Section */}
      <section id="waitlist" className="container px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Tritt der Warteliste bei</h2>
          <p className="text-muted-foreground mb-8">
            Sei einer der Ersten, die Zugang zu unserer Platform erhalten.
          </p>
          <form onSubmit={handleWaitlist} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Deine Email-Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="backdrop-blur-sm bg-white/50"
            />
            <Button type="submit">Beitreten</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
