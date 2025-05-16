import React from 'react';

const FilterPanel = ({ filters, setFilters }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
         Filter by Price & Duration
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* Max Price */}
        <div className="w-full max-w-xs">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Max Price (₹)
          </label>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
            placeholder="e.g. 1000"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Max Duration */}
        <div className="w-full max-w-xs">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Max Duration (days)
          </label>
          <input
            type="number"
            value={filters.maxDuration}
            onChange={(e) => setFilters({ ...filters, maxDuration: e.target.value })}
            placeholder="e.g. 5"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
