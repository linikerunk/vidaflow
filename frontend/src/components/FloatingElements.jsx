import { useEffect, useState } from 'react';

/**
 * Componente que cria elementos flutuantes decorativos
 */
const FloatingElements = ({ count = 15, colors = ['gold', 'rose', 'amber'] }) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const newElements = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * -20,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setElements(newElements);
  }, [count, colors]);

  const colorClasses = {
    gold: 'from-gold-400 to-amber-300',
    rose: 'from-rose-400 to-pink-300',
    amber: 'from-amber-400 to-yellow-300',
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el) => (
        <div
          key={el.id}
          className={`absolute rounded-full bg-gradient-to-br ${colorClasses[el.color]} blur-xl`}
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            width: `${el.size}px`,
            height: `${el.size}px`,
            opacity: el.opacity,
            animation: `float ${el.duration}s ease-in-out infinite`,
            animationDelay: `${el.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingElements;
