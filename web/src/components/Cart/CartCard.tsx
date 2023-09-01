import {IProduct} from "../../models";
import {useContext} from "react";
import {ProductContext} from "../../contexts/ProductContext";

interface IProps {
  product: IProduct;
}

const ProductCard = ({product}: IProps) => {
  const {setSelectedProducts, selectedProducts} = useContext(ProductContext);

  const remove = () => {
    console.log(selectedProducts, product);
    setSelectedProducts(() => [
      ...selectedProducts.filter((item: IProduct) => item.id !== product.id),
    ]);
  };
  return (
    <div className="product">
      <div className="w-full">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={product.href}>{product.name}</a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
      <button
        onClick={remove}
        className="w-full justify-center rounded-md bg-black text-white py-2"
        type="button"
      >
        Remove
      </button>
    </div>
  );
};

export default ProductCard;
