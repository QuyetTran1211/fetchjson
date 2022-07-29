const drink = {
  color: 'brown',
  carbonated: true,
  surgar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 50];
const tea: Drink = ['brown', false, 0];
