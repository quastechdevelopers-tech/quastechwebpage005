import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showExhaust, setShowExhaust] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setShowExhaust(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      setShowExhaust(false);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="scroll-to-top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 left-2 z-[60] -translate-x-1/2 md:bottom-8"
        >
          <button
            onClick={handleClick}
            aria-label="Scroll to top"
            className="relative flex flex-col items-center justify-center"
          >
            {/* 🚀 Rocket — EDIT SIZE + LEFT/RIGHT HERE */}
            <motion.img
              src="/rocketscrollup/rocketup.png"
              alt="Scroll to top"
              className="
                h-[100px] w-[100px] 
                -ml-[40px] 
                md:h-[140px] md:w-[140px] 
                md:-ml-[30px] 
                object-contain
              "
              animate={showExhaust ? { y: -6 } : { y: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* 🔥 Exhaust — EDIT SIZE + LEFT/RIGHT + VERTICAL SPACING HERE */}
            <AnimatePresence>
              {showExhaust && (
                <motion.img
                  src="/rocketscrollup/exhost.png"
                  alt="Rocket exhaust"
                  className="
                    h-[100px] w-[100px] 
                    -ml-[40px] 
                    md:h-[140px] md:w-[140px] 
                    md:-ml-[30px] 
                    -mt-[70px] 
                    object-contain
                  "
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
