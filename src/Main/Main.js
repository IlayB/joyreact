import { FaHome } from "react-icons/fa";
import "./Main.css";

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
      </div>
    </div>
  );
}

export default Main;
