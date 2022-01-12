import "../style.css";

import Navigo from "navigo";
import HomePage from "./client/business/home";
import Header from "./client/views/header";
import Footer from "./client/views/footer";
import Signup from "./client/business/signup";
import Signin from "./client/business/signin";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/signup": () => {
        print(Signup.render());
    },
    "/signin": () => {
        print(Signin.render());
    },
});
router.resolve();