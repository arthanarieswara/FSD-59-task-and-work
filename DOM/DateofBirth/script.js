var title = document.createElement('div');
title.setAttribute('id','title');
title.style.textAlign = 'center';
title.style.marginTop = '50px';   
title.style.fontSize = '30px';
title.innerHTML = "Date of Birth";
document.body.appendChild(title);

var main = document.createElement('div');
main.setAttribute('id','main');
main.style.textAlign = 'center';


var date = document.createElement('input');
date.setAttribute('type','date');
date.setAttribute('id','dob');
date.style.marginTop = '50px';
date.style.width = '500px';
date.style.height = '35px';

var btn = document.createElement('button');
var br = document.createElement('br');
btn.setAttribute('type','button');
btn.setAttribute('id','btn');
btn.style.marginTop = '40px';
btn.style.alignContent = 'center';
btn.setAttribute('class','btn btn-primary');
btn.innerHTML = 'Display Date';
btn.addEventListener('click', display_event);

var clear = document.createElement('button');
clear.setAttribute('type','button');
clear.setAttribute('id','clear');
clear.setAttribute('class','btn btn-danger');
clear.style.marginTop = '40px';
clear.style.marginLeft = '10px';
clear.style.alignContent = 'center';
clear.innerHTML = 'Reset';
clear.addEventListener('click', clear_event);




main.appendChild(date);
main.appendChild(br);
main.appendChild(btn);
main.appendChild(clear);
document.body.appendChild(main);

function display_event(){
    var input = document.getElementById('dob').value;
    var input_date = new Date(input);
    var current_date = new Date();

    var date = document.createElement('div');
    date.innerHTML = `Entered date is ${input}`;
    date.style.textAlign = 'center';
    document.body.appendChild(date);
    

    var mil_second = current_date.getTime() - input_date.getTime();
    
    var second = Math.floor(mil_second / 1000);

    var minute = Math.floor(second / 60);

    var hour = Math.floor(minute / 60);

    var day = Math.floor(hour / 24);

    var year = current_date.getFullYear() - input_date.getFullYear();

    var month = (year*12)+(current_date.getMonth() - input_date.getMonth());


    var age = document.createElement('div');
    age.innerHTML = `Your Age is ${year}`;
    age.style.textAlign = 'center';
    document.body.appendChild(age);

    var month_age = document.createElement('div');
    month_age.innerHTML = `Your Age in Months is ${month}`;
    month_age.style.textAlign = 'center';
    document.body.appendChild(month_age);

    var day_age = document.createElement('div');
    day_age.innerHTML = `Your Age in Days is ${day}`;
    day_age.style.textAlign = 'center';
    document.body.appendChild(day_age);

    var hour_age = document.createElement('div');
    hour_age.innerHTML = `Your Age in Hours is ${hour}`;
    hour_age.style.textAlign = 'center';
    document.body.appendChild(hour_age);

    var minute_age = document.createElement('div');
    minute_age.innerHTML = `Your Age in Minutes is ${minute}`;
    minute_age.style.textAlign = 'center';
    document.body.appendChild(minute_age);

    var second_age = document.createElement('div');
    second_age.innerHTML = `Your Age in Seconds is ${second}`;
    second_age.style.textAlign = 'center';
    document.body.appendChild(second_age);

    var mil_second_age = document.createElement('div');
    mil_second_age.innerHTML = `Your Age in Miliseconds is ${mil_second}`;
    mil_second_age.style.textAlign = 'center';
    document.body.appendChild(mil_second_age);
}

function clear_event(){
    window.location.reload();
}




