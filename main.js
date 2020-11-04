$(document).ready(function(){

  // Utilizzo Hendelbars per generare una griglia di 6x6 quadrati

  var source = $("#quadrato-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < 36; i++){
    var html = template();
    $(".container").append(html);
  }

// Attivo il mio evento click sui quadrati

  $(".square").click(function() {

    // Salvo in una variabile il click sul quadrato

    var square = $(this);

    // Se il quadrato è neutro...

    if(!square.hasClass("green") && !square.hasClass("yellow")) {

      // Faccio la mia chiamata ajax

      $.ajax(
        {
          "url" : "https://flynn.boolean.careers/exercises/api/random/int",
          "method" : "GET",
          "success" : function(data, stato) {

            // Salvo il risultato della chiamata in una variabile

            var number = data.response;

            // Se è minore o uguale a 5 aggiungo la classe Giallo, altrimenti la classe Verde

            if(number <= 5){
              square.addClass("yellow");
            } else {
              square.addClass("green");
            };

            // Stampo il numero all'interno del quadrato
            square.text(number);

          },
          "error": function (richiesta, stato, errori) {
            alert("E' avvenuto un errore. " + errore);
            }
        }
      );

    } else {
      alert("clicca su un altro quadrato!")
    };
  });

});
