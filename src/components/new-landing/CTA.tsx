import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pronto para Transformar seu Negócio?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Agende uma conversa gratuita e descubra o potencial da automação.
        </p>
        <Button size="lg" variant="secondary">
          Fale com um Especialista <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default CTA;