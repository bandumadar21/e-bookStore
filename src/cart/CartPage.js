import { useCart } from "../context/CartContext"
import { CartEmpty } from "./CartEmpty"
import { CartList } from "./CartList"


export const CartPage = () => {
    const {cartList}=useCart();
   
  
    return (
      <main style={{minHeight:'600px'}}>       
        { cartList.length===0 ?  <CartEmpty />:<CartList/> }   
      </main>
    )
  }