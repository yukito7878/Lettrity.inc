document.addEventListener("DOMContentLoaded", () => {
    let lastScrollY = window.scrollY; // 前回のスクロール位置
    const header = document.getElementById("header");
    let isHidden = false; // ヘッダーが隠れているかどうかの状態を保持

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY; // 現在のスクロール位置

        if (currentScrollY > lastScrollY && !isHidden) {
            // 下にスクロール時にヘッダーを隠す
            header.classList.add("hidden");
            isHidden = true;
        } else if (currentScrollY < lastScrollY && isHidden) {
            // 上にスクロール時にヘッダーを表示
            header.classList.remove("hidden");
            isHidden = false;
        }

        lastScrollY = currentScrollY; // 現在のスクロール位置を記録
    });
});
