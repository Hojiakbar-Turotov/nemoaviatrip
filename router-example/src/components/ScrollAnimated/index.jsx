import { useInView } from 'react-intersection-observer';
import 'animate.css';

const ScrollAnimated = ({ children, animation = 'animate__fadeInUp' }) => {
    const { ref, inView } = useInView({
        triggerOnce: false, // true -> faqat bir marta ishlaydi
        threshold: 0.1, // qancha ko‘rinishi kerak (0 - 1)
    });

    return (
        <div
            ref={ref}
            className={`${inView ? `animate__animated ${animation}` : 'opacity-0'
                } transition-opacity duration-100`}
        >
            {children}
        </div>
    );
};

export default ScrollAnimated;
