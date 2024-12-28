import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../Layout/Layout.tsx";
import Loader from "../Loader/Loader.tsx";
import "./App.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.tsx"));
const CatalogPage = lazy(
  () => import("../../pages/CatalogPage/CatalogPage.tsx")
);
const TruckPage = lazy(() => import("../../pages/TruckPage/TruckPage.tsx"));
const NotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage.tsx")
);

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<TruckPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
