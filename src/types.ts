export type OrderItemType = {
  itemName: string;
  photo: string;
  price: number;
  quantity: number;
  _id: string;
};

export type OrderType = {
  username: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: number;
  subtotal: number;
  shippingCharge: number;
  tax: number;
  discount: number;
  total: number;
  _id: string;
  status: "Processing" | "Shipped" | "Delivered";
  orderItems: OrderItemType[];
};
