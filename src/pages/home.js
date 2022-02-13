import Banner from "../components/banner";
import NewList from "../components/newList";
import Footer from "../components/footer";
import Header from "../components/header";

const HomePage = {
    async render() {
        return /* html */`
            <div class="max-w-5xl mx-auto">
            <div id="header">
            ${Header.render()}
        </div>
                <div class="banner">
                    ${Banner.render()}
                </div>
                <div class="news">
                    ${await NewList.render()}
                </div>
            </div>
            <div id="footer">
            ${Footer.render()}
        </div>
        `;
    },
};
export default HomePage;