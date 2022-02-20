import { getAll } from "../../api/product";

const ProductPage = {
    async render() {
        const response = await getAll();
        return /* html */`
        <h2 class="font-semibold text-2xl uppercase my-4">Tin tức học tập</h2>            
        <div class="grid grid-cols-3 gap-8">
            ${response.data.map((product) => `
                <div class="border p-3">
                    <a href="/products/${product.id}">
                        <img src="${product.img}" alt="" />
                    </a>
                    <h3 class="my-3"><a href="/products/${product.id}" class="font-semibold text-lg text-orange-500 ">${product.name}</a></h3>
                    <p>${product.desc}</p>
                    <p>${product.price}</p>
                </div>
            `).join("")}
        </div>
        `;
    },
};
export default ProductPage;