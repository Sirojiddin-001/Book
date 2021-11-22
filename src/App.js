import AppLayout from "./layouts/AppLayout";
import { routes } from "./routes";
import { useRoutes, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import ForgotPassword from "./views/ForgotPassword";

function App() {
  const elements = useRoutes(routes);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/*" element={<AppLayout>{elements}</AppLayout>} />
    </Routes>
  );
}

export default App;
