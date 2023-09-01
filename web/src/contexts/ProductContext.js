import { createContext, useState, useEffect } from 'react';
import {getProducts} from "../services/api";

const ProductContext = createContext();

const ProductContextProvider = ({children}) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <ProductContext.Provider value={{products, selectedProducts, error, loading, setSelectedProducts}}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContextProvider, ProductContext };