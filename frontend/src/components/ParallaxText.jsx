import { useParallax } from '../hooks/useScrollAnimation';

/**
 * Componente de texto com efeito parallax
 */
const ParallaxText = ({ children, speed = 0.3, className = '' }) => {
  const [ref, offset] = useParallax(speed);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxText;
