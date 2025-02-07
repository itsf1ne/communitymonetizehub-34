
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Users, DollarSign, ChartBar, Heart, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      // Add console.log to debug the request
      console.log('Attempting to insert email:', email);
      
      const { error } = await supabase
        .from('waitlist')
        .insert([{ 
          email, 
          created_at: new Date().toISOString() 
        }]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      toast({
        title: "Erfolgreich!",
        description: "Du wurdest erfolgreich zur Warteliste hinzugefügt!",
      });
      setEmail("");
    } catch (error) {
      console.error('Error details:', error);
      toast({
        title: "Fehler",
        description: "Ein Fehler ist aufgetreten. Bitte versuche es später erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-purple-50 to-white">
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20 text-center animate-fade-up relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiM4QjVDRjYiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNkb3RzKSIvPjwvc3ZnPg==')] opacity-40"></div>
        <div className="relative">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6 hover:bg-primary/20 transition-colors duration-300">
            <Sparkles className="w-4 h-4" />
            Willkommen bei Community Hub
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Baue & Monetarisiere deine
            <span className="block mt-2">Community</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Verwandle deine Leidenschaft in Profit mit unseren leistungsstarken Community-Building und Monetarisierungs-Tools.
          </p>
          <Button 
            size="lg" 
            className="animate-bounce-slow bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={scrollToWaitlist}
          >
            Jetzt Starten
          </Button>
        </div>
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
            <Card 
              key={index} 
              className="group p-8 backdrop-blur-sm bg-white/70 hover:bg-white/90 transition-all duration-500 animate-fade-up border-none shadow-lg hover:shadow-xl rounded-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="container px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto backdrop-blur-md bg-white/50 p-10 rounded-3xl shadow-lg">
          <Star className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Tritt der Warteliste bei
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Sei einer der Ersten, die Zugang zu unserer Platform erhalten.
          </p>
          <form onSubmit={handleWaitlist} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Deine Email-Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="backdrop-blur-sm bg-white/50 border-2 border-primary/20 focus:border-primary/40 transition-colors duration-300"
              disabled={isSubmitting}
            />
            <Button 
              type="submit"
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Wird gespeichert...' : 'Beitreten'}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
