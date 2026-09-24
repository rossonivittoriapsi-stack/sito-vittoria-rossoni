const tabs=document.querySelectorAll('.service-tab');const panels=document.querySelectorAll('.service-panel');tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(t=>t.classList.remove('active'));panels.forEach(p=>p.classList.remove('active'));tab.classList.add('active');document.getElementById(tab.dataset.target).classList.add('active')}));const menuToggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');menuToggle?.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const mobileMenuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.nav');
if (mobileMenuButton && mobileNav) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.setAttribute('aria-expanded', mobileNav.classList.contains('open') ? 'true' : 'false');
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
  }));
}
