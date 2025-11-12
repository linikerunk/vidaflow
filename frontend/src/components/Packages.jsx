import Section from './Section';
import Card from './Card';
import Button from './Button';

const PackageCard = ({ title, badge, color, features, modules, objectives, includes }) => {
  const colorClasses = {
    gold: {
      badge: 'bg-gold-500',
      border: 'border-gold-200',
      title: 'text-gold-700',
      icon: 'text-gold-500',
    },
    rose: {
      badge: 'bg-rose-500',
      border: 'border-rose-200',
      title: 'text-rose-700',
      icon: 'text-rose-500',
    },
    amber: {
      badge: 'bg-amber-500',
      border: 'border-amber-200',
      title: 'text-amber-700',
      icon: 'text-amber-500',
    },
    gradient: {
      badge: 'bg-gradient-to-r from-gold-500 via-rose-500 to-amber-500',
      border: 'border-gold-300',
      title: 'text-gold-700',
      icon: 'text-gold-500',
    },
  };

  const colors = colorClasses[color] || colorClasses.gold;

  return (
    <Card hover={true} className={`border-2 ${colors.border} h-full flex flex-col`}>
      <div className="flex-grow">
        {badge && (
          <div className="flex justify-center mb-4">
            <span className={`${colors.badge} text-white text-sm font-bold px-4 py-1 rounded-full`}>
              {badge}
            </span>
          </div>
        )}

        <h3 className={`text-2xl md:text-3xl font-bold text-center mb-6 ${colors.title}`}>
          {title}
        </h3>

        {features && (
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">{features}</p>
          </div>
        )}

        {modules && (
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <svg className={`w-5 h-5 ${colors.icon}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              Módulos do Treinamento:
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {modules.map((module, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className={`${colors.icon} mt-1`}>•</span>
                  <span>{module}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {objectives && (
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-3">Objetivos:</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <svg className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {includes && (
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-3">Inclui:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {includes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <svg className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <Button variant={color === 'gradient' ? 'primary' : color} className="w-full">
          Solicitar Proposta
        </Button>
      </div>
    </Card>
  );
};

const Packages = () => {
  const basicModules = [
    'Fatores Psicossociais do Trabalho',
    'Inteligência Emocional no Ambiente de Trabalho',
    'Gestão de Estresse e Prevenção do Burnout Feminino',
    'Comunicação Consciente e Assertiva',
    'Autoestima e Síndrome da Impostora',
    'Equilíbrio entre Vida Pessoal e Profissional',
    'Propósito e Direcionamento Pessoal',
    'Mindset de Crescimento e Aprendizagem Contínua',
    'Relacionamentos Saudáveis e Clima Positivo',
    'Plano Pessoal de Direcionamento (ACD)',
  ];

  return (
    <Section id="pacotes" background="rose" pattern={true}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gray-800 drop-shadow-md">
            Pacotes Disponíveis
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Escolha o programa ideal para sua equipe
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* BASIC */}
          <PackageCard
            title="BASIC"
            badge="Treinamento Online"
            color="gold"
            features="Trilha completa com 10 módulos de desenvolvimento psicossocial, disponível na Plataforma Viva Flow, com conteúdos gravados, exercícios e suporte técnico."
            modules={basicModules}
            objectives={[
              'Atender aos requisitos psicossociais da NR-1',
              'Reduzir o estresse e melhorar o clima organizacional',
              'Promover autoconhecimento e empatia',
              'Fomentar ambientes corporativos mais saudáveis',
            ]}
            includes={[
              '10 módulos gravados com 3 capítulos cada',
              'Materiais em PDF e exercícios práticos',
              'Certificado de conclusão individual',
              'Acesso por 6 meses',
              'Canal de suporte e comunidade Viva Flow',
            ]}
          />

          {/* ADVANCED */}
          <PackageCard
            title="ADVANCED"
            badge="Treinamento + 4 Mentorias"
            color="rose"
            features="Tudo do Basic, com acréscimo de 4 mentorias online via Zoom, conduzidas por mentores Viva Flow. Essas mentorias aprofundam o diálogo sobre saúde emocional e fortalecem vínculos entre as participantes."
            objectives={[
              'Transformar conhecimento em prática coletiva',
              'Desenvolver liderança empática',
              'Fortalecer o senso de pertencimento',
              'Criar acordos de convivência e apoio mútuo',
            ]}
            includes={[
              'Treinamento completo (10 módulos)',
              '4 mentorias coletivas online (até 50 participantes)',
              'Relatório psicossocial da equipe (anônimo)',
              'Canal direto de apoio para RH e liderança',
            ]}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* PREMIUM */}
          <PackageCard
            title="PREMIUM"
            badge="Programa Completo"
            color="amber"
            features="Tudo do ADVANCED, com acréscimo de 4 atendimentos individuais (VIP) por participante. Os atendimentos são realizados via Zoom, com total confidencialidade, conduzidos pela Dra. Jênyce Carla Reginato ou terapeutas credenciadas."
            objectives={[
              'Oferecer acompanhamento personalizado',
              'Prevenir esgotamento emocional',
              'Fortalecer autodesenvolvimento das colaboradoras',
              'Transformação integral e duradoura',
            ]}
            includes={[
              '10 módulos online + 4 mentorias coletivas',
              '4 atendimentos VIP individuais por participante',
              'Sessões: Rapport, Aceitação, Consciência e Direcionamento',
              'Relatório de evolução psicossocial da equipe',
              'Plano de ação para a empresa (90 dias)',
            ]}
          />

          {/* VIP CORPORATIVO */}
          <PackageCard
            title="VIP CORPORATIVO"
            badge="Atendimentos Exclusivos"
            color="gradient"
            features="Pacote flexível de atendimentos 1:1 via Zoom, ideal para líderes, gestoras ou colaboradoras sob alta pressão emocional. Mínimo de 12 atendimentos por contratação, sendo 4 por pessoa."
            objectives={[
              'Suporte emocional individualizado e confidencial',
              'Gestão de alta performance sem esgotamento',
              'Desenvolvimento de liderança consciente',
              'Equilíbrio entre resultados e bem-estar',
            ]}
            includes={[
              'Sessões individuais confidenciais via Zoom',
              'Plano pessoal de direcionamento (ACD)',
              'Profissional credenciado Viva Flow',
              'Acompanhamento corporativo anônimo',
              'Relatório consolidado para empresa',
            ]}
          />
        </div>

        <div className="mt-16 text-center">
          <Card gradient={true} className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gold-700 mb-4">
              Não sabe qual pacote escolher?
            </h3>
            <p className="text-gray-700 mb-6">
              Faça nosso diagnóstico gratuito e receba uma recomendação personalizada baseada nas
              necessidades da sua equipe.
            </p>
            <Button variant="primary" size="lg" onClick={() => document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })}>
              Fazer Diagnóstico Gratuito
            </Button>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Packages;
