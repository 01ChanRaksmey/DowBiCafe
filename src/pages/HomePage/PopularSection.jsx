
import { Link } from "react-router-dom";
import products from "../../data/product.js";
import menuCategories from "../../data/menuCategories.js";

const PopularSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 font-sans text-sm tracking-[0.2em] text-muted">
            FIND YOUR FAVORITE
          </p>
          <h2 className="font-display text-3xl font-bold text-main md:text-4xl">
            Explore the menu
          </h2>
        </div>
        <Link
          to="/menu"
          className="shrink-0 font-sans font-semibold text-main underline-offset-4 hover:underline"
        >
          Full menu
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {menuCategories.map((category) => {
          const representativeProduct = products.find(
            (product) =>
              product.category.toLowerCase() === category.label.toLowerCase(),
          );

          return (
            <Link
              key={category.id}
              to={`/menu#${category.id}`}
              aria-label={`Explore ${category.label}: ${category.description}`}
              className="group overflow-hidden rounded-2xl border border-border bg-primary shadow-md transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-main"
            >
              <div className="relative overflow-hidden">
                <img
                  src={representativeProduct.image}
                  alt=""
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
                <h3 className="absolute bottom-4 left-4 font-display text-xl font-semibold text-white sm:bottom-5 sm:left-5 sm:text-2xl">
                  {category.label}
                </h3>
              </div>
              <p className="p-4 font-sans text-sm text-muted sm:p-5">
                {category.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default PopularSection;