import axios from "axios";

const NewList = {
    async render() {
        const response = await axios.get("https://5e79b4b817314d00161333da.mockapi.io/posts");
        return /* html */`
        <h2 class="font-semibold text-2xl uppercase my-4">Tin tức học tập</h2>            
        <div class="grid grid-cols-3 gap-8">
            ${response.data.map((post) => `
                <div class="border p-3">
                    <a href="">
                        <img src="${post.img}" alt="" />
                    </a>
                    <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">${post.title}</a></h3>
                    <p>${post.desc}</p>
                </div>
            `).join("")}
        </div>
        `;
    },
};
export default NewList;