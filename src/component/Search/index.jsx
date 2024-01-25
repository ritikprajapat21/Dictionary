import "./style.css";

export default function Search({ setSearch }) {
  return (
    <div id="search" className="search-element">
      <input
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
        className="search"
        placeholder="Search"
      />
    </div>
  );
}
