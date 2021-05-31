import { FaHome } from "react-icons/fa";
import "./Top.scss";
import eng from "../img/icon_en.png";

function Top() {
  return (
    <div class="header">
      <div>
        <a href="/" class="logo">
          <FaHome /> JoyReactor
        </a>
      </div>
      <div class="contentBar">
        sfw
        <span class="switchBox">
          <label class="switch">
            <input type="checkbox" /> <div></div>
          </label>
        </span>
        nsfw
        <a href="/" class="engLink">
          <img src={eng} />
        </a>
        <span>
          <a href="/login" class="link">
            Вход
          </a>
          <a href="/register" class="link">
            Регистрация
          </a>
        </span>
      </div>
    </div>
  );
}

export default Top;
