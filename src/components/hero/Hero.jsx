import "./Hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const slideVariants = {
    initial: {
        x: 0
    },
    animate: {
        x: "-100%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,

        },
    },
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer"
                    variants={textVariants}
                    initial="initail"
                    animate='animate'>
                    <motion.h2 variants={textVariants}>SHYANUKANT RATHI</motion.h2>
                    <motion.h1 variants={textVariants}>Developer and Designer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}>See the latest Works</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="scroll.png" alt="scroll" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer"
            variants={slideVariants} initial="initail" animate="animate">
                Python Django Fastapi
            </motion.div>
            <div className="imageContainer">
                <img src="pic.png" alt="hero image" />
            </div>
        </div>
    )
}

export default Hero;