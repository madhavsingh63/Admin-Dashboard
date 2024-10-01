import { FaShoppingCart } from "react-icons/fa";

interface ProductCardProps {
  productId: string;
  image: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
}

const server = "jdjkjfksd";

const ProductCard = ({
  productId,
  name,
  image,
  stock,
  price,
  handler,
}: ProductCardProps) => {
  return (
    <div className="productCard">
      <img src={image} alt="" />
      <p>{name}</p>
      <span>₹{price} </span>
      <div>
        <button onClick={() => handler()}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
