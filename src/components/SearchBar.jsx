function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}

export default SearchBar;