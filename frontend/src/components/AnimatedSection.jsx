import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Componente wrapper que adiciona animações ao scroll
 */
const AnimatedSection = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  duration = 0.6,
  className = ''
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, once: true });

  const animations = {
    'fade-in': 'opacity-0 translate-y-0',
    'fade-in-up': 'opacity-0 translate-y-8',
    'fade-in-down': 'opacity-0 -translate-y-8',
    'fade-in-left': 'opacity-0 translate-x-8',
    'fade-in-right': 'opacity-0 -translate-x-8',
    'scale-in': 'opacity-0 scale-95',
    'slide-in-left': 'opacity-0 -translate-x-full',
    'slide-in-right': 'opacity-0 translate-x-full',
  };

  const baseClasses = 'transition-all ease-out';
  const initialClasses = animations[animation] || animations['fade-in-up'];
  const visibleClasses = 'opacity-100 translate-y-0 translate-x-0 scale-100';

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${isVisible ? visibleClasses : initialClasses} ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
