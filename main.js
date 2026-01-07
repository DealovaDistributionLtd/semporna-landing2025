/* main.js */

// 1. Define the HTML for the Header (Navigation)
const headerHTML = `
    <nav class="nav-container">
        <a href="index.html" class="logo-link">
            <img src="images/logo.png" class="nav-logo" alt="Semporna Tours" 
                 onerror="this.style.display='none'; this.parentElement.innerHTML='<b style=\'color:#00c2d1; font-size:1.3rem;\'>Semporna Tours</b>'"> 
        </a>

        <div class="nav-links">
            <a href="index.html" data-page="index.html">首页 / Home</a>
            <a href="pricing.html" data-page="pricing.html">价格 / Pricing</a>
            <a href="accommodation.html" data-page="accommodation.html">住宿 / Accommodation</a>
            <a href="gallery.html" data-page="gallery.html">相册 / Gallery</a>
            <a href="reviews.html" data-page="reviews.html">评价 / Reviews</a>
            <a href="about.html" data-page="about.html">关于 / About</a>
            <a href="faq.html" data-page="faq.html">常见问题 / FAQ</a>
            <a href="contact.html" data-page="contact.html">联系 / Contact</a>
            <button id="langToggleDesktop" class="lang-btn">🇨🇳 / 🇬🇧</button>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Menu">&#9776;</button>
    </nav>

    <div class="mobile-menu hidden" id="mobileMenu">
        <a href="index.html" data-page="index.html">首页 / Home</a>
        <a href="pricing.html" data-page="pricing.html">价格 / Pricing</a>
        <a href="accommodation.html" data-page="accommodation.html">住宿 / Accommodation</a>
        <a href="gallery.html" data-page="gallery.html">相册 / Gallery</a>
        <a href="reviews.html" data-page="reviews.html">评价 / Reviews</a>
        <a href="about.html" data-page="about.html">关于 / About</a>
        <a href="faq.html" data-page="faq.html">常见问题 / FAQ</a>
        <a href="contact.html" data-page="contact.html">联系 / Contact</a>
        <button id="langToggleMobile" class="lang-btn">🇨🇳 / 🇬🇧</button>
    </div>
`;

// 2. Function to Inject Header and Highlight Active Page
function loadHeader() {
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = headerHTML;

        // Auto-highlight the active page
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const allLinks = document.querySelectorAll(`a[data-page="${currentPage}"]`);
        allLinks.forEach(link => link.classList.add('active'));
    }
}

// 3. Language Switching Logic
let currentLang = localStorage.getItem('siteLang') || 'cn';

function updateLanguage() {
    // Desktop & Mobile Toggle Button Text
    const desktopBtn = document.getElementById('langToggleDesktop');
    const mobileBtn = document.getElementById('langToggleMobile');

    // Toggle Button Text
    const btnText = currentLang === 'cn' ? '🇨🇳 / 🇬🇧' : '🇬🇧 / 🇨🇳';
    if(desktopBtn) desktopBtn.textContent = btnText;
    if(mobileBtn) mobileBtn.textContent = btnText;

    // Show/Hide Elements based on class .cn and .en
    document.querySelectorAll('.cn').forEach(el => {
        el.classList.toggle('hidden', currentLang === 'en');
    });
    document.querySelectorAll('.en').forEach(el => {
        el.classList.toggle('hidden', currentLang === 'cn');
    });

    localStorage.setItem('siteLang', currentLang);
}

function toggleLanguage() {
    currentLang = currentLang === 'cn' ? 'en' : 'cn';
    updateLanguage();
}

// 4. Mobile Menu Logic
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// 5. WeChat Popup Logic (Global)
function openWechat() {
    const popup = document.getElementById('wechatPopup');
    if(popup) popup.style.display = 'flex';
}

function closeWechat() {
    const popup = document.getElementById('wechatPopup');
    if(popup) popup.style.display = 'none';
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // A. Load the Header HTML
    loadHeader();

    // B. Initialize Logic (Must happen AFTER header is loaded)
    initMobileMenu();
    updateLanguage();

    // C. Add Event Listeners to the new buttons
    const desktopBtn = document.getElementById('langToggleDesktop');
    const mobileBtn = document.getElementById('langToggleMobile');

    if(desktopBtn) desktopBtn.addEventListener('click', toggleLanguage);
    if(mobileBtn) mobileBtn.addEventListener('click', toggleLanguage);
});
