import book from "../../assets/book.svg";
import "./style.css";

export default function Header() {
  const fontList = [
    "Serif",
    "Arial",
    "Times new Roman",
    "Inter",
    "System-UI",
    "Avenir",
    "Helvetica",
    "Sans-Serif",
    "Segoe UI",
    "Tahoma",
    "Geneva",
    "Verdana",
    "Helvetica",
    "Arial",
    "Arial Black",
    "Verdana",
    "Tahoma",
    "Trebuchet MS",
    "Impact",
    "Gill Sans",
    "Times New Roman",
    "Georgia",
    "Palatino",
    "Baskerville",
    "Andalé Mono",
    "Courier",
    "Lucida",
    "Monaco",
    "Bradley Hand",
    "Brush Script MT",
    "Luminari",
    "Comic Sans MS",
  ];

  const handleSelect = (e) => {
    document.getElementById("root").style.fontFamily = e.target.value;
  };

  return (
    <header id="header">
      <img src={book} alt="Dictionary Icon" width={35} />
      <select onChange={handleSelect}>
        {fontList.map((font, idx) => {
          if (idx === 0) {
            return (
              <option key={idx} value={font} selected>
                {font}
              </option>
            );
          }
          return (
            <option key={idx} value={font}>
              {font}
            </option>
          );
        })}
      </select>
    </header>
  );
}
