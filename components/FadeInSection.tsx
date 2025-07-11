import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
}

const FadeInSection = ({ children }: FadeInSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only happen once
    threshold: 0.1,    // Trigger when 10% of the component is visible
  });

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-in-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      {children}
    </div>
  );
};

export default FadeInSection;