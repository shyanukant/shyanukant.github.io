import "./Contact.scss";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        },
    },
}

const Contact = () => {
    const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const inView = useInView(ref, { margin: "-100px" })

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.APP_SERVICE_ID, import.meta.env.APP_TEMPLATE_ID, formRef.current, {
                publicKey: import.meta.env.APP_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSuccess(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setError(true);
                },
            );
        formRef.current.reset()
    }

    return (
        <motion.div ref={ref} className="contact"
            variants={variants}
            initial="initial"
            whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>rathishyanukant@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone/Whatsapp</h2>
                    <span>9756953508</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.div className="phoneSvg"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ delay: 3, duration: 1 }}
                    >
                    <svg viewBox="0 0 512 512" >

                        <motion.path
                            strokeWidth={2}
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={inView && { pathLength: 1 }}
                            transition={{ duration: 3 }}
                            d="M256 0C114.837 0 0 114.837 0 256s114.837 256 256 256c56.917 0 110.805-18.283 156.352-53.333 18.091-15.851 17.771-38.507 9.408-53.931-5.291-9.771-13.355-16.448-22.741-19.733l4.288-4.8c6.379-7.168 9.195-16.747 7.701-26.261-1.493-9.515-7.125-17.749-15.424-22.635l-56.341-32.981c-13.077-7.659-29.952-4.992-40.064 6.336l-12.501 14.059c-2.219 2.496-5.269 3.861-8.725 3.563-3.328-.256-6.293-1.984-8.128-4.757l-68.672-103.616c-1.749-2.624-2.24-5.739-1.365-8.789.853-3.029 2.901-5.419 5.781-6.763l19.648-9.131c13.803-6.379 21.227-21.739 17.664-36.523L227.585 89.26c-2.24-9.365-8.512-17.131-17.173-21.312-8.683-4.203-18.645-4.288-27.392-.235l-17.536 8.128c-25.92 12.032-45.013 34.752-52.373 62.357l-3.2 12.032c-5.781 21.653-3.776 44.779 5.653 65.109l15.765 34.005c23.125 49.899 54.699 94.784 93.824 133.44l13.013 12.843c19.328 19.093 44.928 30.101 72.064 30.976 1.173.043 2.368.064 3.541.064 23.573 0 46.144-7.723 64.64-21.717.363-.064.725.021 1.088-.085 14.507-4.053 21.696 6.656 23.509 10.027 4.309 7.979 4.523 19.648-4.181 27.307C357.568 473.9 308.182 490.668 256 490.668c-129.387 0-234.667-105.28-234.667-234.667S126.613 21.333 256 21.333 490.667 126.613 490.667 256c0 5.888 4.779 10.667 10.667 10.667s10.667-4.779 10.667-10.667C512 114.837 397.163 0 256 0zm131.435 366.037-9.28 10.411c-17.045 19.157-41.323 29.739-67.2 28.843-21.739-.704-42.261-9.536-57.749-24.832l-13.013-12.864c-37.312-36.843-67.413-79.659-89.472-127.232l-15.765-34.005a74.84 74.84 0 0 1-4.416-50.645l3.2-12.032c5.717-21.461 20.565-39.147 40.747-48.491l17.536-8.128a10.9 10.9 0 0 1 4.48-.981c1.6 0 3.179.341 4.672 1.045a10.69 10.69 0 0 1 5.739 7.104l15.296 63.445c1.195 4.928-1.28 10.048-5.888 12.181l-19.648 9.131a32 32 0 0 0-17.344 20.331 31.97 31.97 0 0 0 4.117 26.389l68.651 103.616c5.547 8.32 14.421 13.525 24.405 14.229 10.133.725 19.541-3.157 26.197-10.645l12.501-14.059c3.371-3.776 9.024-4.672 13.355-2.112l56.32 32.981c2.773 1.643 4.651 4.395 5.141 7.552a10.68 10.68 0 0 1-2.582 8.768z" />
                    </svg>
                </motion.div>
                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 1 }}>
                    <input type="text" placeholder="Name" name="name" required />
                    <input type="email" placeholder="Email" name="email" required />
                    <textarea name="message" id="" cols="30" rows="8" placeholder="Message" required />
                    <button>Submit</button>
                    {error && <span className="error">Something went wrong</span>}
                    {success && <span className="success">Message sent successfully</span>}
                </motion.form>
            </div>
        </motion.div>
    );
}
export default Contact;