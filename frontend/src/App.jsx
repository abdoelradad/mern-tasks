import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import LoginPage from "./pages/Login/LoginPage";

import AppLayout from "./ui/AppLayout";
import Tasks from "./pages/Tasks/Tasks";

const routes = (
  <Router>
    <Routes>
      <Route element={<AppLayout />}>
        <Route index exact element={<HomePage />} />
        <Route path="signup" exact element={<SignUpPage />} />
        <Route path="login" exact element={<LoginPage />} />
        <Route path="tasks" exact element={<Tasks />} />
      </Route>
    </Routes>
  </Router>
);

function App() {
  return <div>{routes}</div>;
}

export default App;
