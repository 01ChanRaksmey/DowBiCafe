
import { motion } from 'motion/react'

const VisitInfo = () => {
  return (
      <section className="min-h-[80dvh] flex items-center px-6 py-12">
        <div className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Introduction */}
          <div className="space-y-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Welcome to Our Café
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-main leading-tight">
              More than just a cup of coffee.
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-muted">
              We are a cozy neighborhood café built around good coffee,
              freshly prepared food, and meaningful everyday moments.
              Whether you're meeting friends, getting some work done,
              or simply taking a break, there's always a place for you here.
            </p>
          </div>

          {/* Visit Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="rounded-2xl border border-border bg-primary-hover p-6 space-y-4">
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-main/10">
                <span className="text-xl">📍</span>
              </div>

              <h2 className="font-display text-xl font-bold text-main">
                Our Address
              </h2>

              <p className="font-happy text-muted">
                St. 271D, DowDing Boulevard,
                Old Market Quarter, Daun Penh,
                Phnom Penh, Cambodia
              </p>

              <a
                href="#location"
                className="inline-block text-sm font-semibold text-main hover:underline"
              >
                Find us →
              </a>
            </motion.div>

            {/* Opening Hours */}
            <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="rounded-2xl border border-border bg-primary-hover p-6 space-y-4">
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-main/10">
                <span className="text-xl">🕒</span>
              </div>

              <h2 className="font-display text-xl font-bold text-main">
                Opening Hours
              </h2>

              <div className="space-y-3 text-sm text-muted">
                <p>
                  <span className="block font-semibold font-happy text-main">
                    Mon–Fri
                  </span>
                  7:00 AM – 6:00 PM
                </p>

                <p>
                  <span className="block font-semibold text-main">
                    Sat–Sun
                  </span>
                  7:00 AM – 3:00 PM
                </p>
              </div>

              <span className="inline-block rounded-full bg-main/10 px-3 py-1 text-xs font-semibold text-main">
                Open Daily
              </span>
            </motion.div>

          </div>
        </div>
      </section>
  )
}

export default VisitInfo
