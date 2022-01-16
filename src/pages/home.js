import Banner from "../components/banner";
import NewList from "../components/newList";

const HomePage = {
    render() {
        return /* html */ `
            <div class="max-w-5xl mx-auto">
                <div class="banner">
                    ${Banner.render()}
                </div>
                <div class="news">
                    ${NewList.render()}
                </div>
            </div>
        `;
    },
};
export default HomePage;