import americanoImage from "../assets/menu/americano.jpg";
import cappuccinoImage from "../assets/menu/cappuccino.jpg";
import espressoImage from "../assets/menu/espresso.jpg";
import mochaImage from "../assets/menu/mocha.jpg";
import vanillaLatteImage from "../assets/menu/vanillalatte.jpg";
import butterCroissantImage from "../assets/menu/buttercroissant.jpg";
import newYorkCheesecakeImage from "../assets/menu/newyorkcheesecake.jpg";
import flatWhiteImage from "../assets/menu/flatwhite.jpg";
import coldBrewImage from "../assets/menu/coldbrew.jpg";
import icedLatteImage from "../assets/menu/icedlatte.jpg";
import matchaLatteImage from "../assets/menu/matchalatte.jpg";
import chaiLatteImage from "../assets/menu/chailatte.jpg";
import chocolateCroissantImage from "../assets/menu/chocolatecroissant.jpg";
import blueberryMuffinImage from "../assets/menu/blueberrymuffin.jpg";
import cinnamonRollImage from "../assets/menu/cinnamonroll.jpg";
import bananaBreadImage from "../assets/menu/bananabread.jpg";
import chocolateBrownieImage from "../assets/menu/chocolatebrownie.jpg";
import tiramisuImage from "../assets/menu/tiramisu.jpg";
import chocolateCakeImage from "../assets/menu/chocolate-cake.jpg";
import vanillaIceCreamImage from "../assets/menu/vanilla-ice-cream.jpg";
import pancakeStackImage from "../assets/menu/pancake-stack.jpg";
import avocadoToastImage from "../assets/menu/avocado-toast.jpg";
import breakfastOmeletteImage from "../assets/menu/breakfast-omelette.jpg";
import yogurtGranolaBowlImage from "../assets/menu/yogurt-granola-bowl.jpg";
import breakfastToastImage from "../assets/menu/breakfast-toast.jpg";
import chickenSandwichImage from "../assets/menu/chicken-sandwich.jpg";
import tunaSandwichImage from "../assets/menu/tuna-sandwich.jpg";
import eggSaladSandwichImage from "../assets/menu/egg-salad-sandwich.jpg";
import hamCheeseSandwichImage from "../assets/menu/ham-cheese-sandwich.jpg";
import veggieSandwichImage from "../assets/menu/veggie-sandwich.jpg";
import frenchFriesImage from "../assets/menu/french-fries.jpg";
import garlicToastImage from "../assets/menu/garlic-toast.jpg";
import chickenBitesImage from "../assets/menu/chicken-bites.jpg";
import onionRingsImage from "../assets/menu/onion-rings.jpg";
import mixedFruitCupImage from "../assets/menu/mixed-fruit-cup.jpg";

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
    id: "cold-brew",
    name: "Cold Brew",
    category: "Drinks",
    description: "Slow-steeped coffee served chilled and refreshingly smooth.",
    price: 3.5,
    image: coldBrewImage,
  },

  {
    id: "flat-white",
    name: "Flat White",
    category: "Drinks",
    description: "A double espresso finished with silky steamed milk.",
    price: 3.75,
    image: flatWhiteImage,
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
    id: "iced-latte",
    name: "Iced Latte",
    category: "Drinks",
    description: "Espresso and cold milk poured over ice.",
    price: 4,
    image: icedLatteImage,
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    category: "Drinks",
    description: "Earthy matcha whisked with creamy steamed milk.",
    price: 4.25,
    image: matchaLatteImage,
  },
  {
    id: "chai-latte",
    name: "Chai Latte",
    category: "Drinks",
    description: "Spiced black tea blended with warm, creamy milk.",
    price: 4,
    image: chaiLatteImage,
  },
  {
    id: "butter-croissant",
    name: "Butter Croissant",
    category: "Bakery",
    description: "A flaky, golden pastry baked with rich butter.",
    price: 3,
    image: butterCroissantImage,
  },
  {
    id: "chocolate-croissant",
    name: "Chocolate Croissant",
    category: "Bakery",
    description: "A buttery, flaky croissant filled with smooth chocolate.",
    price: 3.5,
    image: chocolateCroissantImage,
  },
  {
    id: "blueberry-muffin",
    name: "Blueberry Muffin",
    category: "Bakery",
    description: "A soft, freshly baked muffin filled with juicy blueberries.",
    price: 3,
    image: blueberryMuffinImage,
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    category: "Bakery",
    description: "A tender swirled pastry with cinnamon and a light glaze.",
    price: 3.5,
    image: cinnamonRollImage,
  },
  {
    id: "banana-bread",
    name: "Banana Bread",
    category: "Bakery",
    description: "A moist slice of sweet banana loaf, baked in-house.",
    price: 3,
    image: bananaBreadImage,
  },
  {
    id: "new-york-cheesecake",
    name: "New York Cheesecake",
    category: "Desserts",
    description: "Creamy baked cheesecake on a buttery biscuit base.",
    price: 5,
    image: newYorkCheesecakeImage,
  },
  {
    id: "chocolate-brownie",
    name: "Chocolate Brownie",
    category: "Desserts",
    description: "A rich, fudgy chocolate brownie with a crackly top.",
    price: 3.5,
    image: chocolateBrownieImage,
  },
  {
    id: "tiramisu",
    name: "Tiramisu",
    category: "Desserts",
    description: "Coffee-soaked layers with a light mascarpone cream.",
    price: 5,
    image: tiramisuImage,
  },
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    category: "Desserts",
    description: "A soft chocolate cake layered with chocolate cream.",
    price: 4.5,
    image: chocolateCakeImage,
  },
  {
    id: "vanilla-ice-cream",
    name: "Vanilla Ice Cream",
    category: "Desserts",
    description: "Cool, creamy vanilla ice cream served by the scoop.",
    price: 3,
    image: vanillaIceCreamImage,
  },
  {
    id: "pancake-stack",
    name: "Pancake Stack",
    category: "Breakfast",
    description: "Fluffy pancakes served with butter and maple syrup.",
    price: 5,
    image: pancakeStackImage,
  },
  {
    id: "avocado-toast",
    name: "Avocado Toast",
    category: "Breakfast",
    description: "Toasted sourdough topped with creamy avocado and herbs.",
    price: 5.5,
    image: avocadoToastImage,
  },
  {
    id: "breakfast-omelette",
    name: "Breakfast Omelette",
    category: "Breakfast",
    description: "A soft, folded omelette with cheese and fresh herbs.",
    price: 5,
    image: breakfastOmeletteImage,
  },
  {
    id: "yogurt-granola-bowl",
    name: "Yogurt & Granola Bowl",
    category: "Breakfast",
    description: "Creamy yogurt with crunchy granola and seasonal fruit.",
    price: 4.5,
    image: yogurtGranolaBowlImage,
  },
  {
    id: "breakfast-toast",
    name: "Egg & Cheese Toast",
    category: "Breakfast",
    description: "Toasted bread with egg and melted cheese.",
    price: 4,
    image: breakfastToastImage,
  },
  {
    id: "chicken-sandwich",
    name: "Grilled Chicken Sandwich",
    category: "Sandwiches",
    description: "Grilled chicken, crisp greens, and house sauce on toasted bread.",
    price: 6,
    image: chickenSandwichImage,
  },
  {
    id: "tuna-sandwich",
    name: "Tuna Sandwich",
    category: "Sandwiches",
    description: "Tuna salad with fresh greens served on soft toasted bread.",
    price: 5.5,
    image: tunaSandwichImage,
  },
  {
    id: "egg-salad-sandwich",
    name: "Egg Salad Sandwich",
    category: "Sandwiches",
    description: "Creamy egg salad with lettuce on a freshly toasted bun.",
    price: 5,
    image: eggSaladSandwichImage,
  },
  {
    id: "ham-cheese-sandwich",
    name: "Ham & Cheese Sandwich",
    category: "Sandwiches",
    description: "Savory ham and melted cheese in crisp toasted bread.",
    price: 5.5,
    image: hamCheeseSandwichImage,
  },
  {
    id: "veggie-sandwich",
    name: "Garden Veggie Sandwich",
    category: "Sandwiches",
    description: "Seasonal vegetables, greens, and a herby spread.",
    price: 5,
    image: veggieSandwichImage,
  },
  {
    id: "french-fries",
    name: "French Fries",
    category: "Snacks",
    description: "Golden, crisp fries served with a house dipping sauce.",
    price: 3.5,
    image: frenchFriesImage,
  },
  {
    id: "garlic-toast",
    name: "Garlic Toast",
    category: "Snacks",
    description: "Toasted bread brushed with savory garlic butter.",
    price: 3,
    image: garlicToastImage,
  },
  {
    id: "chicken-bites",
    name: "Crispy Chicken Bites",
    category: "Snacks",
    description: "Bite-sized crispy chicken served with a dipping sauce.",
    price: 5,
    image: chickenBitesImage,
  },
  {
    id: "onion-rings",
    name: "Onion Rings",
    category: "Snacks",
    description: "Crispy battered onion rings served golden and hot.",
    price: 3.5,
    image: onionRingsImage,
  },
  {
    id: "mixed-fruit-cup",
    name: "Fresh Fruit Cup",
    category: "Snacks",
    description: "A refreshing cup of seasonal cut fruit.",
    price: 3.5,
    image: mixedFruitCupImage,
  },
];

export { products };
export default products;