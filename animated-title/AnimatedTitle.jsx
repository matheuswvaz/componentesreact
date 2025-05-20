import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";

const AnimatedTitle = ({
  children,
  delay = 0.5,
  duration = 0.3,
  fontSize = "2.5rem",
  color = "#fff",
  weight = 600,
  spacing = "normal",
  blurStart = 50,
  as = "h2",
  align = "center",
}) => {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const node = ref.current;
    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            controls.start({
              opacity: 1,
              filter: "blur(0px)",
              transition: { duration, delay, ease: "easeOut" },
            });
          }
        },
        { threshold: 0.65 }
      );
      observer.observe(node);
      return () => observer.unobserve(node);
    }
  }, [controls, delay, duration]);

  const Tag = as;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: `blur(${blurStart}px)` }}
      animate={controls}
    >
      <Tag
        style={{
          fontSize,
          color,
          fontWeight: weight,
          letterSpacing: spacing,
          margin: 0,
          textAlign: align,
        }}
      >
        {children}
      </Tag>
    </motion.div>
  );
};

AnimatedTitle.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  duration: PropTypes.number,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  spacing: PropTypes.string,
  blurStart: PropTypes.number,
  as: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right"]),
};

export default AnimatedTitle;
