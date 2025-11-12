import { useState } from 'react';
import Section from './Section';
import Card from './Card';
import Button from './Button';

const Diagnostic = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const questions = [
    // Aceitação (A) - 5 questões
    {
      id: 'a1',
      domain: 'A',
      question: 'As colaboradoras sentem-se seguras para compartilhar dificuldades emocionais no ambiente de trabalho?',
      options: [
        { text: 'Sim, frequentemente', points: 5 },
        { text: 'Às vezes', points: 3 },
        { text: 'Raramente', points: 1 },
        { text: 'Nunca', points: 0 },
      ],
    },
    {
      id: 'a2',
      domain: 'A',
      question: 'A liderança demonstra empatia e acolhimento em relação às questões emocionais das colaboradoras?',
      options: [
        { text: 'Sempre', points: 5 },
        { text: 'Frequentemente', points: 3 },
        { text: 'Raramente', points: 1 },
        { text: 'Nunca', points: 0 },
      ],
    },
    {
      id: 'a3',
      domain: 'A',
      question: 'Existe um clima de respeito e não-julgamento na equipe feminina?',
      options: [
        { text: 'Sim, muito positivo', points: 5 },
        { text: 'Moderado', points: 3 },
        { text: 'Pouco positivo', points: 1 },
        { text: 'Ambiente tenso', points: 0 },
      ],
    },
    {
      id: 'a4',
      domain: 'A',
      question: 'As colaboradoras sentem que suas vulnerabilidades são aceitas sem retaliação?',
      options: [
        { text: 'Sim, totalmente', points: 5 },
        { text: 'Parcialmente', points: 3 },
        { text: 'Pouco', points: 1 },
        { text: 'Não', points: 0 },
      ],
    },
    {
      id: 'a5',
      domain: 'A',
      question: 'A empresa oferece canais de escuta e acolhimento emocional?',
      options: [
        { text: 'Sim, múltiplos canais', points: 5 },
        { text: 'Alguns canais', points: 3 },
        { text: 'Poucos ou informais', points: 1 },
        { text: 'Nenhum', points: 0 },
      ],
    },

    // Consciência (C) - 5 questões
    {
      id: 'c1',
      domain: 'C',
      question: 'As colaboradoras reconhecem seus próprios gatilhos emocionais?',
      options: [
        { text: 'Sim, com clareza', points: 5 },
        { text: 'Parcialmente', points: 3 },
        { text: 'Pouco', points: 1 },
        { text: 'Não', points: 0 },
      ],
    },
    {
      id: 'c2',
      domain: 'C',
      question: 'Há programas de desenvolvimento emocional ou treinamentos de inteligência emocional?',
      options: [
        { text: 'Sim, regulares', points: 5 },
        { text: 'Ocasionais', points: 3 },
        { text: 'Raros', points: 1 },
        { text: 'Nenhum', points: 0 },
      ],
    },
    {
      id: 'c3',
      domain: 'C',
      question: 'As lideranças conseguem identificar sinais de desgaste emocional na equipe?',
      options: [
        { text: 'Sim, proativamente', points: 5 },
        { text: 'Às vezes', points: 3 },
        { text: 'Raramente', points: 1 },
        { text: 'Não', points: 0 },
      ],
    },
    {
      id: 'c4',
      domain: 'C',
      question: 'As colaboradoras têm clareza sobre como suas emoções impactam seu desempenho?',
      options: [
        { text: 'Sim, muito conscientes', points: 5 },
        { text: 'Moderadamente', points: 3 },
        { text: 'Pouco conscientes', points: 1 },
        { text: 'Não têm consciência', points: 0 },
      ],
    },
    {
      id: 'c5',
      domain: 'C',
      question: 'Existe feedback contínuo sobre bem-estar e clima organizacional?',
      options: [
        { text: 'Sim, regular e estruturado', points: 5 },
        { text: 'Ocasional', points: 3 },
        { text: 'Raro', points: 1 },
        { text: 'Não existe', points: 0 },
      ],
    },

    // Direcionamento (D) - 5 questões
    {
      id: 'd1',
      domain: 'D',
      question: 'As colaboradoras têm clareza sobre seus propósitos pessoais e profissionais?',
      options: [
        { text: 'Sim, muito clara', points: 5 },
        { text: 'Moderada', points: 3 },
        { text: 'Pouca clareza', points: 1 },
        { text: 'Nenhuma clareza', points: 0 },
      ],
    },
    {
      id: 'd2',
      domain: 'D',
      question: 'Há planos de desenvolvimento individual (PDI) focados também em bem-estar?',
      options: [
        { text: 'Sim, bem estruturados', points: 5 },
        { text: 'Parciais', points: 3 },
        { text: 'Básicos', points: 1 },
        { text: 'Não existem', points: 0 },
      ],
    },
    {
      id: 'd3',
      domain: 'D',
      question: 'As colaboradoras conseguem transformar aprendizados em mudanças práticas?',
      options: [
        { text: 'Sim, frequentemente', points: 5 },
        { text: 'Às vezes', points: 3 },
        { text: 'Raramente', points: 1 },
        { text: 'Não', points: 0 },
      ],
    },
    {
      id: 'd4',
      domain: 'D',
      question: 'Existe apoio para que as colaboradoras estabeleçam e alcancem metas de equilíbrio pessoal?',
      options: [
        { text: 'Sim, forte apoio', points: 5 },
        { text: 'Algum apoio', points: 3 },
        { text: 'Pouco apoio', points: 1 },
        { text: 'Nenhum apoio', points: 0 },
      ],
    },
    {
      id: 'd5',
      domain: 'D',
      question: 'As colaboradoras sentem que seu trabalho está alinhado com seu propósito de vida?',
      options: [
        { text: 'Sim, muito alinhado', points: 5 },
        { text: 'Moderadamente', points: 3 },
        { text: 'Pouco alinhado', points: 1 },
        { text: 'Não alinhado', points: 0 },
      ],
    },

    // Riscos Psicossociais (P) - 5 questões
    {
      id: 'p1',
      domain: 'P',
      question: 'Há sinais de burnout ou esgotamento emocional na equipe?',
      options: [
        { text: 'Não, nenhum sinal', points: 5 },
        { text: 'Poucos casos', points: 3 },
        { text: 'Alguns casos', points: 1 },
        { text: 'Muitos casos', points: 0 },
      ],
    },
    {
      id: 'p2',
      domain: 'P',
      question: 'O nível de conflitos interpessoais na equipe feminina é:',
      options: [
        { text: 'Muito baixo', points: 5 },
        { text: 'Moderado', points: 3 },
        { text: 'Alto', points: 1 },
        { text: 'Muito alto/crítico', points: 0 },
      ],
    },
    {
      id: 'p3',
      domain: 'P',
      question: 'As colaboradoras sentem sobrecarga de trabalho?',
      options: [
        { text: 'Não, carga equilibrada', points: 5 },
        { text: 'Ocasionalmente', points: 3 },
        { text: 'Frequentemente', points: 1 },
        { text: 'Constantemente', points: 0 },
      ],
    },
    {
      id: 'p4',
      domain: 'P',
      question: 'Há casos de absenteísmo ou intenção de desligamento relacionados a questões emocionais?',
      options: [
        { text: 'Não', points: 5 },
        { text: 'Poucos casos', points: 3 },
        { text: 'Alguns casos', points: 1 },
        { text: 'Muitos casos', points: 0 },
      ],
    },
    {
      id: 'p5',
      domain: 'P',
      question: 'A empresa atende aos requisitos psicossociais da NR-1 da CLT?',
      options: [
        { text: 'Sim, plenamente', points: 5 },
        { text: 'Parcialmente', points: 3 },
        { text: 'Em implementação', points: 1 },
        { text: 'Não atende', points: 0 },
      ],
    },
  ];

  const handleAnswer = (points) => {
    const newAnswers = { ...answers, [questions[currentStep].id]: points };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    const total = Object.values(finalAnswers).reduce((sum, val) => sum + val, 0);
    const maxPoints = questions.length * 5; // 20 questões × 5 pontos = 100
    const percentage = (total / maxPoints) * 100;

    let level, package_name, analysis, color;

    if (percentage >= 81) {
      level = 'Fluidez Inicial';
      package_name = 'BASIC';
      color = 'gold';
      analysis = 'A empresa demonstra alto equilíbrio emocional, com boa aceitação de vulnerabilidades, empatia nas lideranças e políticas consistentes de bem-estar. O pacote Basic é ideal para manutenção do equilíbrio e fortalecimento da cultura emocional positiva.';
    } else if (percentage >= 61) {
      level = 'Expansão Consciente';
      package_name = 'ADVANCED';
      color = 'rose';
      analysis = 'Há boa consciência emocional e abertura para evolução. Pequenas lacunas de comunicação e direcionamento ainda existem. O pacote Advanced é recomendado para desenvolver empatia, propósito e integração entre as colaboradoras através de mentorias coletivas.';
    } else if (percentage >= 41) {
      level = 'Reestruturação Emocional';
      package_name = 'PREMIUM';
      color = 'amber';
      analysis = 'O ambiente apresenta sinais de desgaste emocional, sobrecarga e conflitos latentes. É necessário um plano de suporte individual e coletivo para reequilibrar as relações e reduzir riscos psicossociais através do pacote Premium com atendimentos VIP.';
    } else {
      level = 'Crise Psicossocial';
      package_name = 'VIP CORPORATIVO';
      color = 'gradient';
      analysis = 'A equipe apresenta nível crítico de sofrimento emocional, com sinais de burnout, assédio ou vulnerabilidade acentuada. A intervenção deve ser imediata e personalizada através de atendimentos individuais exclusivos.';
    }

    setResult({
      score: Math.round(percentage),
      level,
      package: package_name,
      analysis,
      color,
    });
  };

  const resetDiagnostic = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  const progressPercentage = ((currentStep + 1) / questions.length) * 100;

  return (
    <Section id="diagnostico" background="amber" pattern={true}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gray-800 drop-shadow-md">
            Diagnóstico Gratuito
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Descubra o nível psicossocial da sua equipe e o pacote ideal
        </p>

        {!result ? (
          <Card gradient={true}>
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progresso</span>
                <span>{currentStep + 1} de {questions.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-amber-500 to-gold-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <div className="text-sm text-gold-600 font-semibold mb-2">
                Domínio: {questions[currentStep].domain === 'A' ? 'Aceitação' : questions[currentStep].domain === 'C' ? 'Consciência' : questions[currentStep].domain === 'D' ? 'Direcionamento' : 'Riscos Psicossociais'}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                {questions[currentStep].question}
              </h3>

              <div className="space-y-3">
                {questions[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.points)}
                    className="w-full text-left p-4 rounded-xl bg-white border-2 border-gray-200 hover:border-gold-400 hover:bg-gold-50 transition-all duration-200 transform hover:scale-102"
                  >
                    <span className="text-gray-700 font-medium">{option.text}</span>
                  </button>
                ))}
              </div>
            </div>

            {currentStep > 0 && (
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-gold-600 hover:text-gold-700 font-semibold flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Voltar
                </button>
              </div>
            )}
          </Card>
        ) : (
          <Card gradient={true}>
            <div className="text-center mb-8">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-gold-500 to-amber-500 text-white rounded-full font-bold text-lg mb-4">
                Pontuação: {result.score}/100
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {result.level}
              </h3>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {result.analysis}
              </p>
            </div>

            <div className="bg-gradient-to-r from-gold-100 to-rose-100 rounded-2xl p-6 mb-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">
                Pacote Recomendado:
              </h4>
              <div className="text-center">
                <span className="text-3xl font-bold text-gold-600">
                  {result.package}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="flex-1" onClick={() => document.getElementById('pacotes')?.scrollIntoView({ behavior: 'smooth' })}>
                Ver Detalhes do Pacote
              </Button>
              <Button variant="outline" className="flex-1" onClick={resetDiagnostic}>
                Refazer Diagnóstico
              </Button>
            </div>
          </Card>
        )}
      </div>
    </Section>
  );
};

export default Diagnostic;
