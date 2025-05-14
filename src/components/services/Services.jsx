import { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";
import servicesData from "../data.json";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}

const Services = () => {
    const services = servicesData.services;
    const ref = useRef();

    const isInView = useInView(ref, {
        maring: "-100px",
        threshold: 0.2
    })
    return (
        <motion.div className="services"
            variants={variants}
            initial="initial"
            animate="animate"
            ref={ref}
            // animate={isInView && "animate"}
            >

            <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on helping your brand grow
                    <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
                    </h1>
                    <button> WHAT I DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                {services.map((service, index) => (
                    <motion.div className="box" key={index} initial={{ background: "rgba(0, 0, 0, 0)", color: "white" }} whileHover={{ background: "lightgray", color: "black" }}>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        {/* <button>Go</button> */}
                        <a className="btn" href="#Contact">Go</a>
                    </motion.div>
                ))}
                
            </motion.div>
        </motion.div>
    )
}
export default Services;