import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import TableHOC from "../../components/TableHOC";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "Charas",
    amount: 4300,
    discount: 300,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/dskjjkd">Manage</Link>,
  },
  {
    user: "Xaviors",
    amount: 6999,
    discount: 599,
    quantity: 5,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/dksjkd">Manage</Link>,
  },
  {
    user: "Xaviors",
    amount: 6999,
    discount: 599,
    quantity: 5,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/dkskd">Manage</Link>,
  },
];

const Transaction = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "transactionContainer",
      "Transactions",
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

export default Transaction;
