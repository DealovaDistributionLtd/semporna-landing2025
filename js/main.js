/* main.js */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Language switch logic
    const langBtnDesktop = document.getElementById('langToggleDesktop');
    const langBtnMobile = document.getElementById('langToggleMobile');
    const toggleFunc = () => {
        document.querySelectorAll('.cn, .en').forEach(e => e.classList.toggle('hidden'));
    };

    if (langBtnDesktop) langBtnDesktop.addEventListener('click', toggleFunc);
    if (langBtnMobile) langBtnMobile.addEventListener('click', toggleFunc);
});

// 3. WeChat Popup Functions (Global)
function openWechat() {
    const popup = document.getElementById('wechatPopup');
    if (popup) {
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeWechat() {
    const popup = document.getElementById('wechatPopup');
    if (popup) {
        popup.style.display = 'none';
        document.body.style.overflow = '';
    }
}
