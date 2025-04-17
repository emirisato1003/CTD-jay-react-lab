
import './App.css';

// React Hooks
import { useEffect, useState } from 'react';

// components
import ProductList from './features/ProductList';
import inventoryData from './assets/inventory.json';
import Header from './shared/layout/Header';
import ProductCard from './features/ProductCard';
import Cart from './features/Cart/Cart';


function App() {
  // inventory related logics
  const [inventory, setInventory] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleCart() {
    setIsCartOpen(prev => !prev);
  }

  // common function in e-commerce app to add items to a shopping cart
  function handleAddItemToCart(id) {
    // console.log(id);
    const inventoryItem = inventory.find((item) => item.id === id);
    const itemToUpdate = cart.find(item => item.id === id);
    const cartItem = { ...inventoryItem, cartItemId: Date.now() };
    let updatedCartItem;

    if (!inventoryItem) {
      console.error('cart error: item not found');
      return;
    }

    if (itemToUpdate) {
      updatedCartItem = {
        ...itemToUpdate,
        itemCount: itemToUpdate.itemCount + 1
      };
    } else {
      updatedCartItem = { ...inventoryItem, itemCount: 1 };
    }

    // console.log(cartItem);
    setCart([...cart.filter(item => item.id !== id), updatedCartItem]);
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
        {isCartOpen &&
          <Cart
            cart={cart}
            setCart={setCart}
            handleCart={handleCart}
          />}
      </main>
      <footer>
        <p>&copy; Emiri Sato</p>
      </footer>
    </>
  );
}

export default App;


