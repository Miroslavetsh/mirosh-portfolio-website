"use client";

import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";

import Fox, { FoxAnimationT } from "@/components/3D/models/Fox";
import Loader from "@/components/3D/Loader/Loader";
import { useAlert } from "@/hooks/useAlert";
import { Alert } from "@/components/3D/Contact/Alert";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentAnimation, setCurrentAnimation] =
    useState<FoxAnimationT>("idle");

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Myroslav Toloshnyi",
          from_email: form.email,
          to_email: "dfgshte@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(() => {
        showAlert({ text: "Message sent successfully", type: "success" });
        setTimeout(() => {
          setForm({ name: "", email: "", message: "" });
          setCurrentAnimation("idle");
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
        showAlert({ text: "Something went wrong", type: "danger" });
      })
      .finally(() => {
        setIsSubmitting(false);
        setCurrentAnimation("idle");
      });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  return (
    <section className="relative flex md:flex-row flex-col max-container">
      <Alert {...alert} />

      <div className="min-w-1/2 flex-1 flex flex-col">
        <h1 className="head-text">Get in touch</h1>

        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label className="text-black font-semibold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="input"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <label className="text-black font-semibold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            placeholder="Your email"
            className="input"
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <label className="text-black font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            autoComplete="off"
            rows={4}
            required
            placeholder="Let me know how I can help you!"
            className="textarea"
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <button
            onFocus={handleFocus}
            onBlur={handleBlur}
            type="submit"
            className="btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
