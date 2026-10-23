import { useState } from "react";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

const MenuProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const total = quantity * product.price;
  const orderReminder =
    quantity >= 10 ? 10 + Math.floor((quantity - 10) / 5) * 5 : null;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-primary shadow-md">
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[4/3] w-full object-cover"
        />
      ) : (
        <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 bg-footbg px-4 text-center font-sans text-sm text-muted">
          <span className="text-2xl" aria-hidden="true">📷</span>
          <span>Photo needed</span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-semibold text-main">
          {product.name}
        </h3>
        <p className="mt-1 flex-1 font-sans text-sm leading-relaxed text-muted">
          {product.description}
        </p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <div className="font-sans text-sm">
            <p className="text-muted">{formatPrice(product.price)} each</p>
            <p className="mt-1 font-semibold text-main">
              Total: {formatPrice(total)}
            </p>
          </div>
          {quantity === 0 ? (
            <button
              type="button"
              onClick={() => setQuantity(1)}
              aria-label={`Add ${product.name}`}
              className="rounded-full bg-main px-4 py-2 font-sans text-sm font-medium text-primary transition-colors hover:bg-logo"
            >
              Add
            </button>
          ) : (
            <div className="flex items-center gap-3 rounded-full border border-border px-2 py-1">
              <button
                type="button"
                onClick={() => setQuantity((current) => current - 1)}
                aria-label={`Remove one ${product.name}`}
                className="grid size-8 place-items-center rounded-full text-main hover:bg-primary-hover"
              >
                −
              </button>
              <span className="min-w-4 text-center font-sans text-sm text-main">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                aria-label={`Add one ${product.name}`}
                className="grid size-8 place-items-center rounded-full text-main hover:bg-primary-hover"
              >
                +
              </button>
            </div>
          )}
        </div>
        {orderReminder !== null && (
          <p
            role="status"
            className="mt-3 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 font-sans text-xs leading-relaxed text-amber-950"
          >
            Large order reminder ({orderReminder}+): {quantity}{" "}
            {product.name} = {formatPrice(total)}. Please double-check the
            quantity.
          </p>
        )}
      </div>
    </article>
  );
};

const MenuCategoryBlock = ({ category, products }) => {
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
                className="overflow-x-auto overscroll-x-contain pb-3"
              >
                <div
                  className={`flex w-max gap-4 sm:gap-5 ${
                    rowIndex === 1 ? "flex-row-reverse" : ""
                  }`}
                >
                  {rowProducts.map((product) => (
                    <div
                      key={product.id}
                      className="w-[min(20rem,82vw)] shrink-0 sm:w-[22rem]"
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
