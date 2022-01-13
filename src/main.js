import "../style.css";

import Navigo from "navigo";
import HomePage from "./client/business/home";
import Signup from "./client/business/signup";
import Signin from "./client/business/signin";
import NewPage from "./client/business/newsDetail";
import AdminDashboard from "./admin/views/Dashboard";
import ListNeww from "./admin/business/news";
import AddNewPage from "./admin/business/news/add";
import EditNewPage from "./admin/business/news/edit";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("content").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(NewPage.render(id));
    },
    "/signup": () => {
        print(Signup.render());
    },
    "/signin": () => {
        print(Signin.render());
    },
    "/admin/dashboard": () => {
        print(AdminDashboard.render());
    },
    "/admin/news": () => {
        print(ListNeww.render());
    },
    "/admin/news/add": () => {
        print(AddNewPage.render());
    },
    "/admin/news/:id/edit": ({ data }) => {
        const { id } = data;
        print(EditNewPage.render(id));
    },
});
router.resolve();