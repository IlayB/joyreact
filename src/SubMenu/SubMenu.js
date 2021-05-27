import "./SubMenu.css";

function SubMenu() {
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
export default SubMenu;
