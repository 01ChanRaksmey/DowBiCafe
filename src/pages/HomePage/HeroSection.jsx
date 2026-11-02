
import heroImage from "../../assets/herocafe-optimized.jpg";
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
      <section className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-primary shadow-xl md:min-h-136 md:grid-cols-2 mb-8 md:mb-10">
        <div
          className="min-h-64 bg-cover bg-center md:min-h-full"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label="A cup of coffee on a wooden table"
        />
        <div className="flex flex-col items-start justify-center px-6 py-10 md:justify-start md:px-10 md:pt-24 lg:px-16">
          <p className="mb-4 font-sans text-sm tracking-[0.4em] text-main">
            COFFEE · PASTRIES · GOOD COMPANY
          </p>
          <h1 className="mb-5 font-display text-4xl font-bold text-main md:text-5xl lg:text-6xl">
            Good coffee. Better moments.
          </h1>
          <p className="mb-8 max-w-xl font-happy text-lg italic leading-relaxed text-muted md:text-xl">
            Settle in with a freshly brewed coffee, a warm pastry, and a little
            time to yourself.
          </p>
          <Link
            to="/menu" className="inline-block rounded-full bg-main px-6 py-3 font-sans font-semibold text-primary transition-transform hover:scale-105">
            Explore the Menu
          </Link>
        </div>
      </section>
  )
}

export default HeroSection;