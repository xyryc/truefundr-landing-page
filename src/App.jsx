import { Routes, Route } from "react-router";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Root from "./layouts/Root";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
