import "./Navbar.scss"
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    S.Rathi
                </motion.span>
                <div className="social">
                    <a href="https://instagram.com/shyanukant" target="_blank"><img src="instagram.svg" alt="" /></a>
                    <a href="https://www.linkedin.com/in/shyanukant/" target="_blank"><img src="linkedin.svg" alt="" /></a>
                    <a href="https://twitter.com/shyanukant" target="_blank"><img src="x.svg" alt="" /></a>
                    <a href="https://www.youtube.com/@shyanukant" target="_blank"><img src="youtube.svg" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;