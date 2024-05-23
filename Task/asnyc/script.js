async function foo(){
    try{
        let data = await fetch("https://restcountries.com/v3.1/all");
        let res = await data.json();
        console.log(res);
        for(var i=0; i<res.length; i++){
            var test = res[i].latlng;
            open_weather(...test);
        }
    }
    catch(err){
        console.log(err);
    }
    
}


async function open_weather(lat,lon){
    try{
        let data_1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=ab1a84d294513347e3b2995fc5544e77`);
        let data_2 = await data_1.json();
        console.log(data_2.main.temp);
    }
    catch(err){
        console.log(err);

    }
}


foo()
