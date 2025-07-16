import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const StrategicConversation = () => {
  const handleScheduleClick = () => {
    // Aqui você pode integrar com Calendly ou sistema de agendamento
    window.open("https://calendly.com/mugix", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Vamos desenhar uma estratégia para você?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            O primeiro passo é entendermos o seu negócio. Agende uma conversa inicial para mapearmos suas necessidades e descobrirmos como podemos te ajudar a alcançar seus objetivos. Receba um diagnóstico prático e recomendações personalizadas sem compromisso.
          </p>

          <div className="inline-block">
            <Button
              onClick={handleScheduleClick}
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Agendar Reunião
            </Button>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            ✓ Diagnóstico gratuito &nbsp;•&nbsp; ✓ Sem compromisso &nbsp;•&nbsp; ✓ Recomendações personalizadas
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicConversation;