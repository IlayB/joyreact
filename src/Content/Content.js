import "./Content.css";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons/";

function Content() {
  return (
    <div class="top">
      <span>
        <a href="/" class="headLink">
          <span class="topText">ЛЕНТА</span>
        </a>
        <a href="/" class="headLink">
          <span class="topText">ОБСУЖДАЕМОЕ</span>
        </a>
        <a href="/" class="headLink">
          <span class="topText">ЛЮДИ</span>
        </a>
        <a href="/" class="headLink">
          <span class="topText">О ПРОЕКТЕ</span>
        </a>
      </span>
      <span>
        <a href="/" class="headLink">
          <span class="topTextRandom">СЛУЧАЙНЫЙ ПОСТ {">"}</span>
        </a>
      </span>
      <div class="search">
        <div class="input">
          <input
            type="search"
            id="search"
            name="search"
            class="searchInput"
            placeholder="Поиск"
          />
          <button onclick="submit" class="searchIcon">
            <IconContext.Provider value={{ color: "white" }}>
              <div>
                <FaSearch />
              </div>
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Content;
