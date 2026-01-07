document.getElementById('hamburger').onclick = ()=>{
  document.getElementById('mobileMenu').classList.toggle('hidden');
};

function toggleLang(){
  document.querySelectorAll('.cn').forEach(e=>e.classList.toggle('hidden'));
  document.querySelectorAll('.en').forEach(e=>e.classList.toggle('hidden'));
}

document.getElementById('langToggleDesktop')?.addEventListener('click', toggleLang);
document.getElementById('langToggleMobile')?.addEventListener('click', toggleLang);
