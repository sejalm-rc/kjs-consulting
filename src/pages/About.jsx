import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import hero from "../assets/about-bg.jpg"
import bank from "../assets/bank.jpg";
import pharma from "../assets/pharma.jpg";
import telecom from "../assets/telecom.jpg";
import retail from "../assets/retail.png";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const values = [
  {
    image: bank,
    title: 'Precision',
    description: 'Every engagement is designed with meticulous care — from scoping to final delivery.',
  },
  {
    image: pharma,
    title: 'Partnership',
    description: 'We embed with your teams, not just consult from the sidelines.',
  },
  {
    image: telecom,
    title: 'Global Lens',
    description: 'International experience across continents, industries, and regulatory landscapes.',
  },
  {
    image: bank,
    title: 'Results-First',
    description: 'We measure our success by the business outcomes our clients achieve.',
  },
]

export default function About() {
  return (
    <div className="pt-20">

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
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#5EC4B5] mb-6 block">
              Our Story
            </span>

            <h1 className="font-display text-5xl md:text-7xl font-light mb-8 leading-tight">
              Built on 15 Years of
              <br />
              <span className="text-sky-600 font-medium">
                Global Expertise
              </span>
            </h1>

            <p className="text-md text-white font-light leading-relaxed max-w-2xl">
              KJs Data Consulting was founded with a singular mission: to help enterprises
              harness the full power of their data — with precision, depth, and true partnership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY (unchanged content, minor UI polish) */}
      <section className="section-padding bg-warm-50">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-light text-[#444444] mb-6">
                Our Consulting Philosophy
              </h2>

              <div className="space-y-5 text-[#7A8B85] font-light leading-relaxed">
                <p>
                  We believe that great data consulting is about more than technology. It's about understanding the human systems, governance structures, and strategic objectives that determine whether a data programme succeeds or fails.
                </p>
                <p>
                  Our team brings hands-on experience with the world's leading data platforms — especially Ab Initio — alongside deep expertise in Data Governance, Metadata Management, and Data Architecture.
                </p>
                <p>
                  Whether you're launching a data governance office, migrating to a modern data platform, or building an internal data marketplace, we've delivered it before — and we'll deliver it again for you.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              {[
                { year: '2009', event: 'Founded with a focus on Ab Initio ETL delivery' },
                { year: '2013', event: 'Expanded into Data Governance frameworks for Banking' },
                { year: '2017', event: 'Launched Data Strategy practice for Fortune 500 clients' },
                { year: '2020', event: 'Introduced Data Marketplace solutions across Pharma & Retail' },
                { year: '2024', event: 'Global presence across Europe, APAC, and Americas' },
              ].map((item, i) => (
                <div
                  key={item.year}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/60 backdrop-blur transition"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-mint-100 border border-mint-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-mono text-[#3AADA0] font-medium">
                        {item.year.slice(2)}
                      </span>
                    </div>
                    {i < 4 && <div className="w-px h-6 bg-mint-200 mt-1" />}
                  </div>

                  <div className="pt-1.5">
                    <span className="text-xs font-mono text-[#5EC4B5] block mb-0.5">
                      {item.year}
                    </span>
                    <span className="text-sm text-[#7A8B85] font-light">
                      {item.event}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* VALUES (icons → images, content unchanged) */}
      <section className="section-padding bg-white">
        <div className="container-xl">

          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-mono tracking-widest uppercase text-[#5EC4B5] mb-4 block">
              What Drives Us
            </span>

            <div className="w-16 h-[2px] bg-[#5EC4B5] mx-auto mb-6" />

            <h2 className="font-display text-4xl font-light text-[#444444]">
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-medium text-[#444444] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#7A8B85] font-light leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA (unchanged) */}
      <section className="section-padding bg-sage-50">
        <div className="container-xl text-center">
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-light text-[#444444] mb-4">
              Let's Build Something
              <span className="italic text-[#3AADA0]"> Remarkable</span>
            </h2>

            <p className="text-[#7A8B85] font-light mb-8 max-w-md mx-auto">
              Reach out and discover what 15+ years of data consulting expertise can do for your organization.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#3AADA0] text-white text-sm font-medium hover:bg-[#2E9B8F] transition-all shadow-[0_8px_30px_rgba(58,173,160,0.25)]"
            >
              Get in Touch →
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}