import { easeInOut, easeOut, useAnimation, useInView } from "motion/react";
import Marquee from "react-fast-marquee";
import * as motion from "motion/react-client";
import { SiGnuicecat } from "react-icons/si";
import Container from "./container";

const LeftSlide = () => {
  const imgPath = [
    "images/l1.png",
    "images/l2.png",
    "images/l3.png",
    "images/l4.png",
    "images/l5.png",
    "images/l6.png",
    "images/l7.png",
    "images/l8.png",
    "images/l9.PNG",
    "images/l10.png",
  ];

  return (
    <Container className=" px-60 mt-20  ">
      <motion.div
        id="fade-sides"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 100, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.7,
          ease: easeOut,
          type: "spring",
          stiffness: 100,
        }}
        viewport={{ once: true, amount: 0.3 }}
        className=" select-none "
      >
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={false}
          loop={0} // 0 = infinite loop
          className=" select-none "
        >
          {imgPath.map((paths) => (
            <div style={slideStyle}>
              <img
                className=" rounded-2xl duration-300 ease-out grayscale-100 "
                src={paths}
              />
            </div>
          ))}
        </Marquee>
      </motion.div>
    </Container>
  );
};

const slideStyle = {
  maxWidth: "150px",
  margin: "0 10px ",
  background: "transparent",
  color: "white",
  textAlignY: "start",
  willChange: "transform",
};

export default LeftSlide;
