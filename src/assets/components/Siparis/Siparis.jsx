import React, { useState } from 'react';
import Adet from "./Siparis-Components/adet";
import Checkbox from "./Siparis-Components/checkbox";
import Dropmenu from "./Siparis-Components/dropmenu";
import Radio from "./Siparis-Components/radio";
import TextArea from "./Siparis-Components/text-area";
import Urun from "./Siparis-Components/urun";
import Tutar from "./Siparis-Components/tutar";

export default function Siparis() {
  const [selectedToppings, setSelectedToppings] = useState([]); 
  const [count, setCount] = useState(1);

  const basePrice = 80;
  const toppingPrice = 5;

  const handleToppingChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {

      setSelectedToppings([...selectedToppings, value]);
    } else {
      setSelectedToppings(selectedToppings.filter((topping) => topping !== value));
    }
  };

  return (
    <div>
      <header>
        <h1>Teknolojik Yemekler</h1>
      </header>
      <Urun />
      <Radio />
      <Dropmenu />
      <Checkbox handleToppingChange={handleToppingChange} />
      <Adet count={count} setCount={setCount} />
      <TextArea />

      <Tutar 
        basePrice={basePrice} 
        toppingPrice={toppingPrice} 
        selectedToppings={selectedToppings} 
        count={count} 
      />
    </div>
  );
}
