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


document.getElementById('hamburger').addEventListener('click', function () {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active'); // メニューの表示/非表示を切り替える
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // 一度表示したら監視を解除
            }
        });
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in2");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // 一度表示したら監視を解除
            }
        });
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in3");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // 一度表示したら監視を解除
            }
        });
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".slide-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // 一度表示したら監視を解除
            }
        });
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".slide-in2");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // 一度表示したら監視を解除
            }
        });
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".slide-in3");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // 一度表示したら監視を解除
            }
        });
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});