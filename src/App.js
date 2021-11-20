import AppLayout from "./layouts/AppLayout";
import { routes } from "./routes";
import { useRoutes, Routes, Route } from "react-router-dom";

function App() {
  const elements = useRoutes(routes);

  return (
    <>
      <Routes>
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/*" element={<AppLayout>{elements}</AppLayout>} />
      </Routes>
    </>
  );
}

export default App;
