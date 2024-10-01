import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../../components/AdminSidebar";
import { FaRegBell, FaUser } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../../assets/data.json";
import { BarChart, DoughnutChart } from "../../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../../components/DashboardTable";

const Dashboard = () => {
  return (
    <div className=" adminContainer">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main */}
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, user, docs" />
          <FaRegBell />
          <FaUser />
        </div>
        <section className="widgetContainer">
          <WidgetItem
            percent={40}
            amount={true}
            value={34000}
            heading="Revenue"
            color="rgb(0,155,255)"
          />

          <WidgetItem
            percent={-40}
            value={400}
            heading="Users"
            color="rgb(0 198 202)"
          />

          <WidgetItem
            percent={80}
            value={23000}
            heading="Transaction"
            color="rgb(255, 196, 0)"
          />
          <WidgetItem
            percent={40}
            value={1000}
            heading="Products"
            color="rgb(75 0 255)"
          />
        </section>
        <section className="dashboardChartContainer">
          <div className="revenueChart">
            <h2>Revenue & Transaction</h2>
            <BarChart
              data_1={[300, 144, 433, 655, 237, 755, 345, 234, 456]}
              data_2={[200, 444, 556, 778, 345, 755, 500]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0, 115, 255)"
              bgColor_2="rgb(53, 162, 235, 0.8)"
            />
          </div>
          <div className="dashboardInventory">
            <h2>Inventory</h2>
            {data.inventoryData.map((item, index) => (
              <InventoryItem
                key={index}
                heading={`${item.heading}`}
                value={item.value}
                color={`hsl(${item.value * 4}, ${item.value}%, ${item.value}%)`}
              />
            ))}
          </div>
        </section>

        <section className="dashboardTransactionContainer">
          <div className="genderChart">
            <h2>Gender Ratio</h2>
            <DoughnutChart
              data={[12, 19]}
              labels={["Female", "Male"]}
              bgColor={["hsl(340, 82%, 56%)", "rgba(53, 162, 235, 0.8)"]}
              cutout={90}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>
          <Table data={data.transaction} />
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%{" "}
        </span>
      )}
    </div>
    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(${color}, ${
          (Math.abs(percent) / 100) * 360
        }deg, white 0)`,
      }}
    >
      <span
        style={{
          color,
        }}
      >
        {percent}%
      </span>
    </div>
  </article>
);

interface InventoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const InventoryItem = ({ color, value, heading }: InventoryItemProps) => (
  <div className="inventoryItem">
    <h5>{heading}</h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
);
export default Dashboard;
