import {useRef} from "react";
import MenuProductCard from "./MenuProductCard.jsx";

const MenuCategoryBlock = ({ category, products }) => {
  const drag = useRef({
    startX: 0,
    scrollLeft: 0,
    isDown: false, 
    isDragging: false, 
    moved: false,
  });

  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-heading`}
      className="scroll-mt-36 py-10 sm:py-14"
    >
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="mb-1 font-sans text-sm text-muted">
            {products.length} {products.length === 1 ? "item" : "items"}
          </p>
          <h2
            id={`${category.id}-heading`}
            className="font-display text-3xl font-bold text-main sm:text-4xl"
          >
            {category.label}
          </h2>
        </div>
        <p className="hidden pb-1 font-sans text-sm text-muted sm:block">
          Scroll to explore
        </p>
      </div>

      {products.length > 0 ? (
        <div className="space-y-5">
          {[
            products.filter((_, index) => index % 2 === 0),
            products.filter((_, index) => index % 2 === 1),
          ].map((rowProducts, rowIndex) => (
              <div
                key={`${category.id}-row-${rowIndex}`}
                role="group"
                aria-label={`${category.label} product row ${rowIndex + 1}`}
                onMouseDown={(event) => {
                      if (event.button !== 0) return;
                      if (event.target.closest("button, input, textarea, a")) return;

                      drag.current.startX = event.clientX;
                      drag.current.scrollLeft = event.currentTarget.scrollLeft;
                      drag.current.isDown = true;
                      drag.current.isDragging = false; 
                      drag.current.moved = false;
                    }}
                    onMouseMove={(event) => {
                      if (!drag.current.isDown) return;

                      const distance = event.clientX - drag.current.startX;

                      if (Math.abs(distance) > 5) {
                        drag.current.isDragging = true;
                        drag.current.moved = true;
                      }

                      if (!drag.current.isDragging) return;

                      event.currentTarget.scrollLeft =
                        drag.current.scrollLeft - distance;
                      event.preventDefault();
                    }}
                    onMouseUp={() => {
                      drag.current.isDown = false;
                      drag.current.isDragging = false;
                    }}
                    onMouseLeave={() => {
                      drag.current.isDown = false;
                      drag.current.isDragging = false;
                    }}
                    onClickCapture={(event) => {
                      if (!drag.current.moved) return;
                      event.preventDefault();
                      event.stopPropagation();
                      drag.current.moved = false;
                    }}
                className="select-none overflow-x-auto overscroll-x-contain pb-3 cursor-grab active:cursor-grabbing"
              >
                <div
                  className={`flex w-max gap-4 sm:gap-5 ${
                    rowIndex === 1 ? "flex-row-reverse" : ""
                  }`}
                >
                  {rowProducts.map((product) => (
                    <div
                      key={product.id}
                      className="w-[min(20rem,82vw)] shrink-0 sm:w-88"
                    >
                      <MenuProductCard product={product} />
                    </div>
                  ))}
                </div>
              </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-primary/60 px-5 py-8 font-sans text-muted">
          We’re preparing this part of the menu. Check back soon.
        </div>
      )}
    </section>
  );
};

export default MenuCategoryBlock;