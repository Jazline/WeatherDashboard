$(document).ready(function(){

    $("#getWeatherForecast").click(function(){

        var city = $("#city").val();

        if(city != " "){
         $.ajax({
             url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=62722d837f16ba853802e4c925da22e9",
             type:"GET",
             dataType:"jsonp",
             success: function(data){
                 var widget = show(data);

                 $("#showWeather").html(widget);
                 $("#city").val();
             }
              

        });
            
        } else{
            $("#error").html("Field cannot be empty");
        }
    });
     
   


});

function show(data){
    return "<h4>" + data.name + "</h4>"+ "<img src='http://openweathermap.org/img/w/"+ data.weather[0].icon+".png'> " + "<br>"+
           "<h4>Temperature: " + data.main.temp + "&deg;F"+ "</h4><br>"+ 
           "<h4>Humidity: " + data.main.humidity + "%" + "</h4><br>"+
           "<h4>Weather: " + data.wind.speed + "MPH" +"</h4>";
}






  

        