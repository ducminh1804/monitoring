import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import useRouteElement from "./useRouteElement";

function App() {
  const route = useRouteElement();
  return <>{route}</>;
}
//mac dinh, route la 1 component, khong phai la 1 obj
export default App;
