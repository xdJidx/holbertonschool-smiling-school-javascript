$(document).ready(function() {
    function displayQuotes() {
      // Afficher le loader avant de lancer la requête
      $('.loader').show();

      $.ajax({
        method: 'GET',
        url: 'https://smileschool-api.hbtn.info/quotes',
        dataType: 'json'
      }).done(function(response) {
        // Masquer le loader lorsque la requête est terminée
        $('.loader').hide();

        // Ajouter les citations dynamiques au carrousel
        $.each(response, function(index, element) {
          let id = (index === 0) ? 'active' : '';
          $('#carouselExampleControls .carousel-inner').append(`
            <div class="carousel-item ${id}">
              <div class="row mx-auto align-items-center">
                <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                  <img src="${element.pic_url}" class="d-block align-self-center" alt="Carousel Pic ${index + 1}" />
                </div>
                <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                  <div class="quote-text">
                    <p class="text-white">${element.text}</p>
                    <h4 class="text-white font-weight-bold">${element.name}</h4>
                    <span class="text-white">${element.title}</span>
                  </div>
                </div>
              </div>
            </div>
          `);
        });
      });
    }

    // Appeler la fonction displayQuotes
    displayQuotes();
  });