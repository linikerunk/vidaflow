import { useCountUp } from '../hooks/useScrollAnimation';
import Button from './Button';
import Section from './Section';
import FloatingElements from './FloatingElements';
import AnimatedSection from './AnimatedSection';
import logo from '../assets/images/logo.png';
import teamWomen from '../assets/images/team-women.jpeg';
import jenyceProfile from '../assets/images/jenyce-profile-main.jpeg';

const Hero = () => {
  const [companiesRef, companiesCount] = useCountUp(150, 2000);
  const [womenRef, womenCount] = useCountUp(500, 2500);
  const [satisfactionRef, satisfactionCount] = useCountUp(98, 2000);

  return (
    <Section background="gradient" pattern={true} className="min-h-screen flex items-center relative overflow-hidden">
      <FloatingElements count={15} colors={['gold', 'rose', 'serenity']} />

      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-serenity-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Conteúdo Esquerdo */}
        <AnimatedSection animation="fade-in-left" delay={0.2}>
          <div className="text-center lg:text-left space-y-6">
            {/* Logo com Badge */}
            <div className="flex justify-center lg:justify-start items-center gap-4 mb-4">
              <div className="relative">
                <img
                  src={logo}
                  alt="Viva Flow"
                  className="h-24 md:h-32 hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                />
                <div className="absolute -top-2 -right-2 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                  NR-1
                </div>
              </div>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Um novo <span className="text-gold-600 relative inline-block">
                olhar
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold-400"/>
                </svg>
              </span> para a <span className="text-rose-600">vida!</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
              Programa de qualidade <strong className="text-gold-700">psicossocial</strong> para mulheres trabalhadoras e empreendedoras, 100% alinhado à <strong className="text-rose-700">NR-1</strong>.
            </p>

            {/* Card Destaque */}
            <div className="relative bg-gradient-to-br from-white to-gold-50 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-lg md:text-xl font-semibold text-gray-800">
                Cuidar da mente, equilibrar emoções e direcionar propósitos femininos
              </p>
            </div>

            {/* Estatísticas Animadas */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div ref={companiesRef} className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl md:text-4xl font-bold text-gold-600">{companiesCount}+</div>
                <div className="text-sm text-gray-600 font-medium">Empresas Impactadas</div>
              </div>
              <div ref={womenRef} className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl md:text-4xl font-bold text-rose-600">{womenCount}+</div>
                <div className="text-sm text-gray-600 font-medium">Mulheres Transformadas</div>
              </div>
              <div ref={satisfactionRef} className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl md:text-4xl font-bold text-serenity-600">{satisfactionCount}%</div>
                <div className="text-sm text-gray-600 font-medium">Satisfação</div>
              </div>
            </div>

            {/* Botões CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Diagnóstico Gratuito</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => document.getElementById('pacotes')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Conheça os Pacotes</span>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-rose-400 border-2 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <div className="font-bold text-gold-700">500+ mulheres</div>
                <div className="text-xs">já transformaram suas vidas</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Lado Direito - Visual Rico com Imagens Sobrepostas */}
        <AnimatedSection animation="fade-in-right" delay={0.4}>
          <div className="relative hidden lg:block h-[600px]">
            {/* Container principal com perspectiva */}
            <div className="relative w-full h-full" style={{ perspective: '1000px' }}>

              {/* Imagem de fundo - Team Women */}
              <div className="absolute top-0 right-0 w-[450px] h-[500px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 hover:rotate-2">
                <img
                  src={teamWomen}
                  alt="Equipe de Mulheres Empoderadas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gold-600/20 via-transparent to-transparent"></div>
              </div>

              {/* Card flutuante - Jênyce Profile */}
              <div className="absolute top-20 -left-10 w-64 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-110 transition-all duration-500 hover:-rotate-3 z-20 animate-float">
                <img
                  src={jenyceProfile}
                  alt="Dra. Jênyce Carla Reginato"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-600/20 via-transparent to-transparent"></div>
              </div>

              {/* Círculos decorativos */}
              <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-gold-400/30 to-rose-400/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-serenity-400/30 to-gold-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

              {/* Depoimento flutuante */}
              <div className="absolute -bottom-8 left-0 right-0 mx-auto w-80 bg-white rounded-2xl p-5 shadow-2xl border-l-4 border-gold-500 transform hover:scale-105 transition-all duration-300 z-30">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">💬</div>
                  <div>
                    <p className="text-sm text-gray-700 italic mb-2">
                      "O Viva Flow transformou minha relação com o trabalho e comigo mesma!"
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-rose-400"></div>
                      <div>
                        <div className="text-xs font-bold text-gray-800">Maria Silva</div>
                        <div className="text-xs text-gray-500">Gestora RH</div>
                      </div>
                      <div className="ml-auto flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="text-gold-500 text-sm">⭐</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-2">
          <div className="text-sm text-gray-600 font-medium">Descubra mais</div>
          <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
