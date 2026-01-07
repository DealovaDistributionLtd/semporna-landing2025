// ===== LANGUAGE TOGGLE =====
const langToggles = [document.getElementById('langToggleDesktop'), document.getElementById('langToggleMobile'), document.getElementById('langToggle')];
langToggles.forEach(toggle=>{
  if(toggle){
    toggle.addEventListener('click', ()=>{
      document.querySelectorAll('.cn').forEach(e=>e.classList.toggle('hidden'));
      document.querySelectorAll('.en').forEach(e=>e.classList.toggle('hidden'));
    });
  }
});

// ===== MOBILE HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if(hamburger && mobileMenu){
  hamburger.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('hidden');
  });
}

// ===== FLOATING WECHAT POPUP =====
const popup = document.getElementById('wechatPopup');
function openWechat(){
  if(popup){
    popup.style.display='flex';
    document.body.style.overflow='hidden';
  }
}
function closeWechat(){
  if(popup){
    popup.style.display='none';
    document.body.style.overflow='';
  }
}

// ===== SLIDERS =====
function prevSlide(btn){
  const slider = btn.parentElement;
  const images = JSON.parse(slider.dataset.images);
  const img = slider.querySelector('img');
  let currentIndex = images.findIndex(url=>img.src.includes(url.split('/').pop()));
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  img.src = images[currentIndex];
}

function nextSlide(btn){
  const slider = btn.parentElement;
  const images = JSON.parse(slider.dataset.images);
  const img = slider.querySelector('img');
  let currentIndex = images.findIndex(url=>img.src.includes(url.split('/').pop()));
  currentIndex = (currentIndex + 1) % images.length;
  img.src = images[currentIndex];
}

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-item').forEach(item=>{
  item.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const answer = item.querySelector('.faq-answer');
      if(answer){
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
});
