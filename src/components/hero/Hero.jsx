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
                    initial="initial"
                    animate='animate'>
                    <motion.h2 variants={textVariants}>SHYANUKANT RATHI</motion.h2>
                    <motion.h1 variants={textVariants}>Developer and Designer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.a variants={textVariants} href="#Portfolio">See the latest Works</motion.a>
                        <motion.a variants={textVariants} href="#Contact">Contact Me</motion.a>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="scroll.png" alt="scroll" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer"
                variants={slideVariants} initial="initial" animate="animate">
                Devloper Designer Editor Creator
            </motion.div>
            <div className="imageContainer ">
                {/* <img src="pic.png" alt="hero image" /> */}
                <motion.img
                    className="floating"
                    src="pic2.png"
                    alt="hero image"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </div>
        </div>
    )
}

export default Hero;