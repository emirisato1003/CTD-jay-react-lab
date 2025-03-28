import { useState } from 'react';
import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import ProductList from './components/ProductList';
import inventoryData from './assets/inventory.json';
import './App.css';


function App() {
  const [inventory, setInventory] = useState(inventoryData.inventory);
  const styles = { height: 100, width: 100 };

  return (
    <main>
      <div className="coming-soon">
        <h1>CTD Swag</h1> {/* `title` inserted into heading */}
        <div style={styles}>
          <img src={reactLogo} alt="Code The Dream Logo" />
        </div>
        {/* <h2>{message}</h2> 'message' inserted into heading */}
      </div>
      <ProductList inventory={inventory}/>
    </main>
  );
}

export default App;
