export const PRODUCT_PRICES = {
  material: {
    silicone: 0,
    polycarbonate: 40_00,
    leather: 200_00,
    aluminum: 150_00,
    wood: 300_00,
    carbon_fiber: 2000_00,
    fabric: 120_00,
    metal: 400_00,
  },
  finish: {
    smooth: 0,
    textured: 60_00,
    matte: 50_00,
    glossy: 60_00,
    satin: 55_00,
    metallic: 70_00,
    "textured-matte": 65_00,
    brushed: 60_00,
  },
} as const;

export const BASE_PRICE = 250_00;
