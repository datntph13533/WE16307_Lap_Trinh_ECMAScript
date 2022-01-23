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

// const a = 10;
// const b = 20;

// function sum(a,b, callback){
//     callback(a + b);
// }
// sum(a,b, function(result){
//     document.getElementById('app').innerHTML = result;
// });

// function loadScript(src, callback){
//     const script = document.createElement('script');
//     script.src = src;
//     script.onload = () => {
//         callback(null, script)
//     }
//     script.onerror = () => {
//         callback(new Error("Lỗi kết nối"));
//     }
//     document.head.append(script);
// }
// loadScript('https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif', function(error, script){
//     if(error){
//         console.log(error);
//     } else {
//         console.log(script);
//     }
// });

// Promise
// function loadScript(src) {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement("script");
//         script.src = src;
//         script.onload = () => {
//             resolve(script);
//         };
//         script.onerror = () => {
//             reject(new Error("Lỗi kết nối"));
//         };
//         document.head.append(script);
//     });
// }
// loadScript('https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif')
//     .then(script => console.log(script))
//     .catch(error => console.log(error))

// async/await
// async function asyncFunction() {
//     try {
//         const result = await loadScript("https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif");
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// asyncFunction();