// Open mobile menu
function openMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.remove('hidden');
}

const menuToggleButton = document.getElementById('menu-button');
menuToggleButton.addEventListener('click', openMenu);

// Open mobile menu
function closeMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.add('hidden');
}

const menuToggleButtonClose = document.getElementById('menu-button-close');
menuToggleButtonClose.addEventListener('click', closeMenu);

const menuToggleButtonClose_2 = document.getElementById('menu-button-close-2');
menuToggleButtonClose_2.addEventListener('click', closeMenu);

const menuToggleButtonClose_3 = document.getElementById('menu-button-close-3');
menuToggleButtonClose_3.addEventListener('click', closeMenu);

const menuToggleButtonClose_4 = document.getElementById('menu-button-close-4');
menuToggleButtonClose_4.addEventListener('click', closeMenu);

const menuToggleButtonClose_5 = document.getElementById('menu-button-close-5');
menuToggleButtonClose_5.addEventListener('click', closeMenu);

const menuToggleButtonClose_6 = document.getElementById('menu-button-close-6');
menuToggleButtonClose_6.addEventListener('click', closeMenu);