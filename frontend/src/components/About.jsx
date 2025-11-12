import Section from './Section';
import Card from './Card';

const About = () => {
  return (
    <Section id="sobre" background="gold" pattern={true}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-gray-800 drop-shadow-md">
            Sobre o Programa
          </span>
        </h2>

        <Card gradient={true} className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Programa de desenvolvimento psicossocial feminino para empresas que valorizam
            a saúde emocional de suas colaboradoras. Baseado nos pilares{' '}
            <strong className="text-gold-600">Aceitação</strong>,{' '}
            <strong className="text-rose-600">Consciência</strong> e{' '}
            <strong className="text-amber-600">Direcionamento</strong>.
          </p>
        </Card>

        {/* Missão */}
        <Card className="mb-12 bg-gradient-to-r from-rose-50 to-gold-50">
          <h3 className="text-2xl font-bold text-gold-700 mb-4 text-center">
            Missão
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Fortalecer a saúde emocional e o propósito das mulheres no ambiente corporativo.
          </p>
        </Card>

        {/* Metodologia ACD */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Metodologia Viva Flow (ACD)
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card hover={true} className="bg-gradient-to-br from-gold-500 to-gold-600 text-white animate-zoom-in-out">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-gold-600">A</span>
                </div>
                <h4 className="text-2xl font-bold">Aceitação</h4>
                <p className="leading-relaxed">
                  Acolher emoções e histórias sem julgamento, criando segurança interna.
                </p>
              </div>
            </Card>

            <Card hover={true} className="bg-gradient-to-br from-rose-400 to-rose-500 text-white animate-zoom-in-out" style={{ animationDelay: '0.2s' }}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-rose-600">C</span>
                </div>
                <h4 className="text-2xl font-bold">Consciência</h4>
                <p className="leading-relaxed">
                  Ampliar a percepção de padrões, gatilhos e recursos internos.
                </p>
              </div>
            </Card>

            <Card hover={true} className="bg-gradient-to-br from-amber-500 to-amber-600 text-white animate-zoom-in-out" style={{ animationDelay: '0.4s' }}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-amber-600">D</span>
                </div>
                <h4 className="text-2xl font-bold">Direcionamento</h4>
                <p className="leading-relaxed">
                  Transformar autoconhecimento em escolhas, hábitos e resultados sustentáveis.
                </p>
              </div>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-amber-50 to-gold-50">
            <p className="text-center text-gray-700 text-lg leading-relaxed">
              Combina <strong>psicanálise, PNL, hipnose, inteligência emocional e neurociência</strong>{' '}
              para uma abordagem integral corpo-mente-emoção.
            </p>
          </Card>
        </div>

        {/* Como é entregue */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Como o Programa é Entregue
          </h3>

          <Card gradient={true}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gold-700">Plataforma Online</h4>
                    <p className="text-gray-600">Módulos gravados e materiais 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-rose-700">Mentorias via Zoom</h4>
                    <p className="text-gray-600">Encontros coletivos para integração</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-700">Atendimentos VIP</h4>
                    <p className="text-gray-600">Sessões individuais confidenciais</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gold-600 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gold-700">Relatórios Corporativos</h4>
                    <p className="text-gray-600">Dados anônimos e consolidados (NR-1)</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default About;
