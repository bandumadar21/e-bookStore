import { useState,useEffect } from "react";
import ProductCard from "../products/ProductCard";
const FeatureProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      async function fetchProducts(){
      
          const response = await fetch("http://localhost:7070/444/featured_products");
          const data=await response.json();
          setProducts(data);
       
      }
      fetchProducts();
    }, [])
  
    return (
      <section className="my-4">
          <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured e-BookStore</h1>    
          <div className="flex flex-wrap justify-center lg:flex-row">
  
            { products.map((product) => (
              <ProductCard key={product.id} product={product} />
            )) }
  
          </div>
      </section>
    )
};

export default FeatureProducts
