import "./Header.css";
import logo from "./logo.png";

function Header() {
  return (
    <div class="logoheader">
      <a href="/">
        <img src={logo} />
      </a>
      <span class="text"> Α и ω</span>
    </div>
  );
}

export default Header;
