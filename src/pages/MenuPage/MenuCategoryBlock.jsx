import { useEffect, useRef, useState } from "react";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

// Product preview: photo area, then product details and price.
const MenuProductCard = ({ product }) => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [sugar, setSugar] = useState(50);
  const [ice, setIce] = useState("Normal");

  const openOrder = () => {
    setQuantity(1);
    setSugar(50);
    setIce("Normal");
    setIsOrderOpen(true);
  };

  useEffect(() => {
    if (!isOrderOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const bodyPaddingRight = parseFloat(
      window.getComputedStyle(document.body).paddingRight,
    );
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${bodyPaddingRight + scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [isOrderOpen]);

  return (
    <>
      <article
        onClick={openOrder}
        className="flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-primary shadow-md"
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="aspect-4/3 w-full object-cover"
          />
        ) : (
          <div className="flex aspect-4/3 w-full flex-col items-center justify-center gap-2 bg-footbg px-4 text-center font-sans text-sm text-muted">
            <span className="text-2xl" aria-hidden="true">📷</span>
            <span>We're looking for This picture</span>
          </div>
        )}
        <div className="flex flex-1 flex-col p-4">
          <h3 className="font-display text-lg font-semibold text-main">
            {product.name}
          </h3>
          <p className="mt-1 flex-1 font-sans text-sm leading-relaxed text-muted">
            {product.description}
          </p>
          <p className="mt-4 font-sans text-sm font-semibold text-main">
            {formatPrice(product.price)}
          </p>
        </div>
      </article>

      {isOrderOpen && (
        <div
          onClick={() => setIsOrderOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <article
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90dvh] w-full max-w-md overflow-y-auto rounded-2xl bg-primary shadow-xl"
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="aspect-4/3 w-full object-cover"
              />
            ) : (
              <div className="flex aspect-4/3 w-full items-center justify-center bg-footbg font-sans text-muted">
                Picture coming soon
              </div>
            )}
            <div className="p-5">
              <h2 className="font-display text-2xl font-semibold text-main">
                {product.name}
              </h2>
              <p className="mt-2 font-sans text-sm text-muted">
                {product.description}
              </p>
              {product.category.toLowerCase() === "drinks" && (
                <div className="mt-5 space-y-4">
                  <fieldset>
                    <legend className="mb-2 font-sans text-sm font-semibold text-main">
                      Sugar
                    </legend>
                    <div className="grid grid-cols-3 gap-2">
                      {[0, 25, 50, 75, 100].map((level) => (
                        <button
                          key={level}
                          type="button"
                          aria-pressed={sugar === level}
                          onClick={() => setSugar(level)}
                          className={`rounded-lg border px-3 py-2 font-sans text-sm ${
                            sugar === level
                              ? "border-main bg-main text-primary"
                              : "border-border text-main hover:bg-primary-hover"
                          }`}
                        >
                          {level}%
                        </button>
                      ))}
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="mb-2 font-sans text-sm font-semibold text-main">
                      Ice
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {["No Ice", "Less", "Normal", "Extra"].map((choice) => (
                        <button
                          key={choice}
                          type="button"
                          aria-pressed={ice === choice}
                          onClick={() => setIce(choice)}
                          className={`rounded-lg border px-3 py-2 font-sans text-sm ${
                            ice === choice
                              ? "border-main bg-main text-primary"
                              : "border-border text-main hover:bg-primary-hover"
                          }`}
                        >
                          {choice}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                </div>
              )}
              <div className="mt-5 flex items-center justify-between">
                <span className="font-sans text-sm font-semibold text-main">
                  Quantity
                </span>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    disabled={quantity <= 1}
                    onClick={() => setQuantity((current) => current - 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-lg text-main disabled:opacity-40"
                  >
                    −
                  </button>
                  <span className="min-w-5 text-center font-sans text-main">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-lg text-main"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="font-sans font-semibold text-main">Total</span>
                <span className="font-sans text-lg font-bold text-main">
                  {formatPrice(product.price * quantity)}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOrderOpen(false)}
                className="mt-5 w-full rounded-xl bg-main px-4 py-3 font-sans font-semibold text-primary transition-colors hover:bg-main/90"
              >
                Add to Cart
              </button>
            </div>
          </article>
        </div>
      )}
    </>
  );
};



const MenuCategoryBlock = ({ category, products }) => {
  const drag = useRef({
    startX: 0,
    scrollLeft: 0,
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
                  drag.current.startX = event.clientX;
                  drag.current.scrollLeft = event.currentTarget.scrollLeft;
                  drag.current.isDragging = true;
                  drag.current.moved = false;
                  event.preventDefault();
                }}
                onMouseMove={(event) => {
                  if (!drag.current.isDragging) return;
                  const distance = event.clientX - drag.current.startX;
                  if (Math.abs(distance) > 5) drag.current.moved = true;
                  event.currentTarget.scrollLeft =
                    drag.current.scrollLeft - distance;
                }}
                onMouseUp={() => {
                  drag.current.isDragging = false;
                }}
                onMouseLeave={() => {
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
