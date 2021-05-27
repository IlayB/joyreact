import "./Posts.css";
import data from "../articles.json";

import { RiEmotionUnhappyLine, RiEmotionHappyLine } from "react-icons/ri";
import { IconContext } from "react-icons/";

function Posts() {
  var tags = data.tags;

  return (
    <div class="post">
      <div class="avatarNickname">
        <img src={data.avatar} class="avatar" />
        <a href="/" class="nickname">
          {data.nickname}
        </a>
      </div>
      <div class="tags">
        {Object.values(tags).map(function (tag) {
          return (
            <a href="/" class="tag">
              {tag}
            </a>
          );
        })}
      </div>
      <img src={data.image} class="image" />
      <div class="bottomInfo">
        <div>
          <button onClick="/" class="comments">
            &#709; КОММЕНТАРИИ {data.comments}
          </button>
          <span class="time">{data.time}</span>
          <a href="/" class="nickname">
            ссылка
          </a>
        </div>
        <span class="rating">
          <span class="ratingText">{data.rating}</span>
          <a href="/">
            <IconContext.Provider
              value={{ color: "green", size: "35px", className: "upvote" }}
            >
              <RiEmotionUnhappyLine />
            </IconContext.Provider>
          </a>
          <a href="/">
            <IconContext.Provider
              value={{ color: "red", size: "35px", className: "downvote" }}
            >
              <RiEmotionHappyLine />
            </IconContext.Provider>
          </a>
        </span>
      </div>
    </div>
  );
}

export default Posts;
