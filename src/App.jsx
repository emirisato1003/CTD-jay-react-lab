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

import './App.css';

// React Hooks
import { useState } from 'react';

function App() {
  const [inventory, setInventory] = useState(inventoryData.inventory);
  const [show, setShow] = useState(true);
  function promoteItem() {
    return (
      <ProductCard
        name="Limited Edition Tee!"
        description="Special limited edition neon green shirt with a metallic Code the Dream Logo shinier than the latest front-end framework! Signed by the legendary Frank!" />
    );
  }
  return (
    <>
      {/* <main>
        <Header />
        <ProductList inventory={inventory}>{promoteItem()}</ProductList>
      </main>
      <hr />
      <br />
      <div>
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
      </div> */}
      <div className='container'>
        <button onClick={() => setShow(prev => !prev)}>Toggle WindowTracker</button>
        {show && <WindowTracker />}
      </div>
    </>
  );
}

export default App;


