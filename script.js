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

// pop-up details
document.addEventListener('DOMContentLoaded', function() {
  const serviceBlocs = document.querySelectorAll('.service-bloc');

  serviceBlocs.forEach(bloc => {
    bloc.addEventListener('click', function() {
      const serviceType = this.dataset.service;
      const existingDetails = this.querySelector('.service-details');

      // Remove any previously opened details
      document.querySelectorAll('.service-details').forEach(detail => {
        if (detail !== existingDetails) {
          detail.remove();
        }
      });

      if (existingDetails) {
        existingDetails.remove();
        return; // If already open, close it
      }

      let detailsContent = '';
      switch (serviceType) {
        case 'social':
          detailsContent = `
            <div class="service-details block w-full bg-white rounded-md p-4 mt-4">
              <div class="pl-5 pb-7">
                <ul class="text-gray-700 text-xs" style="list-style-type: disc">
                  <li>Suivi des états de prestations</li>
                  <li>Contrats de travail et avenants</li>
                  <li>Réponses aux questions relatives au droit social</li>
                  <li>Paiement des salaires, chèques repas, frais propres…</li>
                  <li>Obtention d’aides, subsides et réductions</li>
                  <li>Conseils et optimisation des rémunérations (pour salariés et indépendants)</li>
                  <li>Relation avec le secrétariat social agréé ou non</li>
                  <li>Informatisation de l’administration</li>
                  <li>…</li>
                </ul>
              </div>
            </div>
          `;
          break;
        case 'finance':
          detailsContent = `
            <div class="service-details block w-full bg-white rounded-md p-4 mt-4">
              <div class="pl-5 pb-7">
                <ul class="text-gray-700 text-xs" style="list-style-type: disc">
                  <li>Factures de ventes et suivi des paiements entrants</li>
                  <li>Encodage des factures d’achats et leurs lettrages</li>
                  <li>Récupérations des factures manquantes</li>
                  <li>Réalisation des enveloppes de paiements hebdomadaire ou bimensuel</li>
                  <li>Analyse des postes comptables et conseil en organisation.</li>
                  <li>Réalisation de plans de trésoreries</li>
                  <li>Préparation de dossiers à destination des banques ou des pouvoirs subsidiant</li>
                </ul>
              </div>
            </div>
          `;
          break;
        case 'subsides':
          detailsContent = `
            <div class="service-details block w-full bg-white rounded-md p-4 mt-4">
              <div class="pl-5 pb-7">
                <ul class="text-gray-700 text-xs" style="list-style-type: disc">
                  <li>Aide à l’embauche</li>
                  <li>R&D
                    <ul class="text-gray-700 text-xs" style="list-style-type: disc">
                      <li>Travaux immobiliers</li>
                      <li>Travail de nuit</li>
                      <li>...</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          `;
          break;
        default:
          detailsContent = `<div class="service-details block w-full bg-gray-100 rounded-md p-4 mt-4">Aucun détail supplémentaire disponible pour ce service.</div>`;
      }

      this.insertAdjacentHTML('beforeend', detailsContent);
    });
  });
});
