import { useState } from "react";
import "./App.css";
import Result from "./component/Result";
import Search from "./component/Search";
import Header from "./component/Header";

function App() {
  const [search, setSearch] = useState("");

  return (
    <main className="main">
      <Header />
      <Search setSearch={setSearch} />
      <Result search={search} />
    </main>
  );
}

export default App;
