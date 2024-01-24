import { useState } from "react";
import "./App.css";
import Result from "./component/Result";
import Search from "./component/Search";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Search setSearch={setSearch} />
      <Result search={search} />
    </>
  );
}

export default App;
