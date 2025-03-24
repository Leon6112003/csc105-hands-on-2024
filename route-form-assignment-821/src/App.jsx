import { RouterProvider } from "react-router-dom";
import { router } from "./main";
import "./App.css";
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
