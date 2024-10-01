import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import Header from "./components/Header";
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Products = lazy(() => import("./pages/admin/Products"));
const Transaction = lazy(() => import("./pages/admin/Transaction"));
const Customers = lazy(() => import("./pages/admin/Customers"));
const BarCharts = lazy(() => import("./pages/admin/charts/BarCharts"));
const PieCharts = lazy(() => import("./pages/admin/charts/PieCharts"));
const LineChart = lazy(() => import("./pages/admin/charts/LineChart"));
const Coupon = lazy(() => import("./pages/admin/Coupon"));
const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));
const Shipping = lazy(() => import("./pages/Shipping"));
const Login = lazy(() => import("./pages/Login"));

const NewProduct = lazy(() => import("./pages/admin/management/NewProduct"));
const ProductManagement = lazy(
  () => import("./pages/admin/management/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/admin/management/TransactionManagement")
);

const App = () => {
  return (
    <Router>
      {/* Header */}
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />

          {/*For  Not LoggedIn Users */}
          <Route path="/login" element={<Login />} />

          {/* Logged in Route */}

          <Route>
            <Route path="/shipping" element={<Shipping />} />
          </Route>

          {/* Admin Dashboard Route */}
          <Route
          // element={<ProtectedRoutes/>}
          >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/transaction" element={<Transaction />} />
            <Route path="/admin/customer" element={<Customers />} />

            {/* Charts */}
            <Route path="/admin/chart/bar" element={<BarCharts />} />
            <Route path="/admin/chart/pie" element={<PieCharts />} />
            <Route path="/admin/chart/line" element={<LineChart />} />

            {/* extra Apps */}
            <Route path="/admin/coupon" element={<Coupon />} />

            {/* Management */}
            <Route path="/admin/products/new" element={<NewProduct />} />
            <Route path="/admin/products/:id" element={<ProductManagement />} />
            <Route
              path="/admin/transaction/:id"
              element={<TransactionManagement />}
            />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
