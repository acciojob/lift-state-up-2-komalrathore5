import React from "react";
import './../styles/App.css';
import ParentComponent from "./ParentComponent";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <ParentComponent />
    </div>
  )
}

export default App