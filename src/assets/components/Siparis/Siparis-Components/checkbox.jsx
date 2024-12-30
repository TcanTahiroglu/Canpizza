import React from 'react';

export default function Checkbox({ handleToppingChange }) {
  return (
    <form>
      <h2>Ekstra Malzemeler</h2>
      <p>En Fazla 10 Malzeme seçebilirsiniz. 5₺</p>
      <label>
        <input type="checkbox" name="topping" value="pepperoni" onChange={handleToppingChange} /> Peperoni
      </label>
      <label>
        <input type="checkbox" name="topping" value="sosis" onChange={handleToppingChange} /> Sosis
      </label>
      <label>
        <input type="checkbox" name="topping" value="kanadaJambonu" onChange={handleToppingChange} /> Kanada Jambonu
      </label>
      <label>
        <input type="checkbox" name="topping" value="tavukIzgara" onChange={handleToppingChange} /> Tavuk Izgara
      </label>
      <label>
        <input type="checkbox" name="topping" value="sogan" onChange={handleToppingChange} /> Soğan
      </label>
      <label>
        <input type="checkbox" name="topping" value="domates" onChange={handleToppingChange} /> Domates
      </label>
      <label>
        <input type="checkbox" name="topping" value="misir" onChange={handleToppingChange} /> Mısır
      </label>
      <label>
        <input type="checkbox" name="topping" value="sucuk" onChange={handleToppingChange} /> Sucuk
      </label>
      <label>
        <input type="checkbox" name="topping" value="jalepeno" onChange={handleToppingChange} /> Jalapeño
      </label>
      <label>
        <input type="checkbox" name="topping" value="sariSarmak" onChange={handleToppingChange} /> Sarımsak
      </label>
      <label>
        <input type="checkbox" name="topping" value="biber" onChange={handleToppingChange} /> Biber
      </label>
      <label>
        <input type="checkbox" name="topping" value="ananas" onChange={handleToppingChange} /> Ananas
      </label>
      <label>
        <input type="checkbox" name="topping" value="kabak" onChange={handleToppingChange} /> Kabak
      </label>
    </form>
  );
}
