import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

interface CartItemProps {
  cartItem?: any;
}
const CartItem = ({ cartItem }: CartItemProps) => {
  const { image, quantity, name, price, productId } = cartItem;
  return (
    <div className="cartItem">
      <img src={image} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
      </article>
      <div>
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>
      <button>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
