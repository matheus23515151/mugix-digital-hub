import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Phone, Mail, Building, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Agendamento = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    cargo: "",
    desafio: "",
    horario: "",
    data: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatar mensagem para WhatsApp
    const message = `🏢 *Nova Solicitação de Reunião - MugiX*

👤 *Dados do Cliente:*
• Nome: ${formData.nome}
• Email: ${formData.email}
• Telefone: ${formData.telefone}
• Empresa: ${formData.empresa}
• Cargo: ${formData.cargo}

🎯 *Desafio Principal:*
${formData.desafio}

⏰ *Horário Preferido:*
• Data: ${formData.data}
• Horário: ${formData.horario}

Solicitação enviada via site MugiX`;

    const whatsappUrl = `https://wa.me/556281540306?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Solicitação enviada!",
      description: "Você será redirecionado para o WhatsApp para confirmar o agendamento.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900">
              Escolha o melhor horário para 
              <span className="text-primary block">conversar com a MugiX</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Reserve 30 minutos para descobrir como podemos automatizar seus processos, 
              eliminar tarefas repetitivas e multiplicar seus resultados.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-neutral-900 mb-2">Análise Personalizada</h3>
                <p className="text-sm text-neutral-600">Avaliamos seu negócio e identificamos oportunidades específicas</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-neutral-900 mb-2">30 Minutos</h3>
                <p className="text-sm text-neutral-600">Tempo suficiente para entender seus desafios e apresentar soluções</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <User className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-neutral-900 mb-2">Sem Compromisso</h3>
                <p className="text-sm text-neutral-600">Consultoria gratuita, sem pressão comercial</p>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Dados para Agendamento
              </CardTitle>
              <CardDescription>
                Preencha os dados abaixo e entraremos em contato para confirmar o melhor horário
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome completo *</Label>
                    <Input
                      id="nome"
                      value={formData.nome}
                      onChange={(e) => handleChange("nome", e.target.value)}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                    <Input
                      id="telefone"
                      value={formData.telefone}
                      onChange={(e) => handleChange("telefone", e.target.value)}
                      placeholder="(XX) XXXXX-XXXX"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Nome da Empresa</Label>
                    <Input
                      id="empresa"
                      value={formData.empresa}
                      onChange={(e) => handleChange("empresa", e.target.value)}
                      placeholder="Sua empresa"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cargo">Seu cargo na empresa</Label>
                  <Input
                    id="cargo"
                    value={formData.cargo}
                    onChange={(e) => handleChange("cargo", e.target.value)}
                    placeholder="Ex: CEO, Diretor, Gerente..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="desafio">Principal desafio do seu negócio *</Label>
                  <Textarea
                    id="desafio"
                    value={formData.desafio}
                    onChange={(e) => handleChange("desafio", e.target.value)}
                    placeholder="Descreva o principal problema que enfrenta: tarefas repetitivas, atendimento demorado, processos manuais, dificuldade para escalar..."
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="data">Data preferida</Label>
                    <Input
                      id="data"
                      type="date"
                      value={formData.data}
                      onChange={(e) => handleChange("data", e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="horario">Horário preferido</Label>
                    <Select onValueChange={(value) => handleChange("horario", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um horário" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00 - 09:30</SelectItem>
                        <SelectItem value="10:00">10:00 - 10:30</SelectItem>
                        <SelectItem value="11:00">11:00 - 11:30</SelectItem>
                        <SelectItem value="14:00">14:00 - 14:30</SelectItem>
                        <SelectItem value="15:00">15:00 - 15:30</SelectItem>
                        <SelectItem value="16:00">16:00 - 16:30</SelectItem>
                        <SelectItem value="17:00">17:00 - 17:30</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-gradient-subtle p-6 rounded-xl border border-neutral-200">
                  <h3 className="font-semibold text-neutral-900 mb-2">O que acontece depois?</h3>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Nossa equipe entrará em contato em até 2 horas
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Confirmaremos o melhor horário para ambos
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Faremos uma análise personalizada do seu negócio
                    </li>
                  </ul>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={!formData.nome || !formData.email || !formData.telefone || !formData.desafio}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Solicitar Agendamento
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agendamento;