import "./App.css";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Routes />
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
}

export default App;
