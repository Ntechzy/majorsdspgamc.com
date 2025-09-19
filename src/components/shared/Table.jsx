"use client";

import React, { useState } from "react";

export default function Table({
  title,
  columns,
  data,
  actions = [],
  emptyMessage = "No data available",
  filterOptions = [],
  onFilterChange = () => {},
}) {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(
    filterOptions.length > 0 ? filterOptions[0].value : ""
  );

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSelectedFilter(value);
    onFilterChange(value);
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <section className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-2xl shadow-lg mb-10 overflow-hidden">
      {/* Header */}
      <header className="p-6 border-b border-gray-200/40 bg-gray-50/80 text-center">
        {title && (
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
        )}

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Search */}
          <div className="relative w-full sm:w-2/3 lg:w-1/2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-yellow-500 focus:outline-none shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Filter */}
          {filterOptions.length > 0 && (
            <select
              value={selectedFilter}
              onChange={handleFilterChange}
              className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-yellow-500 focus:outline-none shadow-sm w-full sm:w-auto"
            >
              {filterOptions.map((option, idx) => (
                <option key={idx} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>
      </header>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full max-w-full mx-auto text-sm sm:text-base border-separate border-spacing-0 table-auto">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className="px-6 py-4 text-left font-semibold text-gray-700 border-b border-gray-200"
                >
                  {col.label}
                </th>
              ))}
              {actions.length > 0 && (
                <th className="px-6 py-4 text-center font-semibold text-gray-700 border-b border-gray-200">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr
                  key={item.id}
                  className="odd:bg-white even:bg-gray-50 hover:bg-yellow-50 transition"
                >
                  {columns.map((col, idx) => (
                    <td
                      key={idx}
                      className="px-6 py-4 text-gray-700 border-b border-gray-200 align-middle whitespace-nowrap"
                    >
                      {col.render ? col.render(item) : String(item[col.key])}
                    </td>
                  ))}
                  {actions.length > 0 && (
                    <td className="px-6 py-4 text-center border-b border-gray-200 align-middle">
                      <div className="flex justify-center gap-2 flex-wrap">
                        {actions.map((action, aIdx) => (
                          <button
                            key={aIdx}
                            onClick={() => action.onClick(item)}
                            className={`px-3 py-1.5 text-xs sm:text-sm rounded-lg shadow-sm transition ${
                              action.className ||
                              "bg-blue-500 text-white hover:bg-blue-600"
                            }`}
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + (actions.length > 0 ? 1 : 0)}
                  className="px-6 py-8 text-center text-gray-500"
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
