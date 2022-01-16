import "../style.css";

import Navigo from "navigo";
import HomePage from "./pages/home";
import Header from "./components/header";
import ProductPage from "./pages/product";
import AboutPage from "./pages/about";
import Footer from "./components/footer";
import DetailNewsPage from "./pages/DetailNewsPage";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
});
router.resolve();