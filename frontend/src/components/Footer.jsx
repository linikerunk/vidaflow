const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-gold-400 drop-shadow-lg mb-4">
              Viva Flow
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Programa de qualidade psicossocial para mulheres trabalhadoras e empreendedoras.
              Cuidar da mente, equilibrar emoções e direcionar propósitos femininos nas corporações.
            </p>
            <p className="text-sm text-gray-400">
              O Viva Flow nasce para transformar o ambiente de trabalho em um espaço mais leve,
              humano e produtivo — onde cada mulher possa se sentir vista, ouvida e valorizada.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold-300">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#idealizadora" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Idealizadora
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Sobre o Programa
                </a>
              </li>
              <li>
                <a href="#pacotes" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Pacotes
                </a>
              </li>
              <li>
                <a href="#diagnostico" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Diagnóstico
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-gold-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-rose-300">Contato</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contato@vivaflow.com.br" className="hover:text-gold-400 transition-colors">
                  contato@vivaflow.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <a href="https://www.vivaflow.com.br" className="hover:text-rose-400 transition-colors">
                  www.vivaflow.com.br
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Viva Flow. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Desenvolvido com propósito e amor para transformar vidas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
