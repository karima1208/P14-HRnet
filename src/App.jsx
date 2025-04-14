import "@ant-design/v5-patch-for-react-19";
import { useState } from "react";
import "./App.css";
import Navigator from "./navigator/Navigator";

function App() {
  const [count, setCount] = useState(0);

  return <Navigator />;
}

export default App;
