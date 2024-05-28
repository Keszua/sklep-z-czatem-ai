import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
// import { styles } from "../styles";

type ComponentType = React.ComponentType<any>;

export const SectionWrapper = (
    Component: ComponentType,
    idName: string,
    isFirstSection: boolean = false
  ) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`max-w-7xl mx-auto relative z-0 ${isFirstSection ? 'pt-[280px]' : ''}`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };
  