const Filters = ({ setSearch, setCategory }) => {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Footwear">Footwear</option>
        <option value="Watches">Watches</option>
        <option value="Clothing">Clothing</option>
        <option value="Accessories">Accessories</option>
        <option value="Perfumes">Perfumes</option>
        <option value="Offers">OfferSection</option>
      </select>
    </div>
  );
};

export default Filters;
