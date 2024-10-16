import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import moTaher from "../assets/jason-root.webp"

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const containerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
};
const imageVariants = {
  hidden: { clipPath: "inset(0 50% 0 50%)" },
  visible: {
    clipPath: "inset(0 0 0 0)",
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};
const Hero = () => {
  return (
    <section>
      <div className="relative z-10  min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white">
        <motion.div className=" w-full md:w-1/2 p-8" initial="hidden" animate="visible" variants={containerVariants} >
            <motion.h1 variants={textVariants} className="text-2xl md:text-3xl lg:text-5xl my-14">
                {HERO_CONTENT.greeting}
            </motion.h1>
            <motion.p variants={textVariants} className="text-xl md:text-2xl lg:text-4xl mb-4 ">
                {HERO_CONTENT.introduction}
            </motion.p>
            <motion.p variants={textVariants} className="text-xl md:text-2xl lg:text-4xl mb-4 ">
                {HERO_CONTENT.description}
            </motion.p>
            <motion.a download target="_blank" rel="noopener norefferer"  href={HERO_CONTENT.resumeLink} variants={textVariants} className="bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl">
                {HERO_CONTENT.resumeLinkText}
            </motion.a>
           
        </motion.div>
        <motion.div className="w-full md:w-1/2 p-8" initial="hidden" animate="visible" variants={imageVariants}>
                <img src={moTaher} alt="Mohamed Taher" className="rounded-3xl" width={650} height={650} />
            </motion.div>
      </div>
    </section>
  );
};

export default Hero;
