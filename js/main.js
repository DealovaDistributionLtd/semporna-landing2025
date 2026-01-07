<script>
/* Hamburger toggle */
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
    document.querySelectorAll('.cn').forEach(el => el.classList.toggle('hidden'));
    document.querySelectorAll('.en').forEach(el => el.classList.toggle('hidden'));
  });
}

setupLangToggle('langToggleDesktop');
setupLangToggle('langToggleMobile');
</script>
