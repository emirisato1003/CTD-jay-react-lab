
import './App.css';

// React Hooks
import { useEffect, useState } from 'react';

// components
import ProductList from './components/ProductList';
import inventoryData from './assets/inventory.json';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import TacoBuilder from './components/TacoBuilder/TacoBuilder';
import CreateUserForm from './components/UserForm/CreateUserForm';
import Counter from './components/Counter/Counter';
import WebSocketComponent from './components/WebSocket/WebSocketComponent';
import ExampleComponent from './components/ExampleComponent/ExampleComponent';
import PageTitleUpdatingCounter from './components/Counter/PageTitleUpdatingCounter';
import Timer from './components/ExampleComponent/Timer';
import MyComponent from './components/ExampleComponent/MyComponent';
import WindowTracker from './components/ExampleComponent/WindowTracker';
import EmailInput from './components/UserForm/EmailInput';

function App() {
  // inventory related logics
  const [inventory, setInventory] = useState([]);
  const [cart, setCart] = useState([]);

  function handleAddItemToCart(id) {
    const target = inventory.find((item) => item.id === id);
    if (!target) {
      console.error('cart error: item not found');
      return;
    }

    const cartItem = { ...target, cartItemId: Date.now() };
    console.log(cartItem)
    setCart([...cart, cartItem]);
  }

  // function removeItemFromCart(id){
  //   const updatedCart = cart.filter(item => item.id !== id)
  //   setCart([...updatedCart])
  // }

  useEffect(() => {
    setInventory([...inventoryData.inventory]);
  }, []);

  function promoteItem() {
    return (
      <ProductCard
        name="Limited Edition Tee!"
        description="Special limited edition neon green shirt with a metallic Code the Dream Logo shinier than the latest front-end framework! Signed by the legendary Frank!" />
    );
  }
  // --------------------------------

  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");

  return (
    <>
      <main>
        <Header cart={cart}/>
        <ProductList
          handleAddItemToCart={handleAddItemToCart}
          inventory={inventory}>
          {promoteItem()}
        </ProductList>
      </main>
      <hr />
      <br />
      {/* <div>
        <h1>Taco Builder</h1>
        <TacoBuilder />
      </div>
      <hr />
      <div>
        <h1>User Form</h1>
        <CreateUserForm />
      </div>
      <hr />
      <div>
        <h1>Counter</h1>
        <Counter />
      </div>
      <div>
        <WebSocketComponent />
      </div>
      <hr />
      <div>
        <ExampleComponent />
      </div>
      <hr />
      <div>
        <PageTitleUpdatingCounter />
      </div>
      <hr />
      <div>
        <Timer />
      </div>
      <div>
        <MyComponent />
      </div>
      <div className='container'>
        <button onClick={() => setShow(prev => !prev)}>Toggle WindowTracker</button>
        {show && <WindowTracker />}
      </div>
      <div>
        <h1>Enter Your Details</h1>
        <EmailInput />
      </div> */}
    </>
  );
}

export default App;


