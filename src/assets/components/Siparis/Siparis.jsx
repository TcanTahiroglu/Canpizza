import React, { useState, useEffect } from 'react';
import Adet from "./Siparis-Components/adet";
import Checkbox from "./Siparis-Components/checkbox";
import Dropmenu from "./Siparis-Components/dropmenu";
import Radio from "./Siparis-Components/radio";
import TextArea from "./Siparis-Components/text-area";
import Urun from "./Siparis-Components/urun";
import Tutar from "./Siparis-Components/tutar";
import Musteri from './Siparis-Components/musteri';
import { Link } from 'react-router-dom';
import './Siparis.css';

export default function Siparis({
  selectedToppings,
  setSelectedToppings,
  count,
  setCount,
  basePrice,
  toppingPrice,
  handleToppingChange,
}) {
  const [size, setSize] = useState(""); // Boyut seçimi
  const [name, setName] = useState(""); // Kullanıcı ismi
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Koşulları kontrol eden useEffect
  useEffect(() => {
    if (size && name.length >= 3) {
      setIsButtonDisabled(false); // Koşullar sağlandığında buton aktif
    } else {
      setIsButtonDisabled(true); // Koşullar sağlanmazsa buton devre dışı
    }
  }, [size, name]);

  return (
    <div>
      <header>
        <h1 className='sipBaslik'>Teknolojik Yemekler</h1>
      </header>
      <div className='boyutlar'>
        <Urun />
        <div className='urun-secenekler'>
          {/* Boyut seçimi */}
          <Radio setSize={setSize} />
          <Dropmenu />
        </div>
        <Checkbox handleToppingChange={handleToppingChange} />
        <Adet count={count} setCount={setCount} />
        <TextArea />
        {/* Kullanıcı ismi */}
        <Musteri name={name} setName={setName} />
        <Tutar 
          basePrice={basePrice} 
          toppingPrice={toppingPrice} 
          selectedToppings={selectedToppings} 
          count={count} 
        />
        {/* Buton */}
        <Link to="/onay">
          <button disabled={isButtonDisabled}>Siparişi Onayla</button>
        </Link>
      </div>
    </div>
  );
}
