import { useState, useRef, useEffect, type ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
}

export function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (ref.current) observer.unobserve(ref.current);
            }
        },
        {
            threshold: 0.1,
        },
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        }
    }, []);

    return (
        <>
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transform transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
        >
            {children}
        </div>
        </>
    );
}

