/* main.js */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Toggle
    const toggleButtons = [document.getElementById('langToggleDesktop'), document.getElementById('langToggleMobile')];
    toggleButtons.forEach(btn => {
        if(btn) {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.cn, .en').forEach(el => el.classList.toggle('hidden'));
            });
        }
    });

    // 2. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if(hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// 3. WeChat Popup Logic (Global Functions)
function openWechat() {
    const popup = document.getElementById('wechatPopup');
    if(popup) {
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeWechat() {
    const popup = document.getElementById('wechatPopup');
    if(popup) {
        popup.style.display = 'none';
        document.body.style.overflow = '';
    }
}
