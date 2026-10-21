import americanoImage from "../assets/menu/americano.jpg";
import cappuccinoImage from "../assets/menu/cappuccino.jpg";
import espressoImage from "../assets/menu/espresso.jpg";
import mochaImage from "../assets/menu/mocha.jpg";
import vanillaLatteImage from "../assets/menu/vanillalatte.jpg";

const products = [
  {
    id: "americano",
    name: "Americano",
    category: "Drinks",
    description: "Espresso balanced with hot water for a smooth, bold cup.",
    price: 2.5,
    image: americanoImage,
  },
  {
    id: "espresso",
    name: "Espresso",
    category: "Drinks",
    description: "A rich, concentrated shot with a layer of golden crema.",
    price: 2,
    image: espressoImage,
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    category: "Drinks",
    description: "Espresso topped with steamed milk and soft milk foam.",
    price: 3.5,
    image: cappuccinoImage,
  },
  {
    id: "vanilla-latte",
    name: "Vanilla Latte",
    category: "Drinks",
    description: "Espresso and steamed milk with a touch of vanilla.",
    price: 4,
    image: vanillaLatteImage,
  },
  {
    id: "mocha",
    name: "Mocha",
    category: "Drinks",
    description: "Espresso and steamed milk blended with chocolate.",
    price: 4,
    image: mochaImage,
  },
  {
    id: "flat-white",
    name: "Flat White",
    category: "Drinks",
    description: "A double espresso finished with silky steamed milk.",
    price: 3.75,
    image: null,
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    category: "Drinks",
    description: "Slow-steeped coffee served chilled and refreshingly smooth.",
    price: 3.5,
    image: null,
  },
  {
    id: "iced-latte",
    name: "Iced Latte",
    category: "Drinks",
    description: "Espresso and cold milk poured over ice.",
    price: 4,
    image: null,
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    category: "Drinks",
    description: "Earthy matcha whisked with creamy steamed milk.",
    price: 4.25,
    image: null,
  },
  {
    id: "chai-latte",
    name: "Chai Latte",
    category: "Drinks",
    description: "Spiced black tea blended with warm, creamy milk.",
    price: 4,
    image: null,
  },
];

const getProducts = (limit = products.length) => products.slice(0, limit);

export { getProducts, products };
export default products;