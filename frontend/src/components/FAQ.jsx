import { useState } from 'react';
import Section from './Section';
import Card from './Card';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-4 flex justify-between items-center text-left hover:text-gold-600 transition-colors"
      >
        <span className="font-semibold text-gray-800 pr-4">{question}</span>
        <svg
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-gold-500`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Qual pacote é ideal para minha empresa?',
      answer: 'Faça nosso diagnóstico gratuito! Ele avalia 4 domínios e recomenda o pacote ideal para sua equipe.',
    },
    {
      question: 'Os atendimentos são confidenciais?',
      answer: 'Sim! Atendimentos VIP são 100% confidenciais. Relatórios corporativos são anônimos e consolidados.',
    },
    {
      question: 'Como funciona a plataforma online?',
      answer: 'Acesso 24/7 aos 10 módulos gravados, materiais em PDF e certificado. Válido por 6 meses.',
    },
    {
      question: 'O programa substitui acompanhamento clínico?',
      answer: 'Não. Atuamos em desenvolvimento emocional corporativo. Casos clínicos devem buscar profissionais especializados.',
    },
    {
      question: 'O programa está alinhado com a NR-1?',
      answer: 'Sim! Desenvolvido considerando todos os requisitos psicossociais da NR-1 da CLT.',
    },
  ];

  return (
    <Section id="faq" background="gold" pattern={true}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gray-800 drop-shadow-md">
            Perguntas Frequentes
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Tire suas dúvidas sobre o Programa Viva Flow
        </p>

        <Card gradient={true}>
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </Card>

        <div className="mt-8 text-center">
          <Card className="bg-gradient-to-r from-rose-50 to-gold-50">
            <p className="text-gray-700 mb-4">
              Não encontrou a resposta que procurava?
            </p>
            <a
              href="#contato"
              className="inline-block bg-gradient-to-r from-gold-500 to-rose-500 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Entre em Contato Conosco
            </a>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
