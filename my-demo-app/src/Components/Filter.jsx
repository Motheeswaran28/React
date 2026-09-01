function Filter({
  categories,
  selectedCategories,
  handleCheckbox
}) {
  return (
    <div className="filter">

      <h2>Filter</h2>


      <label>
        <input
          type="checkbox"
          checked={selectedCategories.length === 0}
          onChange={() => handleCheckbox("All")}
        />

        All
      </label>


      {categories.map((category) => (
        <label key={category}>

          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => handleCheckbox(category)}
          />

          {category}

        </label>
      ))}

    </div>
  );
}

export default Filter;