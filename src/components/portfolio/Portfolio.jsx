import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import portfolioData from "../data.json";


const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="Project Image" />
                    </div>
                    <motion.div  className="textContainer" style={{ y }} >
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.url} target="_blank">See Project</a>
                        
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div
                    style={{ scaleX }}
                    className="progressBar">
                </motion.div>
            </div>
            {portfolioData.map((item) => (
                <Single key={item.id} item={item} />
            ))}
        </div>
    )
}

export default Portfolio;