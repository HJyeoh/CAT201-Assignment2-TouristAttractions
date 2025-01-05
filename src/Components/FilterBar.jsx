import PropTypes from "prop-types";

const FilterBar = ({ filters, setFilters }) => {
  const handlePriceChange = (range) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: prev.priceRange.includes(range)
        ? prev.priceRange.filter((r) => r !== range)
        : [...prev.priceRange, range],
    }));
  };

  const handleRatingChange = (rating) => {
    setFilters((prev) => ({
      ...prev,
      starRating: prev.starRating.includes(rating)
        ? prev.starRating.filter((r) => r !== rating)
        : [...prev.starRating, rating],
    }));
  };

  return (
    <div className="shadow-md rounded-md pb-4 w-full lg:w-1/5">
      <h2 className="text-lg font-semibold mb-4 text-white">Filter Results</h2>
      <div className="bg-white shadow-md rounded-md p-4 w-full">
        <div className="mb-4">
          <h3 className="font-medium mb-2 text-black">Price Range (RM)</h3>
          <ul className="space-y-2 text-black">
            {["0-200", "200-500", "500-1000", "1000-2000", "2000-"].map(
              (range, index) => (
                <li key={index}>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-500"
                      onChange={() => handlePriceChange(range)}
                      checked={filters.priceRange.includes(range)}
                    />
                    RM {range.replace("-", " - ")}
                  </label>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-2 text-black">Star Rating</h3>
          <ul className="space-y-2 text-black">
            {[5, 4, 3, 2, 1].map((stars) => (
              <li key={stars}>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-500"
                    onChange={() => handleRatingChange(stars)}
                    checked={filters.starRating.includes(stars)}
                  />
                  {stars} Star{stars > 1 && "s"}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

FilterBar.propTypes = {
  filters: PropTypes.shape({
    priceRange: PropTypes.arrayOf(PropTypes.string).isRequired,
    starRating: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  setFilters: PropTypes.func.isRequired,
};

export default FilterBar;
