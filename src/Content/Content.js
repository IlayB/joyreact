import "./Content.css";
import Posts from "./Posts/Posts.js";
import BottomInfo from "./BottomInfo/BottomInfo.js";

function Content() {
  return (
    <div class="whiteBox">
      <Posts />
      <BottomInfo />
    </div>
  );
}

export default Content;
