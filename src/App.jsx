
import './App.css';

// React Hooks
import { useEffect, useRef, useState } from 'react';

// components
import ProductList from './features/ProductList';
import inventoryData from './assets/inventory.json';
import Header from './layout/Header';
import ProductCard from './features/ProductCard';
import Cart from './features/Cart/Cart';
import Footer from './layout/Footer';


function App() {
  // useState
  // inventory related logics
  const [inventory, setInventory] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState('false');
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState('');

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

  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  // useEffect(() => {
  //   (async () => {
  //     try{
  //       const res = await fetch(`${baseUrl}/products`);
  //       if(!res.ok){
  //         throw new Error(res.status)
  //       }
  //       const data = await res.json()
  //       console.log(products);
  //       setInventory([...products])
  //       // if(data.status != 'success'){
  //       //   throw new Error(data.status)
  //       // }
  //     }catch(error){
  //       console.log(error.message);
  //     }
  //   })
  // }, [])

  async function handleAuthenticate(creadentials) {
    const options = {
      method: 'POST',
      body: JSON.stringify(creadentials),
      headers: { 'Content-Type': 'application/json' }
    };
    try {
      setIsAuthenticating(true)
      const res = await fetch(`${baseUrl}/auth/login`, options);
      if (!res.ok) {
        // status will be 401 if authentication fails
        // we want to handle it differently then other errors
        if (res.status === 401) {
          setAuthError(res.statusText)
        }
        throw new Error(res.status);
      }
      const userData = res.json()
      // assigning an new object that's more convenient to work with
      setUser({...userData.user, token: userData.token})
      setIsAuthenticating(false)
    } catch (error) {
      console.log(error.message);
    }
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
      <Footer />
    </>
  );
}

export default App;


