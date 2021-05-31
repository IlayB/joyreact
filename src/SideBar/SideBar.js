import "./SideBar.scss";
import prinCateg from "./principalCategories.json";
import data from "./categories.json";

function SideBar() {
  return (
    <div class="sideBar">
      <div class="hello">
        <div class="sideBarText">ПРИВЕТ!</div>
        <div>Ты тролль, лжец и девственник?</div>
        <button class="joinButton">ПРИСОЕДИНЯЙСЯ!</button>
      </div>
      <div>
        <div class="sideBarText">ЮМОР</div>
        {Object.values(data.categories).map(function (categ) {
          return (
            <div>
              <a href={categ.link} class="categLink">
                <span class="categNameBox">{categ.name}</span>
                <img src={categ.image} class="categImage" />
              </a>
            </div>
          );
        })}
      </div>
      <div>
        <div class="sideBarText">ОСНОВНЫЕ РАЗДЕЛЫ</div>
        {Object.values(prinCateg.categories).map(function (prin) {
          return (
            <div>
              <a href={prin.link} class="categLink">
                <span class="categNameBox">{prin.name}</span>
                <img src={prin.image} class="categImage" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
