const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, ...props }) => {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg';

  const variants = {
    primary: 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-yellow-200',
    secondary: 'bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white shadow-rose-200',
    outline: 'border-2 border-gold-500 text-gold-600 hover:bg-gold-50 hover:animate-shimmer',
    serenity: 'bg-gradient-to-r from-serenity-400 to-serenity-500 hover:from-serenity-500 hover:to-serenity-600 text-white shadow-serenity-200',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
