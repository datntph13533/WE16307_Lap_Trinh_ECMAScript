import "../style.css";

import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a" });

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(NewPage.render(id));
    },
});
router.resolve();