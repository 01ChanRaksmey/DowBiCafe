import { useEffect, useState } from "react";
import { useCart } from "../../Context/useCart.js";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

const MenuProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [sugar, setSugar] = useState(50);
  const [ice, setIce] = useState("Normal");
  const [comment, setComment] = useState("");

  const openOrder = () => {
    setQuantity(1);
    setSugar(50);
    setIce("Normal");
    setComment(""); 
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

  // Handle adding item 
  const handleAddToCart = () => {
    const isDrink = product.category.toLowerCase() === "drinks";

    const cartItemId = isDrink 
      ? `${product.id}-${sugar}sugar-${ice}ice` 
      : `${product.id}`;

    const cartItemPayload = {
      ...product,
      cartItemId,
      quantity,
      options: isDrink ? { sugar: `${sugar}%`, ice } : null,
      comment,
    };

    addToCart(cartItemPayload);
    setIsOrderOpen(false); // Close modal after adding
  };

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
            className="aspect-4/3 w-full object-cover "
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
            className="max-h-[80dvh] w-full max-w-md overflow-y-auto rounded-2xl bg-primary shadow-xl"
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
                    <div className="grid grid-cols-5 gap-2">
                      {[0, 25, 50, 75, 100].map((level) => (
                        <button
                          key={level}
                          type="button"
                          aria-pressed={sugar === level}
                          onClick={() => setSugar(level)}
                          className={`rounded-lg border px-1 py-2 font-sans text-xs sm:px-3 sm:text-sm ${
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
              <div className="mt-5 flex items-center justify-between border-y border-border py-4">
                <span className="font-sans font-semibold text-main">Total</span>
                <span className="font-sans text-lg font-bold text-main">
                  {formatPrice(product.price * quantity)}
                </span>
              </div>
              <div className="mt-5 text-muted">
                <label htmlFor="comment">Anything We should know?</label>
                <textarea 
                  name="comment" 
                  id="comment" 
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="p-2 text-[14px] border border-border w-full min-h-20 rounded-lg text-main" 
                  maxLength={300} 
                  placeholder="Comment"
                ></textarea>
              </div>
              <button
                type="button"
                onClick={handleAddToCart} 
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

export default MenuProductCard;