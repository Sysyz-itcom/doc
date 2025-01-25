function showNotification() {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = '通知信息';

    // 添加到页面
    document.body.appendChild(notification);

    // 自动关闭
    setTimeout(() => {
        notification.style.opacity = 0;
        setTimeout(() => {
            notification.remove();
        }, 500);  // 延迟删除
    }, 3000);  // 3秒后关闭
}
