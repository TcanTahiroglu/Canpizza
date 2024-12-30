import React from 'react';

export default function Tutar({ basePrice, toppingPrice, selectedToppings, count }) {
  const toppingsCost = selectedToppings.length * toppingPrice;

  const totalPrice = (basePrice + toppingsCost) * count;

  return (
    <div>
      <h3>Ekstra Malzemelerin Tutarı: {toppingsCost}₺</h3>
      <h3>Toplam Tutar: {totalPrice}₺</h3>
    </div>
  );
}
