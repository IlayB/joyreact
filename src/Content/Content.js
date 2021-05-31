import "./Content.scss";
import Posts from "./Posts/Posts.js";
import BottomInfo from "./BottomInfo/BottomInfo.js";
import SideBar from "../SideBar/SideBar";

function Content() {
  return (
    <div>
      <div class="whiteBox">
        <div class="principal">
          <Posts />
          <SideBar />
        </div>
        <BottomInfo />
      </div>
    </div>
  );
}

export default Content;
