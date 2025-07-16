import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const faqData = [
    {
      question: "O que é automação com IA e como pode ajudar meu negócio?",
      answer: "A automação com IA é a combinação de processos automatizados com inteligência artificial para executar tarefas complexas de forma inteligente. Na MugiX, desenvolvemos soluções que não apenas automatizam, mas também aprendem e se adaptam ao seu negócio, aumentando a eficiência operacional, reduzindo custos e liberando sua equipe para atividades estratégicas."
    },
    {
      question: "Quais tipos de processos podem ser automatizados?",
      answer: "Automatizamos uma ampla gama de processos: atendimento ao cliente com chatbots inteligentes, gestão de leads e vendas, processamento de documentos, análise de dados, integração entre sistemas, workflows de aprovação, relatórios automáticos, e muito mais. Cada solução é personalizada para suas necessidades específicas."
    },
    {
      question: "Quanto tempo leva para implementar uma automação?",
      answer: "O tempo varia conforme a complexidade do projeto. Automações simples podem ser implementadas em 1-2 semanas, enquanto projetos mais complexos levam de 4-8 semanas. Fornecemos um cronograma detalhado após o diagnóstico inicial gratuito, sempre priorizando entregas incrementais para você ver resultados rapidamente."
    },
    {
      question: "Preciso ter conhecimento técnico para usar as automações?",
      answer: "Não! Desenvolvemos todas as soluções pensando na facilidade de uso. Nossas automações possuem interfaces intuitivas e fornecemos treinamento completo para sua equipe. Além disso, oferecemos suporte contínuo para garantir que você aproveite ao máximo a tecnologia."
    },
    {
      question: "Como funciona o suporte após a implementação?",
      answer: "Oferecemos suporte técnico contínuo, monitoramento proativo das automações, atualizações regulares e otimizações baseadas no uso real. Nossa equipe está sempre disponível para ajustes, melhorias e expansões conforme seu negócio evolui."
    },
    {
      question: "Qual é o retorno do investimento (ROI) esperado?",
      answer: "Nossos clientes geralmente veem ROI entre 200-500% no primeiro ano. Os benefícios incluem: redução de 60-80% no tempo gasto em tarefas repetitivas, diminuição de erros humanos, aumento na velocidade de resposta ao cliente, e liberação da equipe para atividades de maior valor agregado."
    },
    {
      question: "As automações são seguras e confiáveis?",
      answer: "Sim. Seguimos as melhores práticas de segurança, com criptografia de dados, backups automáticos, controles de acesso e conformidade com LGPD. Todas as automações passam por testes rigorosos antes da implementação e incluem sistemas de monitoramento 24/7."
    },
    {
      question: "Vocês trabalham com empresas de que tamanho?",
      answer: "Atendemos desde pequenas empresas até grandes corporações. Cada solução é dimensionada adequadamente para o porte e necessidades específicas do cliente. Temos pacotes flexíveis que crescem junto com seu negócio."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div 
          ref={headerRef}
          className={`text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 scroll-animate ${headerVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre automação com IA e nossos serviços
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`space-y-4 scroll-animate ${contentVisible ? 'animate-in' : ''}`}
        >
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
              >
                <span className="text-base sm:text-lg font-semibold text-neutral-900 pr-4">
                  {item.question}
                </span>
                {openItem === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                )}
              </button>
              
              {openItem === index && (
                <div className="px-6 pb-4 border-t border-neutral-100">
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed pt-4">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div 
          className={`text-center mt-12 scroll-animate ${contentVisible ? 'animate-in' : ''}`}
        >
          <p className="text-base sm:text-lg text-neutral-600 mb-4">
            Não encontrou sua dúvida? Fale conosco!
          </p>
          <button
            onClick={() => window.open('https://wa.me/556281540306?text=Olá,%20tenho%20uma%20dúvida%20sobre%20automação%20com%20IA', '_blank')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Fazer uma pergunta
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;