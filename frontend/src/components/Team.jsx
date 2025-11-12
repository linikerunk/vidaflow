import Section from './Section';
import Card from './Card';

const TeamMember = ({ name, role, description, initials, color }) => {
  const colorClasses = {
    gold: 'from-gold-400 to-gold-600',
    rose: 'from-rose-400 to-rose-600',
    amber: 'from-amber-400 to-amber-600',
  };

  return (
    <Card hover={true} className="h-full">
      <div className="text-center mb-4">
        <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${colorClasses[color]} rounded-full flex items-center justify-center shadow-xl mb-4`}>
          <span className="text-3xl font-bold text-white">{initials}</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-lg font-semibold text-gold-600 mb-4">{role}</p>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </Card>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: 'Dra. Jênyce Carla Reginato',
      role: 'Biomédica e Terapeuta Integrativa/Holística',
      initials: 'JC',
      color: 'gold',
      description: 'Criadora da Metodologia Viva Flow. Com formação em Psicanálise, PNL, Hipnose, Reiki, Radiestesia, Apometria, Inteligência Emocional e Neurociência, Jênyce atua há mais de 10 anos como terapeuta, mentora e palestrante. É responsável pelo conteúdo técnico, treinamentos e atendimentos VIP do Viva Flow.',
    },
    {
      name: 'Valério Garcia Brisot',
      role: 'Consultor e Facilitador em Gestão e Desenvolvimento Humano',
      initials: 'VB',
      color: 'amber',
      description: 'Mais de 30 anos de experiência em sistemas de gestão, qualidade e liderança, atuando em mais de 1.700 empresas no Brasil e no exterior. No Viva Flow, é responsável pela estrutura organizacional, integração com normas ISO e regulamentadoras, bem como mensuração de resultados psicossociais.',
    },
    {
      name: 'Osmar Lazarini',
      role: 'Estrategista em Marketing e Gestão Organizacional',
      initials: 'OL',
      color: 'rose',
      description: '30 anos de trajetória em marketing, liderança e expansão de negócios. Responsável pelo posicionamento estratégico, marketing institucional e relacionamento corporativo do Viva Flow, conectando propósito e resultados.',
    },
  ];

  return (
    <Section id="equipe" background="amber">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gray-800 drop-shadow-md">
            Equipe Viva Flow
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Profissionais dedicados à transformação psicossocial feminina
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <TeamMember key={idx} {...member} />
          ))}
        </div>

        <div className="mt-16">
          <Card gradient={true} className="text-center">
            <h3 className="text-2xl font-bold text-gold-700 mb-4">
              Quer fazer parte da equipe Viva Flow?
            </h3>
            <p className="text-gray-700 mb-6">
              Estamos sempre em busca de terapeutas e facilitadores comprometidos com a
              transformação emocional e o bem-estar feminino nas organizações.
            </p>
            <a
              href="#contato"
              className="inline-block bg-gradient-to-r from-gold-500 to-rose-500 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Entre em Contato
            </a>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Team;
