import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./lib/scss/_app.scss";
import NoAuthlayout from './Layout/NoAuthenticationLayout'
import Login from "./Screen/Login/Login";
import ContextMovies from "./Context/ContextMovies";
import Home from "./Screen/Home/Home";
import SinglePage from "./Screen/SinglePage/SinglePage";
import Header from "./components/Header/Header";
import CategoriesPage from "./Screen/Categories/Categories";
import SingleCategory from "./Screen/SingleCategory/SingleCategory";
import ProtectedRoute from "./Routes/ProtectedRoute";


function App() {
  return (
    <div className="App">
      <ContextMovies>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route
                path=""
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />

              <Route
                path="singleMovie"
                element={<ProtectedRoute>{<SinglePage />}</ProtectedRoute>}
              />

              <Route
                path="categories"
                element={<ProtectedRoute>{<CategoriesPage />}</ProtectedRoute>}
              />
            </Route>

            <Route
              path="categories/:category"
              element={
                <ProtectedRoute>
                  <SingleCategory />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="*"
              element={
                <h2 className="unfound">
                  404<span>(ERROR)</span>: NOT FOUND PAGE{" "}
                </h2>
              }
            />

            <Route path="/auth">
              <Route
                path=""
                element={<Navigate to="/auth/login" replace={true} />}
              />
              <Route path="login" index element={<Login />} />
            </Route>

            <Route path="/auth" element={<NoAuthlayout />}>
              <Route
                path=""
                element={<Navigate to="/auth/login" replace={true} />}
              />
              <Route path="login" index element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextMovies>
    </div>
  );
}
export default App;
