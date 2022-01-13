const Nav = {
    render() {
        return /* html */ ` <nav>
        <ul class="flex h-10 py-2">
                <li class="mx-4 text-slate-100"><a href="/">Trang chủ</a></li>
                <li class="mx-4 text-slate-100"><a href="">Điện thoại</a></li>
                <li class="mx-4 text-slate-100">
                    <a href="">Laptop</a>
                </li>
                <li class="mx-[10px] text-slate-100"><a href="/signup">Đăng kí</a></li>
                <li class=" text-slate-100">/</li>
                <li class="mx-[10px] text-slate-100"><a href="/signin">Đăng nhập</a></li>
                <li class="mx-4 text-slate-100"><a href="">Admin</a></li>
                <div class="ml-[180px] items-end">
                    <input type="text" class="border-0 w-[150px] h-[25px]" />
                    <button class="bg-blue-900 border-[1px] border-white text-slate-100 ml-[10px] w-[90px] h-[25px]">Tìm kiếm</button>
                </div>
            </ul>
    </nav>`;
    },
};
export default Nav;