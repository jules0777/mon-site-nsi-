document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour faire défiler vers le bas
    document.getElementById('boutonfleche').addEventListener('click', function(event) {
      window.scrollTo(0, document.body.scrollHeight);
      //  pr faire disparaitre le bouton après clic
      document.getElementById('boutonfleche').classList.add('hidden');
    });
  });
   
  