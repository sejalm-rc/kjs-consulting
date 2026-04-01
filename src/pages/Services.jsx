import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hero from "../assets/about-bg.jpg";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const services = [
  {
    id: "governance",
    color: "mint",
    image: "https://qinfo.co.za/wp-content/uploads/2022/11/ser5.jpg",
    bg: "bg-mint-50",
    border: "border-mint-100",
    accent: "text-[#3AADA0]",
    title: "Data Governance",
    tagline: "Trusted data. Every layer.",
    description:
      "We help organizations define the policies, processes, and accountability structures required to treat data as a strategic enterprise asset. Our governance frameworks are practical, scalable, and aligned with regulatory requirements across GDPR, BCBS 239, and beyond.",
    capabilities: [
      "Data Governance Operating Model Design",
      "Data Quality Management Frameworks",
      "Metadata & Business Glossary Implementation",
      "Data Stewardship Programmes",
      "Regulatory Compliance (GDPR, BCBS 239, DORA)",
      "Data Lineage & Impact Analysis",
    ],
  },
  {
    id: "abinitio",
    color: "sage",
    image: "https://qinfo.co.za/wp-content/uploads/2022/11/ser1.jpg",
    bg: "bg-sage-50",
    border: "border-sage-100",
    accent: "text-[#5EC4B5]",
    title: "Ab Initio Development",
    tagline: "The deepest Ab Initio expertise. Period.",
    description:
      "As certified Ab Initio specialists, we design, develop, and optimize the entire Ab Initio platform stack — from GDE graph development to Co>Operating System configuration and Control Center automation. Whether you're building from scratch or optimizing legacy pipelines, we deliver.",
    capabilities: [
      "Ab Initio GDE Graph Development",
      "ETL Pipeline Architecture & Optimization",
      "Co>Operating System Administration",
      "Ab Initio Control Center & Workflow",
      "Performance Tuning & Scalability",
      "Platform Migrations & Upgrades",
    ],
  },
  {
    id: "marketplace",
    color: "peach",
    image: "https://qinfo.co.za/wp-content/uploads/2022/11/ser2.jpg",
    bg: "bg-peach-50",
    border: "border-peach-100",
    accent: "text-[#E8A090]",
    title: "Data Marketplace",
    tagline: "Data discovery, simplified.",
    description:
      "We build internal data marketplaces that allow teams to discover, access, and consume data products with speed and confidence. By combining technical architecture with data product thinking, we create self-service environments that reduce time-to-insight dramatically.",
    capabilities: [
      "Data Product Design & Architecture",
      "Self-Service Access & Onboarding Workflows",
      "Data Cataloguing & Discovery Platforms",
      "Access Control & Entitlement Frameworks",
      "Data Contract Implementation",
      "Metrics Layer & Semantic Modelling",
    ],
  },
  {
    id: "strategy",
    color: "lavender",
    image: "https://qinfo.co.za/wp-content/uploads/2022/11/ser5.jpg",
    bg: "bg-lavender-50",
    border: "border-lavender-100",
    accent: "text-[#9B89D0]",
    title: "Data Strategy",
    tagline: "Align data to ambition.",
    description:
      "We work at the executive level to define enterprise data strategies that connect your organisation's data investments to business outcomes. Our approach combines maturity assessment, roadmap design, and organisational change to create lasting competitive advantage.",
    capabilities: [
      "Enterprise Data Strategy Roadmaps",
      "Data Maturity Assessments",
      "CDO Office Setup & Advisory",
      "Data Architecture Blueprint",
      "Technology Landscape Evaluation",
      "Organisational Data Culture Change",
    ],
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      {/* <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-mint-50 opacity-60" />
        <div className="container-xl relative z-10">
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <span className="text-xs font-mono tracking-widest uppercase text-[#5EC4B5] mb-4 block">
              What We Offer
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-[#444444] mb-4 leading-tight">
              Services Built for
              <br />
              <span className="italic text-[#3AADA0]">Enterprise Scale</span>
            </h1>
            <p className="text-lg text-[#7A8B85] font-light leading-relaxed">
              Four specialist practice areas. One integrated approach. Designed
              to address the full data lifecycle from strategy to execution.
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
              Sectors We Serve
              <br />
              <span className="text-sky-600 font-medium">
                Services Built for
              </span>
              <br />
              <span className="italic text-white">Enterprise Scale</span>
            </h1>

            <p className="text-md text-white font-light leading-relaxed max-w-2xl">
              Four specialist practice areas. One integrated approach. Designed
              to address the full data lifecycle from strategy to execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services detail */}
      <section className="pb-24 bg-white mt-20">
        <div className="container-xl space-y-8">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`rounded-3xl border ${svc.bg} ${svc.border} p-10 md:p-14`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm border border-[#EAF7F4]">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span
                        className={`text-xs font-mono tracking-widest uppercase ${svc.accent} block`}
                      >
                        {svc.tagline}
                      </span>
                    </div>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-light text-[#444444] mb-4">
                    {svc.title}
                  </h2>
                  <p className="text-[#7A8B85] font-light leading-relaxed">
                    {svc.description}
                  </p>
                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-2 mt-6 text-sm font-medium ${svc.accent} hover:gap-3 transition-all`}
                  >
                    Discuss this service →
                  </Link>
                </div>
                <div>
                  <h3 className="font-body text-xs font-medium tracking-widest uppercase text-[#aaa] mb-5">
                    Capabilities
                  </h3>
                  <ul className="space-y-3">
                    {svc.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-center gap-3 text-sm text-[#7A8B85] font-light"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${svc.accent.replace("text-", "bg-")}`}
                        />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-sage-50">
        <div className="container-xl text-center">
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-light text-[#444444] mb-4">
              Not sure which service fits?
            </h2>
            <p className="text-[#7A8B85] font-light mb-8 max-w-md mx-auto">
              Let's talk through your challenge and we'll identify the right
              approach together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#3AADA0] text-white text-sm font-medium hover:bg-[#2E9B8F] transition-all shadow-[0_8px_30px_rgba(58,173,160,0.25)]"
            >
              Book a Free Discovery Call →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
