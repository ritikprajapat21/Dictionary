import "./style.css";

export default function Search({ setSearch }) {
  return (
    <div className="search-element">
      <input
        type="search"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
        className="search"
        placeholder="Search"
      />
    </div>
  );
}
