import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './assets/components/MainPage/Home.jsx';
import Siparis from './assets/components/Siparis/Siparis';
import Onay from './assets/components/Onay/Onay';
import notFound from './assets/components/notFound/notFound.jsx';
import './App.css';

function App() {
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [count, setCount] = useState(1);
  const [size, setSize] = useState('');
  const [name, setName] = useState('');
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

  const calculatePrice = () => {
    return basePrice + selectedToppings.length * toppingPrice * count;
  };

  const orderDetails = {
    name,
    size,
    toppings: selectedToppings,
    count,
    price: calculatePrice(),
  };

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/siparis"
        render={() => (
          <Siparis
            selectedToppings={selectedToppings}
            setSelectedToppings={setSelectedToppings}
            count={count}
            setCount={setCount}
            basePrice={basePrice}
            toppingPrice={toppingPrice}
            handleToppingChange={handleToppingChange}
            setSize={setSize}
            setName={setName}
          />
        )}
      />
      <Route
        path="/onay"
        render={() => <Onay orderDetails={orderDetails} />}
      />
      <Route path="*" component={notFound} />
    </Switch>
  );
}

export default App;
