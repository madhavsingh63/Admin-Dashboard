import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "asjdjd",
    image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg",
    name: "MacBook",
    price: 150000,
    stock: 10,
    quantity: 2,
  },
  {
    productId: "asjdjd",
    image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg",
    name: "MacBook",
    price: 150000,
    stock: 10,
    quantity: 2,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges;
const discount = 400;
const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setValidCouponCode(true);
      else {
        setValidCouponCode(false);
      }
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
      setValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="cart">
          <main>
            {cartItems.map((item, index) => (
              <CartItem key={index} cartItem={item} />
            ))}
          </main>
          <aside>
            <p>Subtotal: ₹{subtotal}</p>
            <p>Shipping Charges: ₹{shippingCharges}</p>
            <p>Tax: ₹{tax}</p>
            <p>
              Discount : <em className="red">-₹{discount}</em>
            </p>
            <p>
              <b>Total: ₹{total}</b>
            </p>

            <input
              type="text"
              value={couponCode}
              placeholder="Coupon Code"
              onChange={(e) => setCouponCode(e.target.value)}
            />
            {couponCode &&
              (isValidCouponCode ? (
                <span className="green">
                  ₹{discount} off using the <code>{couponCode}</code>
                </span>
              ) : (
                <span className="red">
                  Invalid Coupon <VscError />{" "}
                </span>
              ))}
            {cartItems.length > 0 && <Link to={"/shipping"}>Checkout</Link>}
          </aside>
        </div>
      ) : (
        <div className="emptyCart">
          <h1>Cart is empty</h1>
          <Link to={"/"}>Go to Shop</Link>
        </div>
      )}
    </>
  );
};

export default Cart;
