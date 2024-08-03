import { PRODUCT_PRICES } from "../config/products";

export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-900" },
  { label: "Blue", value: "blue", tw: "blue-950" },
  { label: "Rose", value: "rose", tw: "rose-950" },
  { label: "Red", value: "red", tw: "red-600" },
  { label: "Purple", value: "purple", tw: "purple-600" },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      label: "iPhone X",
      value: "iphonex",
    },
    {
      label: "iPhone 11",
      value: "iphone11",
    },
    {
      label: "iPhone 12",
      value: "iphone12",
    },
    {
      label: "iPhone 13",
      value: "iphone13",
    },
    {
      label: "iPhone 14",
      value: "iphone14",
    },
    {
      label: "iPhone 15",
      value: "iphone15",
    },
    {
      label: "iPhone SE (2022)",
      value: "iphonese2022",
    },
    {
      label: "iPhone 12 Mini",
      value: "iphone12mini",
    },
    {
      label: "iPhone 13 Mini",
      value: "iphone13mini",
    },
    {
      label: "iPhone 13 Pro",
      value: "iphone13pro",
    },
    {
      label: "iPhone 13 Pro Max",
      value: "iphone13promax",
    },
    {
      label: "iPhone 14 Plus",
      value: "iphone14plus",
    },
    {
      label: "iPhone 14 Pro",
      value: "iphone14pro",
    },
    {
      label: "iPhone 14 Pro Max",
      value: "iphone14promax",
    },
    {
      label: "iPhone 15 Pro",
      value: "iphone15pro",
    },
    {
      label: "iPhone 15 Pro Max",
      value: "iphone15promax",
    },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      description: "Scratch-resistant coating",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
    {
      label: "Fabric",
      value: "fabric",
      description: "Soft and flexible fabric with a comfortable texture",
      price: PRODUCT_PRICES.material.fabric,
    },
    {
      label: "Aluminum",
      value: "aluminum",
      description: "Durable and lightweight metal",
      price: PRODUCT_PRICES.material.aluminum,
    },
    {
      label: "Leather",
      value: "leather",
      description: "Premium quality leather with a luxurious feel",
      price: PRODUCT_PRICES.material.leather,
    },
    {
      label: "Wood",
      value: "wood",
      description: "Natural wood finish with unique grain patterns",
      price: PRODUCT_PRICES.material.wood,
    },
    {
      label: "Metal",
      value: "metal",
      description: "Classic metal finish with a polished look",
      price: PRODUCT_PRICES.material.metal,
    },
    {
      label: "Carbon Fiber",
      value: "carbon-fiber",
      description: "High-strength material with a sleek appearance",
      price: PRODUCT_PRICES.material.carbon_fiber,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth Finish",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured Finish",
      value: "textured",
      description: "Soft grippy texture",
      price: PRODUCT_PRICES.finish.textured,
    },
    {
      label: "Matte Finish",
      value: "matte",
      description: "Non-reflective surface",
      price: PRODUCT_PRICES.finish.textured,
    },
    {
      label: "Glossy Finish",
      value: "glossy",
      description: "High shine and reflective",
      price: PRODUCT_PRICES.finish.textured,
    },
    {
      label: "Satin Finish",
      value: "satin",
      description: "Soft sheen, between matte and glossy",
      price: PRODUCT_PRICES.finish.textured,
    },
    {
      label: "Metallic Finish",
      value: "metallic",
      description: "Shiny and reflective with metallic sheen",
      price: PRODUCT_PRICES.finish.textured,
    },
    {
      label: "Textured Matte Finish",
      value: "textured-matte",
      description: "Matte finish with added texture for grip",
      price: PRODUCT_PRICES.finish.textured,
    },
    {
      label: "Brushed Finish",
      value: "brushed",
      description: "Subtle texture with brushed appearance",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
