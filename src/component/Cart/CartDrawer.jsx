import { useCart } from "../../Context/CartContext.jsx";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop overlay */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/50 transition-opacity" 
      />
      <div className="absolute inset-y-0 right-0 w-full sm:w-1/2 flex max-w-full">
        <div className="w-full h-dvh bg-primary shadow-xl flex flex-col">
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <h2 className="font-display text-xl font-bold text-main">Your Cart</h2>
            <button
              onClick={onClose}
              className="text-muted hover:text-main text-xl font-bold px-2 py-1"
              aria-label="Close cart"
            >
              ✕
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 text-muted">
                <p className="text-lg">Your cart is empty.</p>
                <p className="text-sm mt-1">Add some delicious drinks or food from the menu!</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.cartItemId} 
                  className="flex gap-4 p-3 rounded-xl border border-border bg-footbg/30 items-center"
                >
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-lg shrink-0"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-main">{item.name}</h3>
                    
                    {/* Display Drink Options if they exist */}
                    {item.options && (
                      <div className="mt-0.5 text-xs text-muted space-x-2">
                        <span>Sugar: {item.options.sugar}</span>
                        <span>•</span>
                        <span>Ice: {item.options.ice}</span>
                      </div>
                    )}

                    {/* Display Comment note if it exists */}
                    {item.comment && (
                      <p className="mt-0.5 text-xs italic text-muted">Note: "{item.comment}"</p>
                    )}

                    <div className="mt-2 flex justify-between items-center">
                      <span className="font-sans font-bold text-main">
                        {formatPrice(item.price * item.quantity)}
                      </span>

                      {/* Quantity Changer Controls (+ and -) */}
                      <div className="flex items-center gap-2 border border-border rounded-lg px-2 py-1 bg-primary">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, -1)}
                          className="text-main hover:opacity-70 px-1 font-bold"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="font-sans text-sm text-main min-w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, 1)}
                          className="text-main hover:opacity-70 px-1 font-bold"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="mt-1 text-right">
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-xs text-red-500 hover:underline font-sans"
                      >
                        Remove item
                      </button>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-border px-6 py-4 space-y-4 bg-primary">
              <div className="flex justify-between items-center">
                <span className="font-sans font-semibold text-main">Subtotal</span>
                <span className="font-sans text-lg font-bold text-main">{formatPrice(subtotal)}</span>
              </div>
              <button
                onClick={() => {
                  alert("Proceeding to checkout!");
                }}
                className="w-full rounded-xl bg-main px-4 py-3 font-sans font-semibold text-primary transition-colors hover:bg-main/90 text-center"
              >
                Checkout Now
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}