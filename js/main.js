<script>
/* Mobile menu toggle */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

/* Language toggle */
function setupLangToggle(id){
  const btn = document.getElementById(id);
  if(!btn) return;
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.cn').forEach(e=>e.classList.toggle('hidden'));
    document.querySelectorAll('.en').forEach(e=>e.classList.toggle('hidden'));
  });
}

setupLangToggle('langToggleDesktop');
setupLangToggle('langToggleMobile');
</script>
