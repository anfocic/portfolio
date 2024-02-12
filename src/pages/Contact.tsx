import emailjs from "@emailjs/browser";
import {Canvas} from "@react-three/fiber";
import React, {Suspense, useRef, useState} from "react";
import Alert from "../components/Alert";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Fox from "../models/Fox";
import {FormModel} from "../models/models";

const Contact = () => {

    const formRef: React.Ref<any> = useRef();
    const formData: FormModel = {name: "", email: "", message: ""}
    const [form, setForm] = useState(formData);
    const handleFocus = () => setCurrentAnimation("walk");
    const handleBlur = () => setCurrentAnimation("idle");
    const handleChange = (e: any) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const {alert, showAlert, hideAlert} = useAlert();

    const [loading, setLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState("idle");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        setCurrentAnimation("hit");
        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "JavaScript Mastery",
                    from_email: form.email,
                    to_email: "afocic@sent.com",
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    showAlert(
                        true,
                        "Thank you for your message 😃",
                        "success"
                    );

                    setTimeout(() => {
                        hideAlert();
                        setCurrentAnimation("idle");
                        setForm({
                            name: "",
                            email: "",
                            message: "",
                        });
                    }, 3000);
                }).catch(() => {
                setLoading(false);
                setCurrentAnimation("idle");
                showAlert(
                    true,
                    "I didn't receive your message 😢",
                    "danger",
                );
            }
        );
    };

    return (
        <section className='relative flex lg:flex-row flex-col max-container'>
            {alert.show && <Alert show={alert.show} text={alert.text} type={alert.type}/>}

            <div className='flex-1 min-w-[50%] flex flex-col'>
                <h1 className='head-text'>Get in Touch</h1>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='w-full flex flex-col gap-7 mt-14'>
                    <label className='text-black-500 font-semibold'>
                        Name
                        <input
                            type='text'
                            name='name'
                            className='input'
                            placeholder='John'
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Email
                        <input
                            type='email'
                            name='email'
                            className='input'
                            placeholder='John@gmail.com'
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Your Message
                        <textarea
                            name='message'
                            rows={4}
                            className='textarea'
                            placeholder='Write your thoughts here...'
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>

                    <button
                        type='submit'
                        disabled={loading}
                        className='btn'
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        {loading ? "Sending..." : "Submit"}
                    </button>
                </form>
            </div>

            <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
                <Canvas
                    camera={{
                        position: [6.5, 0, 11],
                        fov: 75,
                        near: 0.1,
                        far: 1000,
                    }}>
                    <directionalLight position={[0, 0, 1]} intensity={1.5}/>
                    <ambientLight intensity={1}/>
                    <pointLight position={[5, 10, 0]} intensity={2}/>
                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                    />

                    <Suspense fallback={<Loader/>}>
                        <Fox
                            currentAnimation={currentAnimation}
                            position={[0.5, 0.5, 0]}
                            rotation={[12.6, -0.6, 0]}
                            scale={[0.5, 0.5, 0.5]}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Contact;