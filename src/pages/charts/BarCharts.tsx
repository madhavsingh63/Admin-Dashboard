import AdminSidebar from "../../components/AdminSidebar";
import { BarChart } from "../../components/Charts";

const BarCharts = () => {
  return (
    <div className=" adminContainer">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main */}
      <main className="chartContainer">
        <h1>Bar Charts</h1>
        <section className="">
          <BarChart
            data_1={[
              344, 234, 322, 645, 454, 664, 767, 785, 343, 223, 212, 564,
            ]}
            data_2={[
              100, 200, 300, 400, 500, 600, 700, 800, 900, 101, 201, 301,
            ]}
            title_1="Products"
            title_2="User"
            bgColor_1={`hsl(260, 50%, 30%)`}
            bgColor_2={`hsl(360, 90%, 90%)`}
          ></BarChart>
          <h2>Top Selling Products & Top Customers</h2>
        </section>
        <section className="">
          <BarChart
            data_1={[
              344, 234, 322, 645, 454, 664, 767, 785, 343, 223, 212, 564,
            ]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor_1={`hsl(180, 40%, 50%)`}
            bgColor_2={""}
            horizontal={true}
          ></BarChart>
          <h2>Orders throughout the year</h2>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
