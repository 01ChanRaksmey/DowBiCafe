
import { motion } from "motion/react";

const CafeHighlightsSection = () => {
  const features = [
    {
      title: "Coffee made with care",
      description: "Thoughtfully brewed for a comforting cup, any time of day.",
    },
    {
      title: "Fresh little treats",
      description: "Pastries and sweet bites made to enjoy alongside your coffee.",
    },
    {
      title: "Something for everyone",
      description: "From bold espresso to creamy lattes and refreshing tea.",
    },
    {
      title: "A cozy place to pause",
      description: "Settle in, catch up with a friend, or enjoy a quiet moment.",
    },
    {
      title: "Made for good company",
      description: "A welcoming corner for everyday visits and little celebrations.",
    },
    {
      title: "Seasonal sips and treats",
      description: "A rotating little something to make each visit feel new.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <div className="mb-8 text-center">
        <p className="mb-2 font-sans text-sm tracking-[0.2em] text-muted">
          THE DOWBI DIFFERENCE
        </p>
        <h2 className="font-display text-3xl font-bold text-main md:text-4xl">
          The little things make it special.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="min-w-0 rounded-2xl border border-logo/15 bg-primary p-5 shadow-lg shadow-logo/10 hover:shadow-xl hover:shadow-logo/20"
          >
            <h3 className="mb-3 wrap-break-word font-display text-xl font-semibold text-main">
              {feature.title}
            </h3>
            <p className="wrap-break-word font-sans text-sm leading-relaxed text-muted">
              {feature.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default CafeHighlightsSection
