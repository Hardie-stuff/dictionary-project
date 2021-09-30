import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/Hardie-stuff/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Lara Hardie
            </a>{" "}
          </small>{" "}
        </footer>
      </div>
    </div>
  );
}
