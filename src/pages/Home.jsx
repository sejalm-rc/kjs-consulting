import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import bank from "../assets/bank.jpg";
import pharma from "../assets/pharma.jpg";
import telecom from "../assets/telecom.jpg";
import gb from "../assets/gb.png";
import pahrmaCore from "../assets/pharmacor-logo.jpg";
import retail from "../assets/retail.png";
import gt from "../assets/gt.png";
import datacrop from "../assets/datacrop.png";
import insight from "../assets/InsightCo.png";
import about from "../assets/about.jpg"

const services = [
  {
    title: "Data Governance",
    description:
      "Establish enterprise-wide data policies, stewardship models, and compliance frameworks that drive trusted, high-quality data across your organization.",
    image: "https://qinfo.co.za/wp-content/uploads/2022/11/ser5.jpg",
  },
  {
    title: "Ab Initio Development",
    description:
      "Deep expertise in Ab Initio ETL platform — from architecture design to performance tuning, graph development, and enterprise-scale data integration.",
    image: "https://qinfo.co.za/wp-content/uploads/2022/11/ser1.jpg",
  },
  {
    title: "Data Marketplace",
    description:
      "Build internal data marketplaces that democratize access, enabling teams to discover, request, and consume curated datasets with confidence.",
    image: "https://qinfo.co.za/wp-content/uploads/2022/11/ser2.jpg",
  },
  {
    title: "Data Strategy",
    description:
      "Align your data capabilities with business goals through roadmap development, maturity assessments, and change management that delivers measurable ROI.",
    image: "https://qinfo.co.za/wp-content/uploads/2022/11/ser5.jpg",
  },
];

const clients = [
  {
    name: "GlobalBank",
    logo: gb,
  },
  {
    name: "PharmaCore",
    logo: pahrmaCore,
  },
  {
    name: "RetailMax",
    logo: retail,
  },
  {
    name: "TelecomGlobal",
    logo: gt,
  },
  {
    name: "DataCorp",
    logo: datacrop,
  },
  {
    name: "InsightCo",
    logo: insight,
  },
];

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div>
      <Hero />

      {/* About Intro Section */}
      <section className="section-padding bg-white mt-32">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <img
                  src={about}
                  alt="Team working"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Label Tag */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-medium text-[#2F3E3B] shadow">
                KJs Data Consulting
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-light text-[#2F3E3B] mb-6 leading-snug">
                Transforming{" "}
                <span className="text-[#3286BB] font-medium">
                  Data Into Solutions
                </span>{" "}
                That Drive Insight
              </h2>

              <div className="space-y-5 text-[#6E7F79] font-light leading-relaxed">
                <p>
                  KJs Data Consulting is a trusted IT consulting partner
                  delivering advanced data and technology solutions that turn
                  complex data into actionable insights.
                </p>

                <p>
                  We work with organizations across industries to better
                  understand customer behavior, unlock business potential, and
                  create measurable impact through data-driven strategies.
                </p>

                <p>
                  From data governance to enterprise platforms, we design
                  scalable systems that elevate how your business manages and
                  utilizes data.
                </p>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3 rounded-full 
          border border-[#3286BB] text-[#3286BB] text-sm font-medium
          hover:bg-[#3286BB] hover:text-white transition-all duration-300"
              >
                More About Us →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16 "
          >
            <span className="inline-block text-xs font-mono tracking-widest uppercase text-[#5EC4B5] mb-4">
              What We Do
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#444444] mb-4">
              Our Core Services
            </h2>
            <p className="text-[#7A8B85] font-light max-w-md mx-auto leading-relaxed">
              Specialized data and IT solutions built for complexity, delivered
              with precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white">
            {services.map((svc, i) => (
              <ServiceCard key={svc.title} {...svc} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#3AADA0] border border-mint-200 px-8 py-3 rounded-full hover:bg-mint-50 transition-all"
            >
              View All Services →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section-padding bg-warm-50">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs font-mono tracking-widest uppercase text-[#5EC4B5] mb-4">
                Why KJs
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-[#444444] mb-6 leading-tight">
                Where Strategy Meets
                <span className="italic text-[#3AADA0]"> Execution</span>
              </h2>
              <p className="text-[#7A8B85] font-light leading-relaxed mb-8">
                With over 15 years of international consulting experience, we've
                partnered with some of the world's most data-intensive
                organizations across Banking, Pharma, Retail, and Telecom to
                deliver transformational results.
              </p>
              <div className="space-y-4">
                {[
                  "Certified Ab Initio architects with enterprise-scale delivery",
                  "Industry-recognized Data Governance frameworks",
                  "End-to-end Data Strategy from vision to implementation",
                  "Global delivery model with local market expertise",
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 w-4 h-4 rounded-full bg-mint-100 border border-mint-200 flex items-center justify-center flex-shrink-0">
                      <span className="block w-1.5 h-1.5 rounded-full bg-[#5EC4B5]" />
                    </span>
                    <span className="text-sm text-[#7A8B85] font-light leading-relaxed">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-[#3AADA0] hover:gap-3 transition-all"
              >
                Our Story →
              </Link>
            </motion.div>

            {/* Right — abstract visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Main Image */}
                <div className="overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                    alt="Data Consulting"
                    className="w-full h-[420px] object-cover"
                  />
                </div>

                {/* Soft Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/60 via-transparent to-mint-50/40 pointer-events-none" />

                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg px-6 py-4 border border-mint-100"
                >
                  <div className="text-xl font-semibold text-[#3AADA0]">
                    15+
                  </div>
                  <div className="text-xs text-[#7A8B85]">Years Experience</div>
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-6 -right-6 bg-mint-50 border border-mint-200 px-4 py-2 rounded-full text-xs text-[#3AADA0]"
                >
                  Trusted Experts
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Strip */}
      {/* Industries Section */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          {/* Heading */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-mono tracking-widest uppercase text-[#5EC4B5] mb-4 block">
              Industries
            </span>
            <h2 className="font-display text-4xl font-light text-[#444444]">
              Sectors We Serve
            </h2>
          </motion.div>

          {/* Industries Data */}
          {/*
      NOTE: You can move this outside component if needed
    */}
          {(() => {
            const industries = [
              {
                label: "Banking",
                image: bank,
              },
              {
                label: "Pharma",
                image: pharma,
              },
              {
                label: "Retail",
                image:
                  "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a",
              },
              {
                label: "Telecom",
                image: telecom,
              },
            ];

            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {industries.map((industry, i) => (
                  <motion.div
                    key={industry.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                  >
                    {/* Image */}
                    <img
                      src={industry.image}
                      alt={industry.label}
                      className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Text */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-white text-lg font-medium tracking-wide">
                        {industry.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            );
          })()}

          {/* CTA */}
          <div className="text-center mt-10">
            <Link
              to="/industries"
              className="text-sm text-[#5EC4B5] font-medium hover:underline underline-offset-4"
            >
              Explore our industry expertise →
            </Link>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          {/* Heading */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-mono tracking-widest uppercase text-neutral-600 mb-14"
          >
            Trusted by leading enterprises worldwide
          </motion.p>

          {/* Horizontal Scroll */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-16 items-center w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Duplicate for infinite loop */}
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 min-w-[120px]"
                >
                  {/* Logo Card */}
                  <div className="w-28 h-28 flex items-center justify-center rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain opacity-80 hover:opacity-100 transition"
                    />
                  </div>

                  {/* Name */}
                  <span className="text-xs text-[#7A8B85] font-light">
                    {client.name}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Left Fade */}
            <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent" />

            {/* Right Fade */}
            <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent" />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding relative overflow-hidden">
        {/* 🎥 Background Video */}
        <div className="absolute inset-0">
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-110"
          >
            <source src="/338208.mp4" type="video/mp4" />
          </motion.video>

          {/* 🔥 Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* 🎨 Brand gradient tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3AADA0]/30 via-transparent to-[#5EC4B5]/20 mix-blend-overlay" />
        </div>

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')]" />

        <div className="container-xl relative z-10">
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-[2rem] 
      bg-white/10 backdrop-blur-2xl 
      border border-white/20 
      shadow-[0_30px_120px_rgba(0,0,0,0.25)] 
      p-12 md:p-20 text-center overflow-hidden"
          >
            {/* ✨ Glow lighting */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#5EC4B5]/20 rounded-full blur-[120px]" />
            <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#3AADA0]/20 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-xs font-mono tracking-[0.35em] uppercase text-white/70 block mb-6">
                Get In Touch
              </span>

              <h2 className="font-display text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
                Turn Your Data Into{" "}
                <span className="text-[#5EC4B5] font-medium">
                  Strategic Advantage
                </span>
              </h2>

              <p className="text-white/80 text-lg font-light mb-10 leading-relaxed">
                Partner with KJs Data Consulting to uncover insights, optimize
                decisions, and build scalable data-driven systems that actually
                move the needle.
              </p>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-10 py-4 rounded-full 
          bg-gradient-to-r from-[#3AADA0] to-[#5EC4B5] 
          text-white text-sm font-medium 
          shadow-[0_10px_40px_rgba(58,173,160,0.4)] 
          hover:shadow-[0_25px_80px_rgba(58,173,160,0.6)]
          transition-all duration-300 hover:-translate-y-1"
              >
                Start the Conversation
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
