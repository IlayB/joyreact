import { FaHome } from "react-icons/fa";
import "./Main.css";
import eng from "./icon_en.png";

function Main() {
  return (
    <div class="header">
      <div>
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <FaHome /> JoyReactor
        </a>
      </div>
      <div class="contentSwitch">
        sfw
        <span
          style={{
            paddingInline: "15px",
          }}
        >
          <label class="switch">
            <input type="checkbox" /> <div></div>
          </label>
        </span>
        nsfw
        <a href="/" class="engLink">
          <img src={eng} />
        </a>
        <span>
          <a href="/" class="link">
            Вход
          </a>
          <a href="/" class="link">
            Регистрация
          </a>
        </span>
      </div>
    </div>
  );
}

export default Main;
