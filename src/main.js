import "../style.css";

import Navigo from "navigo";
import HomePage from "./pages/home";
import Header from "./components/header";
import ProductPage from "./pages/product";
import AboutPage from "./pages/about";
import Footer from "./components/footer";
import DetailNewsPage from "./pages/DetailNewsPage";
import AdminPosts from "./pages/posts";
import AdminAddPosts from "./pages/posts/add";
import AdminEditPosts from "./pages/posts/edit";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/product": () => {
        print(ProductPage);
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/admin/posts": () => print(AdminPosts),
    "/admin/posts/add": () => print(AdminAddPosts),
    "/admin/posts/:id/edit": ({ data }) => print(AdminEditPosts, data.id),
});
router.resolve();