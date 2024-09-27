import AdminSidebar from "../../components/AdminSidebar";
import { LineCharts } from "../../components/Charts";

const LineChart = () => {
  return (
    <div className=" adminContainer">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main */}
      <main className="chartContainer">
        <h1>Line Charts</h1>
        <section>
          <LineCharts
            data={[344, 234, 322, 645, 454, 664, 767, 785, 343, 223, 212, 564]}
            backgroundColor="rgba(53, 162, 255, 0.5)"
            label="Users"
            borderColor="rgb(53, 162, 255)"
          ></LineCharts>
          <h2>Active Users</h2>
        </section>
        <section>
          <LineCharts
            data={[40, 50, 224, 100, 78, 55, 67, 85, 30, 23, 21, 54]}
            backgroundColor={`hsla(269, 80%, 40%, 0.4)`}
            label="Products"
            borderColor="hsl(269, 80%, 40%)"
          ></LineCharts>
          <h2>Total Products (SKU)</h2>
        </section>
        <section>
          <LineCharts
            data={[
              24000, 44400, 44400, 55600, 77800, 45500, 76700, 78500, 34300,
              22300, 21200, 56400,
            ]}
            backgroundColor={`hsla(129, 80%, 40%, 0.4)`}
            label="Revenue"
            borderColor="hsl(129, 80%, 40%)"
          ></LineCharts>
          <h2>Total Revenue</h2>
        </section>
        <section>
          <LineCharts
            data={[
              9000, 12000, 12000, 9000, 7000, 4000, 6000, 8000, 3000, 2000,
              1000, 5000,
            ]}
            backgroundColor={`hsla(29, 80%, 40%, 0.4)`}
            label="Discount"
            borderColor="hsl(29, 80%, 40%)"
          ></LineCharts>
          <h2>Discount Allotted</h2>
        </section>
      </main>
    </div>
  );
};

export default LineChart;
