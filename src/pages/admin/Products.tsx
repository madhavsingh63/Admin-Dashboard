import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import TableHOC from "../../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwXMjA3fDB8MHxzZWFyY2h8Mnx8c2HvZXN8ZW58MHx8MHx8&w=1000&q=804";

const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";
const arr: DataType[] = [
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 4,
    action: <Link to="/admin/products/jdjoi">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Laptop" />,
    name: "MacBook",
    price: 150000,
    stock: 20,
    action: <Link to="/admin/products/ajsikwd">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 4,
    action: <Link to="/admin/products/ajsiked">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Laptop" />,
    name: "MacBook",
    price: 150000,
    stock: 20,
    action: <Link to="/admin/products/ajsikrd">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 4,
    action: <Link to="/admin/products/ajsskjd">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Laptop" />,
    name: "MacBook",
    price: 150000,
    stock: 20,
    action: <Link to="/admin/products/ajsdkjd">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 4,
    action: <Link to="/admin/products/adsikjd">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Laptop" />,
    name: "MacBook",
    price: 150000,
    stock: 20,
    action: <Link to="/admin/products/sjsikjd">Manage</Link>,
  },
];

const Products = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(columns, data, "dashboardProductBox", "Products", true),
    []
  );
  return (
    <div className=" adminContainer">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main */}
      <main>{Table()}</main>
      <Link to="/admin/products/new" className="createProductBtn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
