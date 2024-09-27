import AdminSidebar from "../../components/AdminSidebar";
import { DoughnutChart, PieChart } from "../../components/Charts";
import { inventoryData } from "../../assets/data.json";

const PieCharts = () => {
  return (
    <div className=" adminContainer">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main */}
      <main className="chartContainer">
        <h1>Pie & Doughnut Charts</h1>
        <section>
          <div>
            <PieChart
              data={[12, 9, 13]}
              bgColor={[
                "hsl(110, 80%, 80%)",
                "hsl(110, 80%, 50%)",
                "hsl(110, 40%, 50%)",
              ]}
              offset={[0, 0, 50]}
              labels={["Processing", "Shipped", "Delivered"]}
            />
          </div>
          <h2>Order Fulfillment Ratio</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              data={inventoryData.map((i) => i.value)}
              labels={inventoryData.map((i) => i.heading)}
              bgColor={inventoryData.map(
                (i) => `hsl(${i.value * 4}, ${i.value}%, 50%)`
              )}
              offset={[0, 0, 0, 50]}
              legends={false}
              cutout={"70%"}
            />
          </div>
          <h2>Products Categories Ratio</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              data={[40, 20]}
              labels={["In Stock", "Out of Stock"]}
              bgColor={["hsl(269, 80%, 40%)", "rgb(53, 162, 255)"]}
              offset={[0, 50]}
              legends={false}
              cutout={"70%"}
            />
          </div>
          <h2>Stock Availability</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              data={[32, 18, 5, 20, 25]}
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production",
                "Net Margin",
              ]}
              bgColor={[
                "hsl(110, 80%, 40%)",
                "hsl(19, 80%, 40%)",
                "hsl(69, 80%, 40%)",
                "hsl(300, 80%, 40%)",
                "rgb(53, 162, 255)",
              ]}
              offset={[20, 30, 20, 30, 80]}
              legends={false}
            />
          </div>
          <h2>Revenue Distribution</h2>
        </section>
        <section>
          <div>
            <PieChart
              data={[30, 250, 40]}
              bgColor={[
                "hsl(10, 80%, 80%)",
                "hsl(10, 80%, 50%)",
                "hsl(10, 40%, 50%)",
              ]}
              offset={[0, 0, 50]}
              labels={["Teenager(Below 20)", "Adult(20-40)", "Older(Above 40)"]}
            />
          </div>
          <h2>Users Age group</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              data={[40, 250]}
              labels={["Admin", "Customers"]}
              bgColor={["hsl(335, 100%, 38%)", "hsl(44, 98%, 50%)"]}
              offset={[0, 80]}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default PieCharts;
