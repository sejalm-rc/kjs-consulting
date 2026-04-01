import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hero from "../assets/about-bg.jpg";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const industries = [
  {
    id: "banking",
    icon: "🏦",
    label: "Banking & Financial Services",
    bg: "bg-mint-50",
    border: "border-mint-100",
    accent: "text-[#3AADA0]",
    tagline: "Regulatory precision. Data confidence.",
    description:
      "Financial institutions operate in one of the most data-intensive, heavily regulated environments in the world. We help banks and financial services firms build the data foundations needed to satisfy regulators, reduce risk, and unlock commercial value from their data assets.",
    useCases: [
      "BCBS 239 Data Risk Aggregation compliance",
      "GDPR & data privacy architecture",
      "Credit risk data pipelines with Ab Initio",
      "Enterprise Data Governance Office setup",
      "Regulatory reporting automation",
      "Data lineage for audit & traceability",
    ],
    clients: "Tier 1 & Tier 2 banks across Europe and APAC",
  },
  {
    id: "pharma",
    icon: "💊",
    label: "Pharmaceuticals & Life Sciences",
    bg: "bg-sage-50",
    border: "border-sage-100",
    accent: "text-[#5EC4B5]",
    tagline: "From lab to launch — data that performs.",
    description:
      "In pharma, data integrity is not just a competitive advantage — its a regulatory and ethical imperative. We support life sciences organizations in governing clinical, commercial, and operational data with the rigour required by FDA, EMA, and GxP standards.",
    useCases: [
      "GxP-compliant Data Governance frameworks",
      "Clinical data integration & ETL pipelines",
      "Metadata management for trial datasets",
      "Data Marketplace for research teams",
      "Master Data Management (MDM) for products",
      "Real-world evidence data strategy",
    ],
    clients: "Global pharma manufacturers and CROs",
  },
  {
    id: "retail",
    icon: "🛍️",
    label: "Retail & Consumer Goods",
    bg: "bg-peach-50",
    border: "border-peach-100",
    accent: "text-[#E8A090]",
    tagline: "Customer intelligence. Supply chain clarity.",
    description:
      "Retail is a data-rich, margin-thin environment where the difference between winning and losing often comes down to how well an organisation understands its customers, inventory, and channels. We help retailers build the data capabilities that drive smarter decisions at every level.",
    useCases: [
      "Customer 360 data architecture",
      "Supply chain data integration & visibility",
      "Pricing & promotion analytics pipelines",
      "Loyalty & personalisation data platforms",
      "Data Governance for product master data",
      "Omnichannel data strategy",
    ],
    clients: "National and international retail chains",
  },
  {
    id: "telecom",
    icon: "📡",
    label: "Telecommunications",
    bg: "bg-lavender-50",
    border: "border-lavender-100",
    accent: "text-[#9B89D0]",
    tagline: "Network intelligence. Revenue assurance.",
    description:
      "Telecoms companies generate enormous volumes of network, customer, and usage data. The challenge is turning that volume into insight. We help telcos build the data infrastructure, governance, and self-service capabilities needed to compete in a digital-first market.",
    useCases: [
      "Network performance data pipelines",
      "Revenue assurance & fraud analytics",
      "Customer churn prediction data models",
      "BSS/OSS data integration with Ab Initio",
      "Data Marketplace for product & commercial teams",
      "Regulatory data retention & compliance",
    ],
    clients: "Tier 1 mobile operators and fixed-line providers",
  },
];

export default function Industries() {
  return (
    <div className="pt-20">
      {/* Hero */}
      {/* <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-lavender-50 opacity-60" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-sage-50 opacity-50" />
        <div className="container-xl relative z-10">
          <motion.div variants={sectionVariant} initial="hidden" animate="visible" className="max-w-2xl">
            <span className="text-xs font-mono tracking-widest uppercase text-[#5EC4B5] mb-4 block">Sectors We Serve</span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-[#444444] mb-4 leading-tight">
              Deep Industry
              <br />
              <span className="italic text-[#3AADA0]">Knowledge</span>
            </h1>
            <p className="text-lg text-[#7A8B85] font-light leading-relaxed">
              Fifteen years of working within the world's most data-intensive industries has given us an understanding that goes beyond technology — we know your business, your regulators, and your pressures.
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
              <span className="text-sky-600 font-medium">Deep Industry</span>
              <br />
              <span className="italic text-white">Knowledge</span>
            </h1>

            <p className="text-md text-white font-light leading-relaxed max-w-2xl">
              KJs Data Consulting was founded with a singular mission: to help
              enterprises harness the full power of their data — with precision,
              depth, and true partnership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="pb-24 bg-white mt-20">
        <div className="container-xl space-y-8">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`rounded-3xl border ${ind.bg} ${ind.border} p-10 md:p-14`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{ind.icon}</span>
                    <span
                      className={`text-xs font-mono tracking-widest uppercase ${ind.accent}`}
                    >
                      {ind.tagline}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-light text-[#444444] mb-4 leading-tight">
                    {ind.label}
                  </h2>
                  <p className="text-[#7A8B85] font-light leading-relaxed mb-4">
                    {ind.description}
                  </p>
                  <p className="text-xs font-mono text-[#aaa] tracking-wide">
                    Clients include:{" "}
                    <span className="text-[#7A8B85]">{ind.clients}</span>
                  </p>
                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-2 mt-6 text-sm font-medium ${ind.accent} hover:gap-3 transition-all`}
                  >
                    Discuss your industry challenge →
                  </Link>
                </div>

                {/* Right */}
                <div>
                  <h3 className="text-xs font-medium tracking-widest uppercase text-[#aaa] mb-5">
                    Use Cases
                  </h3>
                  <ul className="space-y-3">
                    {ind.useCases.map((uc) => (
                      <li
                        key={uc}
                        className="flex items-start gap-3 text-sm text-[#7A8B85] font-light"
                      >
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${ind.accent.replace("text-", "bg-")}`}
                        />
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom stats */}
      <section className="section-padding bg-warm-50 border-t border-mint-100">
        <div className="container-xl">
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-light text-[#444444]">
              Proven at Scale
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                number: "4",
                label: "Industries",
                sub: "Banking · Pharma · Retail · Telecom",
              },
              {
                number: "15+",
                label: "Years",
                sub: "International consulting experience",
              },
              {
                number: "3",
                label: "Continents",
                sub: "Europe · APAC · Americas",
              },
              {
                number: "50+",
                label: "Engagements",
                sub: "Delivered globally",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-white border border-mint-100 p-8 text-center"
              >
                <div className="font-display text-4xl text-[#3AADA0] font-light mb-1">
                  {stat.number}
                </div>
                <div className="font-body text-sm font-medium text-[#444444] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#aaa] font-light">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage-50">
        <div className="container-xl text-center">
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-light text-[#444444] mb-4">
              Your industry. Your challenge.
              <br />
              <span className="italic text-[#3AADA0]">Our expertise.</span>
            </h2>
            <p className="text-[#7A8B85] font-light mb-8 max-w-md mx-auto">
              Every engagement starts with a conversation. Let's discuss your
              specific context.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#3AADA0] text-white text-sm font-medium hover:bg-[#2E9B8F] transition-all shadow-[0_8px_30px_rgba(58,173,160,0.25)]"
            >
              Start a Conversation →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
