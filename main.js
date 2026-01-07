/* main.js - MASTER LOGIC WITH MEMORY */
document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Language Memory Check ---
    // Check if the user previously picked English
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang === 'en') {
        document.querySelectorAll('.cn, .en').forEach(el => el.classList.toggle('hidden'));
    }

    // --- 2. Mobile Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- 3. Language Switch ---
    const langBtns = [document.getElementById('langToggleDesktop'), document.getElementById('langToggleMobile')];
    langBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                // Perform the toggle
                document.querySelectorAll('.cn, .en').forEach(el => el.classList.toggle('hidden'));
                
                // Save the current state to memory
                const isEnglishNow = document.querySelector('.cn').classList.contains('hidden');
                localStorage.setItem('preferredLang', isEnglishNow ? 'en' : 'cn');
            });
        }
    });
});

// --- 4. Global WeChat Functions ---
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
