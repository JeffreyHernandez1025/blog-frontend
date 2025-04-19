import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Add from "./Pages/Add/Add";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route index element={<Home />} />
        <Route path="/add-blog" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
