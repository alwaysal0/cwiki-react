import React from 'react';
import { useEffect, useRef } from 'react';

const useObserver = (setInView) => {
    const observedElementsRef = useRef([]);
    const timeoutsRef = useRef([]);

    const setObservedElementRef = (el) => {
        if (el && !observedElementsRef.current.includes(el)) {
            observedElementsRef.current.push(el);
        }
    };

    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                const element = entry.target;
                const index = observedElementsRef.current.indexOf(element);

                // Получаем индивидуальную задержку из атрибута data-delay
                const delay = parseInt(element.getAttribute('data-delay')) || 0;

                if (entry.isIntersecting) {
                    const timeout = setTimeout(() => {
                        setInView(true);
                    }, delay);

                    timeoutsRef.current[index] = timeout;
                } else {
                    clearTimeout(timeoutsRef.current[index]);
                    setInView(false);
                }
            });
        };

        const observerOptions = {
            root: null,
            threshold: 0.1
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        observedElementsRef.current.forEach(element => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
            observedElementsRef.current.forEach(element => {
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    return setObservedElementRef;
};

export default useObserver;
