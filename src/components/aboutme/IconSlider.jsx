import { motion } from "framer-motion"
import { DiCss3, DiGit, DiGithubBadge, DiHtml5, DiJavascript1, DiNodejsSmall, DiReact, DiPostgresql, DiPython } from "react-icons/di";
import { TbBrandDjango } from "react-icons/tb";
import { SiFlask, SiFastapi } from "react-icons/si";

// Store *components*, not elements
const ICON_COMPONENTS = [
    DiPython, TbBrandDjango, SiFlask, SiFastapi,
    DiGit, DiGithubBadge, DiHtml5, DiCss3,
    DiJavascript1, DiNodejsSmall, DiReact, DiPostgresql,
]

const IconSlider = (props) => {

    // for left: start at 0, slide to -100
    // for right: start at -100, slide to 0
    const from = props.direction === "left" ? "0%" : "-100%"
    const to = props.direction === "left" ? "-100%" : "0%"



    // Reverse order for one direction if you like:
    const iconsToRender = props.direction === "right"
        ? [...ICON_COMPONENTS].reverse()
        : ICON_COMPONENTS

    const slideVariants = {
        initial: {
            x: { x: from },
        },
        animate: {
            x: [from, to],
            transition: {
                // ease: "easeInOut",
                ease: "linear",
                duration: 10,
                repeat: Infinity,
                repeatType: "loop",
                delay: 0,

            },
        },
    };
    return (
        <motion.div className={props.sliderClassName}
            variants={slideVariants} initial="initial" animate="animate" style={{ bottom: props.bottomSize }}>
            {[0, 1].map(pass => (
                <span key={pass} className="icon-group">
                    {iconsToRender.map((IconComponent, idx) => (
                        <IconComponent
                            key={`${props.direction}-${pass}-${idx}`}
                        />
                    ))}
                </span>
            ))}


        </motion.div>
    )
}
export default IconSlider;