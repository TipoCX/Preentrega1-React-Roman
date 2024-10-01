import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import CategoryList from "../pages/CategoryList";
import NavBar from "../components/NavBar/NavBar";
import { getCategories } from "../services/products.service";
import { useEffect, useState } from "react";

function MainRouter() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories().then((res) => {
            setCategories(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <Router>
            <NavBar categories={categories} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/category/:slug" element={<CategoryList />} />
            </Routes>
        </Router>
    );
}

export default MainRouter;
