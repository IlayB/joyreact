import "./Posts.css";
import data from "../articles.json";

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
    </div>
  );
}

export default Posts;
