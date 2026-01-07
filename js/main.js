/* main.js - UPDATED MASTER LOGIC */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Language Switch - Targeted by Class to handle all buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.cn, .en').forEach(el => el.classList.toggle('hidden'));
            
            // Optional: Close mobile menu after toggle if on mobile
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                // mobileMenu.classList.add('hidden'); // Uncomment if you want menu to close
            }
        });
    });
});

// 3. Global WeChat Functions
function openWechat() {
    const popup = document.getElementById('wechatPopup');
    if (popup) {
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Stop scrolling
    }
}

function closeWechat() {
    const popup = document.getElementById('wechatPopup');
    if (popup) {
        popup.style.display = 'none';
        document.body.style.overflow = ''; // Resume scrolling
    }
}
