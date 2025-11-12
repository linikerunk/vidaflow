import { useCountUp } from '../hooks/useScrollAnimation';
import Section from './Section';
import Card from './Card';
import FloatingElements from './FloatingElements';
import AnimatedSection from './AnimatedSection';
import InteractiveCard from './InteractiveCard';
import jenycePhoto from '../assets/images/jenyce-profile-main.jpeg';
import maeFilhasPhoto from '../assets/images/mae_filhas.jpeg';

const Founder = () => {
  const [yearsRef, yearsCount] = useCountUp(10, 2000);
  const [clientsRef, clientsCount] = useCountUp(500, 2500);
  const [sessionsRef, sessionsCount] = useCountUp(1839, 2500);

  const credentials = [
    { icon: 'BIO', color: 'from-blue-500 to-blue-600', title: 'Biomédica', subtitle: 'Formação Científica' },
    { icon: 'PSI', color: 'from-purple-500 to-purple-600', title: 'Psicanálise', subtitle: 'Certificação Profissional' },
    { icon: 'PNL', color: 'from-indigo-500 to-indigo-600', title: 'PNL & Hipnose', subtitle: 'Master Practitioner' },
    { icon: 'IE', color: 'from-rose-500 to-rose-600', title: 'Int. Emocional', subtitle: 'Especialização' },
    { icon: 'REI', color: 'from-emerald-500 to-emerald-600', title: 'Reiki', subtitle: 'Terapeuta Holística' },
    { icon: 'NEU', color: 'from-cyan-500 to-cyan-600', title: 'Neurociência', subtitle: 'Aplicada ao Comportamento' },
  ];

  return (
    <Section id="idealizadora" background="white" className="relative overflow-hidden">
      <FloatingElements count={8} colors={['gold', 'rose', 'serenity']} />

      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-rose-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título da Seção */}
        <AnimatedSection animation="fade-in-down" delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-gold-100 to-rose-100 text-gray-700 px-6 py-3 rounded-full text-sm font-semibold border border-gold-200">
                Idealizadora da Metodologia
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Dra. Jênyce Carla Reginato
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Biomédica, Terapeuta Integrativa e Criadora da Metodologia Viva Flow
            </p>
          </div>
        </AnimatedSection>

        {/* Card Principal - Layout Premium */}
        <AnimatedSection animation="scale-in" delay={0.2}>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Coluna Esquerda - Foto e Estatísticas */}
            <div className="relative">
              {/* Imagem Principal */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-rose-400 rounded-3xl blur-xl opacity-40"></div>
                <img
                  src={jenycePhoto}
                  alt="Dra. Jênyce Carla Reginato"
                  className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent rounded-3xl"></div>

                {/* Badge Flutuante */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div ref={yearsRef} className="flex-1">
                      <div className="text-2xl font-bold text-gold-600">{yearsCount} Anos</div>
                      <div className="text-sm text-gray-600">de Experiência</div>
                    </div>
                    <div className="w-px h-12 bg-gray-300"></div>
                    <div ref={clientsRef} className="flex-1">
                      <div className="text-2xl font-bold text-rose-600">+{clientsCount}</div>
                      <div className="text-sm text-gray-600">Mulheres Atendidas</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge Flutuante Extra */}
              <div ref={sessionsRef} className="absolute -top-4 -right-4 bg-gradient-to-br from-serenity-500 to-serenity-600 text-white rounded-2xl p-4 shadow-2xl z-20">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">{sessionsCount}+</div>
                  <div className="text-xs opacity-90">Sessões Realizadas</div>
                </div>
              </div>
            </div>

            {/* Coluna Direita - Informações */}
            <div className="space-y-6">
              {/* Citação Destacada */}
              <Card className="bg-gradient-to-br from-gold-50 to-rose-50 border-l-4 border-gold-500">
                <div>
                  <p className="text-lg italic text-gray-700 mb-4 leading-relaxed">
                    "Ajudo mulheres a desbloquear mente e emoções para viverem com leveza e propósito."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-gold-500 to-rose-500"></div>
                    <span className="text-sm font-semibold text-gray-700">Dra. Jênyce Carla Reginato</span>
                  </div>
                </div>
              </Card>

              {/* Missão */}
              <Card className="bg-gradient-to-br from-rose-50 to-white border-l-4 border-rose-500">
                <div>
                  <h3 className="text-sm font-bold text-rose-700 uppercase tracking-wider mb-3">
                    Missão
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Transformar o ambiente corporativo em um espaço de <strong className="text-rose-700">acolhimento e desenvolvimento emocional</strong>, onde cada mulher possa reconhecer seu valor, expressar suas emoções e construir seu propósito com autenticidade.
                  </p>
                </div>
              </Card>

              {/* Abordagem */}
              <Card className="bg-gradient-to-br from-serenity-50 to-white border-l-4 border-serenity-500">
                <div>
                  <h3 className="text-sm font-bold text-serenity-700 uppercase tracking-wider mb-3">
                    Abordagem Integrativa
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Combinação única de <strong className="text-serenity-700">ciência</strong> e
                    <strong className="text-gold-700"> espiritualidade</strong>, unindo psicanálise,
                    neurociência, PNL e terapias holísticas para resultados profundos e duradouros.
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-serenity-500 to-gold-500"></div>
                    <div className="flex flex-wrap gap-2">
                      {['Corpo', 'Mente', 'Emoção', 'Espírito'].map((item, idx) => (
                        <span
                          key={idx}
                          className="text-sm font-semibold text-gray-600"
                        >
                          {item}{idx < 3 ? ' •' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Credenciais - Grid de Certificações */}
        <AnimatedSection animation="fade-in-up" delay={0.3}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Formações & Especializações
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {credentials.map((cred, idx) => (
                <Card key={idx} className="text-center hover:shadow-xl transition-all h-full group">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${cred.color} flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform`}>
                    {cred.icon}
                  </div>
                  <div className="text-sm font-bold text-gray-800 mb-1">{cred.title}</div>
                  <div className="text-xs text-gray-600">{cred.subtitle}</div>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* História Inspiradora - Card Premium */}
        <AnimatedSection animation="fade-in-up" delay={0.4}>
          <Card className="bg-gradient-to-br from-white via-rose-50/30 to-gold-50/30">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-300/20 to-gold-300/20 rounded-3xl blur-2xl"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white">
                    <img
                      src={maeFilhasPhoto}
                      alt="Jênyce com suas filhas"
                      className="w-full h-[400px] object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                        A Inspiração
                      </h3>
                      <p className="text-sm leading-relaxed drop-shadow-md">
                        Uma história de amor, fé e propósito que transformou desafios em missão de vida
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 space-y-5">
                <div>
                  <h4 className="text-sm font-bold text-rose-600 uppercase tracking-wider mb-3">
                    Uma Jornada de Amor
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong className="text-rose-700">Mãe de duas filhas</strong>, Jênyce enfrentou
                    o diagnóstico de <strong>Talassemia Major</strong> em Maria Vitória. Anos de
                    tratamento trouxeram não apenas desafios, mas também <strong className="text-gold-700">milagres
                    e descobertas profundas</strong>.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">
                  Essa jornada transformou sua visão de mundo e revelou um propósito:
                  <strong className="text-serenity-700"> levar esperança e equilíbrio emocional</strong> a
                  mulheres que enfrentam batalhas internas.
                </p>

                <div className="bg-gradient-to-r from-gold-50 to-rose-50 rounded-2xl p-6 shadow-sm">
                  <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                    O Viva Flow nasce dessa história de amor e fé, convidando cada mulher a
                    descobrir seu próprio fluxo de vida.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>

        {/* CTA Final */}
        <AnimatedSection animation="scale-in" delay={0.5}>
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-br from-white to-gold-50 border border-gray-200">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Inicie Sua Jornada de Transformação
                </h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Conheça os programas desenvolvidos especialmente para mulheres que buscam
                  equilíbrio, propósito e bem-estar profissional e pessoal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => document.getElementById('pacotes')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Ver Programas
                  </button>
                  <button
                    onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Falar com a Dra. Jênyce
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
};

export default Founder;
