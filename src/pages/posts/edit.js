import axios from "axios";
import Banner from "../../components/banner";

const AdminEditPosts = {
    async render() {
        const { data } = await axios.get("https://5e79b4b817314d00161333da.mockapi.io/posts/15");
        return `
            <div class="max-w-5xl mx-auto">
                <div class="banner">
                ${Banner.render()}
                </div>
                <div class="news">
                    <form id="formAddPost">
                        <input type="text" class="border border-black" id="title-post" placeholder="Title Post" value="${data.title}"/><br />
                        <img src="${data.img}"/>
                        <input type="file" class="border border-black" id="img-post" /> <br />
                        <textarea name="" class="border border-black" id="desc-post" cols="30" rows="10">${data.desc}</textarea> <br />
                        <button class="bg-blue-500 inline-block px-3 py-4">Add post</button>
                    </form>
                </div>
            </div>
        `;
    },
    afterRender() {
        const formAddPost = document.querySelector("#formAddPost");
        const CLOUDINARY_PRESET = "js8yqruv";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dvj4wwihv/image/upload";
        formAddPost.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Lấy giá trị của input file
            const file = document.querySelector("#img-post").files[0];
            // Gắn vào đối tượng formData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            // call api cloudinary, để upload ảnh lên
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            // call API thêm bài viết
            axios.post("https://5e79b4b817314d00161333da.mockapi.io/posts", {
                title: document.querySelector("#title-post").value,
                img: data.url,
                desc: document.querySelector("#desc-post").value,
            });
        });
    },
};
export default AdminEditPosts;