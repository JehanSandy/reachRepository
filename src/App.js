import React from "react";

// import component
import TodoPages from "./Pages/todoPages";
import NaviBar from "./component/navbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <NaviBar />
        <TodoPages />
      </div>
    );
  }
}
export default App;
