import {useContext} from "react";
import {ProductContext} from "../../contexts/ProductContext";
import ProductCard from "./ProductCard";
import {IProduct} from "../../models";

const ProductList = () => {
  const {products} = useContext(ProductContext);

  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
