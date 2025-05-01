// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle-theme');
  const popupOverlay = document.getElementById('popup-overlay');
  const closePopup = document.getElementById('close-popup');

  // Load and apply saved theme preference
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.checked = true;
  }

  // Toggle dark/light theme and save preference
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });

  // Show popup on "Saiba mais" button click
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      popupOverlay.classList.add('show');
      popupOverlay.classList.remove('hidden');
    });
  });

  // Close popup function
  function closePopupOverlay() {
    popupOverlay.classList.remove('show');
    setTimeout(() => {
      popupOverlay.classList.add('hidden');
    }, 300);
  }

  // Close popup by button click
  closePopup.addEventListener('click', closePopupOverlay);

  // Close popup by clicking outside content
  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
      closePopupOverlay();
    }
  });

  // Close popup with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popupOverlay.classList.contains('show')) {
      closePopupOverlay();
    }
  });
});
