$(document).ready(function(){

    $("#getWeatherForecast").click(function(){
           return getWeatherForecast();



    })

});
function getWeatherForecast(){
    var city = $("#city").val();

    if(city != " "){
         $.ajax({
            url:"http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric" + "&cnt=5"+ "&APPID=62722d837f16ba853802e4c925da22e9",
            type:"GET",
            dataType: "jsonp",
            success: function(data){
                var table ="";
                for(var i=0; i < data.list.length; i++){
                 table += "<tr>";
                 
                 table += "<td>"+ data.city.name + "</td>";
                 
                 table += "<td>"+ data.list[i].main.temp + "&deg;F</td>";
                 table += "<td>"+ data.list[i].main.humidity + "%</td>";

                 table += "</tr>";
                }

                $("#forecastWeather").html(table);
                $("#city").val('');
            }


         });
    }else{
        $("#error").html("Field cannot be empty");
    }
}











 









