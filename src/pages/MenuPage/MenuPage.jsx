import { useState } from "react";
import menuHero from "../../assets/menuhero.jpg";

const categories = [
  { id: "drinks", label: "Drinks" },
  { id: "bakery", label: "Bakery" },
  { id: "desserts", label: "Desserts" },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <>
      <section
        className="relative flex h-1/2 items-end overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(28, 18, 12, 0.62), rgba(28, 18, 12, 0.08) 78%), url("${menuHero}")`,
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
          <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[#F1E5D6]">
            MADE WITH CARE AT DOWBI CAFE
          </p>
          <h1 className="font-Courgette text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
            Our Menu
          </h1>
          <p className="mt-4 max-w-xl border-l-2 border-[#D6A85F] pl-4 font-happy text-base leading-relaxed text-white sm:text-lg">
            Find your coffee, something freshly baked, and a little treat to
            make your day.
          </p>
        </div>
      </section>
    </>
  );
};

export default MenuPage;
