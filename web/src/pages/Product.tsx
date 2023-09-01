import {ProductContextProvider} from "../contexts/ProductContext";
import ProductList from "../components/Product/ProductList";
import CartList from "../components/Cart/CartList";

const Products = () => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-8 px-4 lg:max-w-7xl lg:px-8">
        <ProductContextProvider>
          <ProductList />
          <CartList />
        </ProductContextProvider>
      </div>
    </div>
  );
};

export default Products;
