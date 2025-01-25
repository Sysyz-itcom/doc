// 获取所有懒加载图片
const lazyImages = document.querySelectorAll(".lazy");

// 监听页面滚动
const loadLazyImages = () => {
    lazyImages.forEach(image => {
        if (image.getBoundingClientRect().top < window.innerHeight && !image.src) {
            image.src = image.getAttribute("data-src");
        }
    });
};

// 初始化懒加载
window.addEventListener("scroll", loadLazyImages);
loadLazyImages(); // 页面加载时检查一次
