$(document).ready(function(){

    $('#search').click(function(){
        var ville = $('#ville').val();

        if(ville != ''){
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + ville + "&units=metric&APPID=13e920e79a80c0f9c20b26cf08397d2a",
                type: "GET",
                dataType: "json",
                success: function(data){
                    var donnee = show(data);
                    $("#show").html(donnee);
                    $("#city").val('');
                }
            });

        }else{
            $("#error").html("Veuillez entrer le nom d'une ville");
        }
    });
});

function show(data) {
    return '<div id="img"><img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png"></div>'+"<p>" + data.name + "</p>" + "<p>Temps: " + data.weather[0].main + "</p>" +
        "<p>Température: " + data.main.temp + " °C</p>" + "<p>Température min: " + data.main.temp_min + " °C</p>" + "<p>Température max: " + data.main.temp_max + " °C</p>";

}
