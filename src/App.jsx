import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";

const App = () => {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomePage/>} />
                    <Route exact path="/cart" element={<CartPage/>} />
                    <Route exact path="/category" element={<CategoryPage/>} />
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/register" element={<RegisterPage/>} />
                    <Route path="/*" element={<NotFoundPage/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;