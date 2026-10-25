const formatPrice = (price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

// Product preview: photo area, then product details with price and Add action.
const MenuProductCard = ({ product }) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-primary shadow-md">
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
