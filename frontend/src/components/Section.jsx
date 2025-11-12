const Section = ({ children, id, className = '', background = 'white', pattern = false }) => {
  const backgrounds = {
    white: 'bg-gradient-to-br from-white via-gray-50 to-gold-50',
    gold: 'bg-gradient-to-br from-gold-50 via-gold-100 to-yellow-50',
    rose: 'bg-gradient-to-br from-rose-50 via-rose-100 to-pink-50',
    serenity: 'bg-gradient-to-br from-serenity-50 via-serenity-100 to-blue-50',
    gradient: 'bg-gradient-to-br from-gold-100 via-rose-50 to-serenity-100',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 relative overflow-hidden ${backgrounds[background]} ${className}`}
    >
      {pattern && (
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="flower-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="currentColor" className="text-gold-400" />
                <circle cx="25" cy="25" r="1.5" fill="currentColor" className="text-rose-400" />
                <circle cx="75" cy="75" r="1.5" fill="currentColor" className="text-amber-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#flower-pattern)" />
          </svg>
        </div>
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
