import { useState } from "react";
import ProductCard from "../components/ProductCard";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState<number>(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  return (
    <div className="search">
      <aside>
        <h2>Filter</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="ascending">Price -- Low to High</option>
            <option value="descending">Price -- High to Low</option>
          </select>
        </div>
        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <h4>Category: {category || ""}</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="">Sample 1</option>
            <option value="">Sample 2</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

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
            handler={() => {}}
          />
        </div>
      </main>
    </div>
  );
};

export default Search;
