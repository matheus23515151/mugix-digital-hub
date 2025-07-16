import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Bot, Zap, Target, Clock } from "lucide-react";

const AutomationQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      question: "Quanto tempo sua equipe gasta em tarefas repetitivas por dia?",
      options: ["Menos de 1 hora", "1-3 horas", "3-6 horas", "Mais de 6 horas"],
      icon: Clock
    },
    {
      question: "Qual área do seu negócio precisa de mais agilidade?",
      options: ["Atendimento ao cliente", "Vendas e follow-up", "Marketing", "Processos internos"],
      icon: Target
    },
    {
      question: "Como você classifica sua gestão de leads atualmente?",
      options: ["Excelente", "Boa", "Regular", "Precisa melhorar muito"],
      icon: Bot
    }
  ];

  const automationSuggestions = {
    "Menos de 1 hora": "Otimização de processos pontuais",
    "1-3 horas": "Automação básica de workflows",
    "3-6 horas": "Automação completa de processos",
    "Mais de 6 horas": "Transformação digital completa",
    "Atendimento ao cliente": "Chatbots e CRM automatizado",
    "Vendas e follow-up": "Funil de vendas automatizado",
    "Marketing": "Campanhas e nutrição automatizada",
    "Processos internos": "Workflows e integrações"
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const getCurrentIcon = () => {
    const IconComponent = questions[currentQuestion].icon;
    return <IconComponent className="w-8 h-8 text-primary" />;
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900">
              Descubra seu <span className="text-primary">Potencial de Automação</span>
            </h2>
            <p className="text-xl text-neutral-600">
              Responda 3 perguntas rápidas e veja como podemos transformar seu negócio
            </p>
          </div>

          <Card className="max-w-2xl mx-auto border-2 border-primary/20 shadow-xl animate-scale-in">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-neutral-600">
                    <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
                    <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Question */}
                <div className="text-center space-y-4">
                  <div className="flex justify-center animate-float">
                    {getCurrentIcon()}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {questions[currentQuestion].question}
                  </h3>
                </div>

                {/* Options */}
                <div className="grid gap-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className={`p-4 h-auto text-left justify-start hover-scale transition-all duration-300 ${
                        answers[currentQuestion] === option 
                          ? 'border-primary bg-primary/10 text-primary' 
                          : ''
                      } stagger-${index + 1} animate-fade-in-up`}
                      onClick={() => handleAnswer(option)}
                    >
                      <div className="w-4 h-4 border-2 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                        {answers[currentQuestion] === option && (
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        )}
                      </div>
                      {option}
                    </Button>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex justify-between pt-4">
                  <Button
                    variant="ghost"
                    onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                    disabled={currentQuestion === 0}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Anterior
                  </Button>

                  {currentQuestion === questions.length - 1 && answers[currentQuestion] && (
                    <Button variant="cta" className="flex items-center gap-2">
                      Ver Recomendações
                      <Zap className="w-4 h-4" />
                    </Button>
                  )}

                  <Button
                    variant="ghost"
                    onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
                    disabled={currentQuestion === questions.length - 1 || !answers[currentQuestion]}
                    className="flex items-center gap-2"
                  >
                    Próxima
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Preview */}
          {answers.length > 0 && (
            <div className="mt-8 grid md:grid-cols-2 gap-4 animate-fade-in-up">
              {answers.map((answer, index) => (
                <Card key={index} className="p-4 bg-primary/5 border-primary/20">
                  <div className="text-sm text-neutral-600 mb-1">
                    {questions[index].question}
                  </div>
                  <div className="font-medium text-neutral-900">{answer}</div>
                  <div className="text-sm text-primary mt-2">
                    💡 {automationSuggestions[answer] || "Solução personalizada"}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AutomationQuiz;