import { useRef } from "react";
import "./Parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
    return (
        <div className="parallax"
            ref={ref}
            style={{
                background:
                    type === "services" ? "linear-gradient(180deg, #112019, #505064)"
                        :"linear-gradient(180deg, #111133, #50645a)"
            }}>
            <motion.h1 style={{y: yText}}>{type === "services" ? "What I Do?" : "What I Did?"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{y: yBg, backgroundImage: `url(${type==="services" ? "./planets.png": "./sun.png"})`}} className="planets"></motion.div>
            <motion.div style={{x: yBg}} className="stars"></motion.div>
        </div>
    )
}

export default Parallax;