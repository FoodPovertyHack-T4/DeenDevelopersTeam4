import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import AuthProvider from "./context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Layout>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route exact path="/dashboard" element={<PrivateRoute />}>
              <Route exact path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Layout>
  );
}
