import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, TrendingUp, Users, Palette, MessageSquare, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Automação de Processos",
      description: "Otimize fluxos de trabalho e reduza tarefas manuais.",
    },
    {
      icon: TrendingUp,
      title: "Tráfego Pago",
      description: "Campanhas estratégicas para gerar leads qualificados.",
    },
    {
      icon: Users,
      title: "CRM e Gestão",
      description: "Organize e converta seus leads com CRM personalizado.",
    },
    {
      icon: Palette,
      title: "Design Estratégico",
      description: "Design que converte e fortalece sua marca.",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Marketing",
      description: "Alcance sua audiência de forma direta e pessoal.",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nossas Soluções
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 text-white transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <Icon className="w-10 h-10 mb-4 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{service.description}</p>
                  <a href="#" className="flex items-center mt-4 text-primary hover:underline">
                    Saiba Mais <ArrowRight className="ml-2" />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;