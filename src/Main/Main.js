import background from "./background.jpg";

function Main() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        // backgroundPosition: "center",
        // backgroundSize: "length",
        // backgroundRepeat: "no-repeat",
        // width: "100%",
        // height: "100vh",
      }}
    >
      Hello World
    </div>
  );
}

export default Main;
