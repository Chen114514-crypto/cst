// 简单的问候功能
function sayHello() {
    alert('你好！欢迎访问我的网站！');
}

// 平滑滚动导航
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 表单提交处理
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('感谢你的留言！这只是一个演示，实际上没有发送。');
});

// 页面加载完成后的欢迎消息
window.addEventListener('load', function() {
    console.log('网页加载完成！欢迎查看控制台消息。');
});
