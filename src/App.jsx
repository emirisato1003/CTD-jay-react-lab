
import './App.css';

// React Hooks
import { useEffect, useState } from 'react';

// components
import ProductList from './components/ProductList';
import inventoryData from './assets/inventory.json';
import Header from './layout/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';


function App() {
  // inventory related logics
  const [inventory, setInventory] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] =useState(false)

  function handleCart(){
    setIsCartOpen(prev => !prev)
  }
  function handleAddItemToCart(id) {
    const target = inventory.find((item) => item.id === id);
    if (!target) {
      console.error('cart error: item not found');
      return;
    }

    const cartItem = { ...target, cartItemId: Date.now() };
    // console.log(cartItem);
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
        // "Special limited edition neon green shirt with a metallic Code the Dream Logo shinier than the latest front-end framework! Signed by the legendary Frank!"
        description="Special limited edition neon green shirt with..." />
    );
  }

  return (
    <>
      <Header cart={cart} handleCart={handleCart} />
      <main>
        <ProductList
          handleAddItemToCart={handleAddItemToCart}
          inventory={inventory}>
          {promoteItem()}
        </ProductList>
        {isCartOpen && <Cart cart={cart} handleCart={handleCart}/>}
      </main>
      <footer>
        <p>&copy; Emiri Sato</p>
      </footer>
    </>
  );
}

export default App;


