import { useState } from "react";
import AdminSidebar from "../../../components/AdminSidebar";
import { OrderItemType, OrderType } from "../../../types";
import { Link } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwXMjA3fDB8MHxzZWFyY2h8Mnx8c2HvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems: OrderItemType[] = [
  {
    itemName: "Puma Shoes",
    photo: img,
    _id: "4i4iu3h4uihiu3",
    quantity: 4,
    price: 2000,
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    username: "Nikki Pokheral",
    address: "Guwahati, Assam",
    city: "Guwahati",
    state: "Assam",
    country: "India",
    pinCode: 202039,
    subtotal: 8000,
    shippingCharge: 0,
    tax: 200,
    discount: 1200,
    total: 8000 + 200 + 0 - 1200,
    _id: "dih88dieh8dwhed",
    status: "Processing",
    orderItems,
  });

  const {
    username,
    address,
    city,
    state,
    country,
    pinCode,
    subtotal,
    shippingCharge,
    tax,
    discount,
    total,
    status,
  } = order;

  const updateStatusHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  return (
    <div className=" adminContainer">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main */}
      <main className="transactionManagement">
        <section>
          <h2>Order Items</h2>
          {order.orderItems.map((item, index) => (
            <ProductCard
              key={index}
              itemName={item.itemName}
              price={item.price}
              photo={item.photo}
              quantity={item.quantity}
              _id={item._id}
            />
          ))}
        </section>
        <article className="shippingInfoCard">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {username}</p>
          <p>
            Address: {`${address}, ${city}, ${state}, ${country}, ${pinCode}`}
          </p>

          <h5>Amount Info</h5>
          <p>SubTotal: {subtotal}</p>
          <p>Tax: {tax}</p>
          <p>Shipping Charge: {shippingCharge}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>
          <h5>Status Info</h5>
          <p>
            Status:{" "}
            <span
              className={
                status === "Delivered"
                  ? "green"
                  : status === "Shipped"
                  ? "yellow"
                  : "red"
              }
            >
              {status}
            </span>
          </p>
          <button onClick={updateStatusHandler}>Change Status</button>
        </article>
      </main>
    </div>
  );
};

const ProductCard = ({
  itemName,
  photo,
  _id,
  price,
  quantity,
}: OrderItemType) => (
  <div className="transactionProductCard">
    <img src={photo} alt={itemName} />
    <Link to={`/product/${_id}`}>{itemName}</Link>
    <span>
      ${price} X {quantity} = ${price * quantity}
    </span>
  </div>
);

export default TransactionManagement;
