// 获取滚动到顶部按钮
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// 当页面滚动超过100px时显示按钮
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// 点击按钮时滚动回顶部
scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
