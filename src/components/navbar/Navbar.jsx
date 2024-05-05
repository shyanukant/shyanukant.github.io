import "./Navbar.scss"
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube, IoLogoLinkedin } from "react-icons/io5";

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
                    <a href="https://instagram.com/shyanukant" target="_blank"><FaSquareInstagram size={26}/></a>
                    <a href="https://www.linkedin.com/in/shyanukant/" target="_blank"><IoLogoLinkedin size={26}/></a>
                    <a href="https://twitter.com/shyanukant" target="_blank"><FaSquareXTwitter size={26}/></a>
                    <a href="https://www.youtube.com/@shyanukant" target="_blank">
                        <IoLogoYoutube size={26}/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;