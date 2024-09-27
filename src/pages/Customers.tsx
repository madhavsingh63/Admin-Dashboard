import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  gender: string;
  email: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";
const img3 = "https://randomuser.me/api/portraits/women/52.jpg";

const arr: DataType[] = [
  {
    avatar: <img src={img} alt="Profile" style={{ borderRadius: "50%" }} />,
    name: "Emily Paimer",
    gender: "female",
    email: "emily@gmail.com",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: <img src={img2} alt="Profile" style={{ borderRadius: "50%" }} />,
    name: "Emily Paimer",
    gender: "female",
    email: "emily@gmail.com",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: <img src={img3} alt="Profile" style={{ borderRadius: "50%" }} />,
    name: "Emily Paimer",
    gender: "female",
    email: "emily@gmail.com",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const Customers = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "customerTableContainer",
      "Customers",
      true
    ),
    []
  );

  return (
    <div className=" adminContainer">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main */}
      <main>{Table()}</main>
    </div>
  );
};

export default Customers;
