import React from "react";
import Post from "./components/post-component/post-component";
import User from "./components/user-component/user-component";

function App() {
  return (
    <div className="App">
      <User id={3} />
      <Post id={3} />
    </div>
  );
}

export default App;
