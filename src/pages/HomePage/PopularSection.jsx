
import { Link } from "react-router-dom";
import newYorkCheesecake from "../../assets/menu/newyorkcheesecake.jpg";
import americano from "../../assets/menu/americano.jpg";
import butterCroissant from "../../assets/menu/buttercroissant.jpg";

const PopularSection = () => {
  const popularItems = [
    { name: "Americano", category: "Coffee", image: americano },
    { name: "Butter Croissant", category: "Freshly baked", image: butterCroissant },
    { name: "New York Cheesecake", category: "Something sweet", image: newYorkCheesecake },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 font-sans text-sm tracking-[0.2em] text-muted">
            A FEW FAVORITES
          </p>
          <h2 className="font-display text-3xl font-bold text-main md:text-4xl">
            Popular picks
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
        {popularItems.map((item) => (
          <article
            key={item.name}
            className="overflow-hidden rounded-2xl bg-primary shadow-md transition-transform duration-200 hover:-translate-y-1"
          >
            <img
              src={item.image}
              alt={item.name}
              className="aspect-4/3 w-full object-cover"
            />
            <div className="p-5">
              <p className="mb-1 font-sans text-sm text-muted">{item.category}</p>
              <h3 className="font-display text-xl font-semibold text-main">
                {item.name}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PopularSection;