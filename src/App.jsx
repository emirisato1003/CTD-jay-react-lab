import { useState } from 'react';
// import viteLogo from '/vite.svg';
import ProductList from './components/ProductList';
import inventoryData from './assets/inventory.json';
import Header from './components/Header';
import './App.css';
import ProductCard from './components/ProductCard';


function App() {
  const [inventory, setInventory] = useState(inventoryData.inventory);

  function promoteItem() {
    return (
      <ProductCard
        name="Limited Edition Tee!"
        description="Special limited edition neon green shirt with a metallic Code the Dream Logo shinier than the latest front-end framework! Signed by the legendary Frank!" />
    )
  }
  return (
    <main>
      <Header />
      <ProductList inventory={inventory}>{promoteItem()}</ProductList>
    </main>
  );
}

export default App;
