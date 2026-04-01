import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setContactFormStatus } from "../redux/store";
import hero from "../assets/about-bg.jpg";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const inputClass =
  "w-full rounded-xl border border-mint-200 bg-white/70 px-5 py-3.5 text-sm text-[#444444] placeholder:text-[#bbb] font-light focus:outline-none focus:border-[#5EC4B5] focus:ring-2 focus:ring-mint-100 transition-all";

export default function Contact() {
  const dispatch = useDispatch();
  const { contactFormStatus } = useSelector((s) => s.ui);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    dispatch(setContactFormStatus("sending"));
    // Simulate async submission
    setTimeout(() => {
      dispatch(setContactFormStatus("success"));
      setForm({ name: "", email: "", company: "", service: "", message: "" });
    }, 1500);
  };

  const handleReset = () => dispatch(setContactFormStatus("idle"));

  return (
    <div className="pt-20">
      {/* Hero */}
      {/* <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-peach-50 opacity-60" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-mint-50 opacity-50" />
        <div className="container-xl relative z-10">
          <motion.div variants={sectionVariant} initial="hidden" animate="visible" className="max-w-xl">
            <span className="text-xs font-mono tracking-widest uppercase text-[#5EC4B5] mb-4 block">Let's Talk</span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-[#444444] mb-4 leading-tight">
              Start a
              <br />
              <span className="italic text-[#3AADA0]">Conversation</span>
            </h1>
            <p className="text-lg text-[#7A8B85] font-light leading-relaxed">
              Whether you have a clear brief or are just exploring possibilities, we'd love to hear from you. Most of our best engagements started with a simple conversation.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* HERO (content unchanged, only design upgraded) */}
      <section className="relative h-[75vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="About background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/5" />
        </div>

        <div className="container-xl relative z-10">
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            animate="visible"
            className="max-w-3xl text-white"
          >
            {/* <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#5EC4B5] mb-6 block">
                          Our Story
                        </span> */}

            <h1 className="font-display text-5xl md:text-7xl font-light mb-8 leading-tight">
              Let's Talk
              <br />
              <span className="text-sky-600 font-medium">Start a</span>
              <br />
              <span className="italic text-white">Conversation</span>
            </h1>

            <p className="text-md text-white font-light leading-relaxed max-w-2xl">
              Whether you have a clear brief or are just exploring
              possibilities, we'd love to hear from you. Most of our best
              engagements started with a simple conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24 bg-white mt-20">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left sidebar info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact info */}
              <div>
                <h2 className="font-display text-2xl font-light text-[#444444] mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: "✉️",
                      label: "Email",
                      value: "hello@kjsconsulting.com",
                    },
                    {
                      icon: "📍",
                      label: "Offices",
                      value: "London · Amsterdam · Singapore",
                    },
                    {
                      icon: "🕐",
                      label: "Response Time",
                      value: "Within 24 hours",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-mint-50 border border-mint-100 flex items-center justify-center flex-shrink-0 text-lg">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs font-mono text-[#aaa] tracking-wide uppercase mb-0.5">
                          {item.label}
                        </div>
                        <div className="text-sm text-[#7A8B85] font-light">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-mint-100" />

              {/* What to expect */}
              <div>
                <h3 className="font-display text-xl font-light text-[#444444] mb-4">
                  What Happens Next
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "01",
                      text: "We review your message and tailor our response to your specific situation.",
                    },
                    {
                      step: "02",
                      text: "A senior consultant reaches out to schedule a discovery call.",
                    },
                    {
                      step: "03",
                      text: "We explore your challenge and sketch out how we might help.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <span className="font-mono text-xs text-[#5EC4B5] mt-0.5 w-6 flex-shrink-0">
                        {item.step}
                      </span>
                      <p className="text-sm text-[#7A8B85] font-light leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-mint-100" />

              {/* Services quick links */}
              <div>
                <h3 className="font-display text-xl font-light text-[#444444] mb-4">
                  Our Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Governance",
                    "Ab Initio",
                    "Data Marketplace",
                    "Data Strategy",
                  ].map((s) => (
                    <span
                      key={s}
                      className="text-xs font-light px-3 py-1.5 rounded-full bg-mint-50 border border-mint-100 text-[#5EC4B5]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <div className="rounded-3xl border border-mint-100 bg-warm-50 p-8 md:p-12 relative overflow-hidden">
                {/* Subtle bg decoration */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-mint-100 opacity-30" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-lavender-100 opacity-30" />

                <AnimatePresence mode="wait">
                  {contactFormStatus === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="relative z-10 text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-mint-100 border border-mint-200 flex items-center justify-center mx-auto mb-6 text-3xl">
                        ✓
                      </div>
                      <h3 className="font-display text-3xl font-light text-[#444444] mb-3">
                        Message Sent
                      </h3>
                      <p className="text-[#7A8B85] font-light mb-8 leading-relaxed">
                        Thank you for reaching out. A member of our team will be
                        in touch within 24 hours.
                      </p>
                      <button
                        onClick={handleReset}
                        className="text-sm text-[#5EC4B5] font-medium hover:underline underline-offset-4"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="relative z-10 space-y-5"
                    >
                      <div>
                        <h2 className="font-display text-2xl font-light text-[#111111] mb-1">
                          Send Us a Message
                        </h2>
                        <p className="text-sm text-[#aaa] font-light">
                          All fields marked * are required.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-mono text-[#aaa] tracking-wide uppercase block mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="text-xs font-mono text-[#aaa] tracking-wide uppercase block mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            required
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-mono text-[#aaa] tracking-wide uppercase block mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Your organisation"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="text-xs font-mono text-[#aaa] tracking-wide uppercase block mb-2">
                            Service of Interest
                          </label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className={inputClass + " cursor-pointer"}
                          >
                            <option value="">Select a service...</option>
                            <option>Data Governance</option>
                            <option>Ab Initio Development</option>
                            <option>Data Marketplace</option>
                            <option>Data Strategy</option>
                            <option>Multiple Services</option>
                            <option>Not Sure Yet</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-mono text-[#aaa] tracking-wide uppercase block mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us about your challenge, project, or question..."
                          required
                          className={inputClass + " resize-none"}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={contactFormStatus === "sending"}
                        className="w-full py-4 rounded-xl bg-[#3AADA0] text-white text-sm font-medium tracking-wide hover:bg-[#2E9B8F] disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-[0_6px_24px_rgba(58,173,160,0.2)] hover:shadow-[0_10px_32px_rgba(58,173,160,0.3)] hover:-translate-y-0.5"
                      >
                        {contactFormStatus === "sending" ? (
                          <span className="flex items-center justify-center gap-2">
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Sending...
                          </span>
                        ) : (
                          "Send Message →"
                        )}
                      </button>

                      <p className="text-xs text-[#bbb] font-light text-center leading-relaxed">
                        We respect your privacy. Your information will never be
                        shared with third parties.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
