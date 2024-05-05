import { motion } from "framer-motion"
import { DiCss3,DiGit,DiGithubBadge,DiHtml5,DiJavascript1,DiNodejsSmall,DiReact,DiPostgresql,DiPython  } from "react-icons/di";
import {TbBrandDjango} from "react-icons/tb";
import { SiFlask, SiFastapi} from "react-icons/si";


const slideVariants = {
    initial: {
        x: 0
    },
    animate: {
        x: "-200%",
        transition: {
            ease: "easeInOut",
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            delay: 0,

        },
    },
};

const IconSlider = (props) => {
    return (
<motion.div className={props.sliderClassName}
            variants={slideVariants} initial="initial" animate="animate" style={{bottom: props.bottomSize}}>
                <DiPython /><TbBrandDjango /><SiFlask /><SiFastapi /><DiGit /><DiGithubBadge /><DiHtml5 /><DiCss3 /><DiJavascript1 /><DiNodejsSmall /><DiReact /><DiPostgresql />              

        </motion.div>
    )
}
export default IconSlider;