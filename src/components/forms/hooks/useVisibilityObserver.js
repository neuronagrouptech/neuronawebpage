import { useState, useEffect, useRef } from "react";

const useVisibilityObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef();

  useEffect(() => {
    const currentObserver = observerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { root: null, threshold }
    );

    if (currentObserver) observer.observe(currentObserver);

    return () => {
      if (currentObserver) observer.unobserve(currentObserver);
    };
  }, [threshold]);

  return { isVisible, observerRef };
};

export default useVisibilityObserver;
