import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
export default App;
