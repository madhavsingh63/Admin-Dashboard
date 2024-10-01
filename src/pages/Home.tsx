import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const addToCartHanlder = () => {};
  return (
    <div className="home">
      <section></section>

      <main className="latestProducts">
        <div>
          <h1>Latest Products</h1>
          <Link to="/search" className="findMore">
            More
          </Link>
        </div>
        <div className="productContainer">
          <ProductCard
            image="https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
            name="MacBook"
            productId="ehuiwehuid"
            stock={2}
            price={150000}
            handler={() => {}}
          />
          <ProductCard
            image="https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
            name="MacBook"
            productId="ehuiwehuid"
            stock={2}
            price={150000}
            handler={addToCartHanlder}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
