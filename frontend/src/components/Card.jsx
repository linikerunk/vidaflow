const Card = ({ children, className = '', hover = true, gradient = false }) => {
  const baseStyles = 'rounded-3xl p-8 transition-all duration-300';
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-2' : '';
  const backgroundStyles = gradient
    ? 'bg-gradient-to-br from-white to-gold-50 shadow-xl border border-gold-100'
    : 'bg-white shadow-lg';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${backgroundStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
