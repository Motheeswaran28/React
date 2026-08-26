import { useState } from "react";

import products from "./Data/Products";
import Filter from "./Components/Filter";
import ProductList from "./Components/ProductList";

import "./App.css";

function App() {

  const categories = [
    "Mobile",
    "Laptop",
    "Audio"
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckbox = (category) => {

    if (category === "All") {
      setSelectedCategories([]);
      return;
    }

    if (selectedCategories.includes(category)) {

      setSelectedCategories(
        selectedCategories.filter(
          (item) => item !== category
        )
      );

    } else {

      setSelectedCategories([
        ...selectedCategories,
        category
      ]);

    }
  };

  const filteredProducts = products.filter((product) => {

  
    if (selectedCategories.length === 0) {
      return true;
    }

    return selectedCategories.includes(product.category);
  });

  return (
    <div className="app">

      <h1>Products App</h1>

      <div className="container">

        <Filter
          categories={categories}
          selectedCategories={selectedCategories}
          handleCheckbox={handleCheckbox}
        />

        <ProductList
          products={filteredProducts}
        />

      </div>

    </div>
  );
}

export default App;