$(document).ready(function(){

  var box = $(".box");
  var source   = $("#template").html();
  var template = Handlebars.compile(source);

  var number_in_box = {
   number_box : ''
  };

    box.click(function (){
      var selected_box = $(this);
      if (!selected_box.hasClass("used")) {
        $.ajax({
            'url' : "https://flynn.boolean.careers/exercises/api/random/int",
            'method' : "GET" ,
            'success' : function (data) {
                  var number = data.response;
                  number_in_box.number_box = number;
                  var html = template(number_in_box);
                  selected_box.append(html);
                  changecolor(number ,selected_box);
            },
            'error' : function () {
                  alert("NON FUNZIONA LA RICHIESTA ajax!");
            }
        });
      };
    });

});



function changecolor(number , selector) {
  if (number <= 5) {
    selector.addClass("yellow used");
  } else {
    selector.addClass("green used");
  }
}

// COME FARE PER RITARDARE DEGLI EVENTI AD ESEMPIO CONTROLLARE SE QUANTI DIV HANNO
// LA CLASSE USED SENZA AVERE IL PROBLEMA DI CHI VIENE PRIMA.
