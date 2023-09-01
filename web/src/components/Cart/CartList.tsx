import {useContext} from "react";
import {ProductContext} from "../../contexts/ProductContext";
import CartCard from "./CartCard";
import {IProduct} from "../../models";

const ProductList = () => {
  const {selectedProducts} = useContext(ProductContext);

  return (
    <div className="mt-5">
      <h3 className="font-bold text-gray-700">
        Cart ({selectedProducts.length || 0})
      </h3>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {selectedProducts.map((product: IProduct) => (
          <CartCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
