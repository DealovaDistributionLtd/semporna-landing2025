/* main.js - MASTER LOGIC */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Language Switch
    const langBtns = [document.getElementById('langToggleDesktop'), document.getElementById('langToggleMobile')];
    langBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.cn, .en').forEach(el => el.classList.toggle('hidden'));
            });
        }
    });
});

// 3. Global WeChat Functions
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
