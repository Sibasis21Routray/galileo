import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const SolutionsDetails = ({ productData }) => {
  return (
    <div className="bg-black">
      <TextParallaxContent
        imgUrl={productData.bgImage}
        subheading={productData.subheading}
        heading={productData.name}
        productUrl={productData.productUrl}
        description={productData.description}
      />
    </div>
  );
};

const IMG_PADDING = 1;

export const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading1,
  heading2,
  productUrl,
  description,
  children,
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
      className=""
    >
      <div className="relative h-fit">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy
          heading1={heading1}
          heading2={heading2}
          subheading={subheading}
          productUrl={productUrl}
          description={description}
        />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-2xl "
    >
      <motion.div
        className="absolute inset-0 bg-black/60"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading1,heading2, productUrl, description }) => {
  const targetRef = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  const handleClick = () => {
    if (productUrl) {
      if (productUrl.startsWith("http")) {
        window.open(productUrl, "_blank");
      } else {
        navigate(productUrl);
      }
    }
  };
const renderHeading = (text, heading1) => {
  let acronym = "";

  if (heading1 === "SONAR") {
    acronym = "SONAR";
  } else if (heading1 === "CALM") {
    acronym = "CALM";
  }

  const letters = acronym.split("");

  return text.split(" ").map((word, index) => {
    const firstLetter = word.replace(/[.,]/g, "").charAt(0).toUpperCase();

    return (
      <React.Fragment key={index}>
        <span>
          <span
            className={
              letters.includes(firstLetter)
                ? "text-[#29f67a]"
                : "text-white"
            }
          >
            {word.charAt(0)}
          </span>
          <span className="text-white">{word.slice(1)}</span>
        </span>
        {index < text.split(" ").length - 1 && " "}
      </React.Fragment>
    );
  });
};


  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white px-4"
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#29f67a]/30 mb-6"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#29f67a]" />
        <span className="text-[10px] font-mono tracking-wider text-[#29f67a] uppercase">
          {subheading}
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 leading-tight "
      >
        {heading1}
      </motion.h1>
     <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 leading-tight"
>
  {renderHeading(heading2, heading1)}
</motion.h1>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-whitw text-base md:text-lg text-center max-w-2xl mx-auto mb-8"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};