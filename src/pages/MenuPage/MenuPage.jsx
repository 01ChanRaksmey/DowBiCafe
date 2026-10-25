import { useEffect, useRef, useState } from "react";
import menuHero from "../../assets/menuhero.jpg";
import products from "../../data/product.js";
import MenuCategoryBlock from "./MenuCategoryBlock.jsx";

const categories = [
  { id: "drinks", label: "Drinks" },
  { id: "bakery", label: "Bakery" },
  { id: "desserts", label: "Desserts" },
  { id: "breakfast", label: "Breakfast" },
  { id: "sandwiches", label: "Sandwiches" },
  { id: "snacks", label: "Snacks" },
  { id: "laptops", label: "laptops" },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const categoryNavRef = useRef(null);

  useEffect(() => {
    let frameId = null;

    const updateActiveCategory = () => {
      frameId = null;
      const stickyNavBottom =
        categoryNavRef.current?.getBoundingClientRect().bottom ?? 0;
      const activationLine = stickyNavBottom + 180;
      let currentCategory = categories[0].id;

      for (const { id } of categories) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= activationLine) {
          currentCategory = id;
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        currentCategory = categories[categories.length - 1].id;
      }
      setActiveCategory((current) =>
        current === currentCategory ? current : currentCategory,
      );
    };

    const scheduleUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateActiveCategory);
      }
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    updateActiveCategory();

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>

       {/* Hero Section */}

      <section
        className="relative flex h-[50dvh] items-end overflow-hidden bg-cover bg-center"
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

      <nav
        ref={categoryNavRef}
        aria-label="Menu categories"
        className="sticky top-[77px] z-40 border-y border-border bg-primary shadow-md"
      >
        <div className="overflow-x-auto">
          <div className="mx-auto flex w-max min-w-full max-w-7xl gap-2 px-4 py-3 sm:gap-3 sm:px-8 md">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                onClick={() => setActiveCategory(category.id)}
                aria-current={
                  activeCategory === category.id ? "location" : undefined
                }
                className={`shrink-0 rounded-full border px-5 py-2 font-sans text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "border-main bg-main text-primary"
                    : "border-border bg-primary text-main hover:bg-primary-hover"
                }`}
              >
                {category.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl divide-y divide-border px-5 pb-12 sm:px-8 lg:px-12">
        {categories.map((category) => (
          <MenuCategoryBlock
            key={category.id}
            category={category}
            products={products.filter(
              (product) =>
                product.category.toLowerCase() === category.label.toLowerCase(),
            )}
          />
        ))}
      </div>
    </>
  );
};

export default MenuPage;
