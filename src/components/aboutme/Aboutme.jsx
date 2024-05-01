import "./Aboutme.scss"
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

};


const Aboutme = () => {
    return (
        <motion.div className="aboutme"
            variants={textVariants}
            initial="initail"
            animate='animate'>
            <motion.h2 variants={textVariants}>About Me</motion.h2>
            <motion.p variants={textVariants}>


                Hello! I'm <b>Shyanukant Rathi</b>, a software developer with a strong foundation in Python and JavaScript. My expertise extends to front-end technologies like HTML, CSS, Bootstrap, and TailwindCSS , as well as version control systems such as Git and GitHub.

                I've delved into Python frameworks like Django, FastAPI, and Django REST API, and I'm familiar with the basics of ReactJS. My curiosity has also led me to explore the realms of Machine Learning/AI, working with tools like Scikit-learn, Matplotlib, NumPy, and engaging with OpenAI APIs and the LLM framework LangChain I.'m always eager to learn and grow in this dynamic field.

                I am deeply passionate about becoming a proficient Python Developer and advancing in the field of ML/AI. My interest in blockchain technology is growing,
                If you're interested in discussing technology, collaboration, or just want to say hi, feel free to reach out. Let's build something amazing together!

                Thank you for exploring my world of code and creativity!

            </motion.p>

        </motion.div>
    )
}

export default Aboutme;