var title = document.createElement('div');
title.className = 'title';
title.innerText = 'PROMISE-TASK';

var head = document.createElement('div');
head.className = 'head';
head.innerText = 'DISPLAYING API';

title.append(head);
document.body.appendChild(title);

var container = document.createElement('div');
container.className = 'container';
container.id = 'container';


var btn = document.createElement('button');
btn.className = 'btn btn-primary';
btn.innerText = 'Click Me';
btn.id = 'btn';
container.append(btn);  
document.body.append(container);


btn.addEventListener('click',async function(){
    var url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    var res = await fetch(url);
    var data = await res.json();
    console.log(data);
    document.getElementById('container').innerHTML = `<h3>${data.meals[0].strMeal}</h3><img class = "img" src="${data.meals[0].strMealThumb}"><br><h3>${data.meals[0].strInstructions}` ;
    
    var btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerText = 'Rest';
    btn.id = 'btn';
    container.append(btn);
    btn.addEventListener('click',function(){
        location.reload();
    })
})

