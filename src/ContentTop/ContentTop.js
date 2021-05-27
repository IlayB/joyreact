import "./ContentTop.css";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons/";

function ContentTop() {
  return (
    <div class="submenu">
      <span>
        <a href="/" class="submenuLink">
          <span class="topBarText">Новое</span>
        </a>
        <a href="/" class="submenuLink">
          <span class="topBarText">Хорошее</span>
        </a>
        <a href="/" class="submenuLink">
          <span class="topBarText">Лучшее</span>
        </a>
        <a href="/" class="submenuLink">
          <span class="topBarText">Топ за неделю</span>
        </a>
      </span>
      <span>
        <a href="/" class="submenuLink">
          <span class="topBarText">Бездна</span>
        </a>
      </span>
    </div>
  );
}
export default ContentTop;
