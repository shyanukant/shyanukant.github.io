import "./Cursor.scss";
import { useState , useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const onMouseMove = (e) => {
            setCursor({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", onMouseMove);
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);
    return (
        <motion.div className="cursor" animate={{x:cursor.x+10, y:cursor.y+10}}></motion.div>
    );
}

export default Cursor;