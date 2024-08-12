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



// creating a search bar with button

var search = document.createElement('input');
search.type = 'text';
search.className = 'form-control mb-3';
search.id = 'search';

search.placeholder = 'Enter the option give below';

var button = document.createElement('button');
button.innerText = 'Select';
button.className = 'btn btn-primary';
button.id = 'search-btn';
container.append(search,button);

document.body.appendChild(container);

// creation a rest function

var rest = document.createElement('button');
rest.innerText = 'REST';
rest.className = 'btn btn-primary';
rest.id ='rest-btn';
container.append(rest);
document.body.appendChild(container);


rest.addEventListener('click',function(){
    location.reload();
})

// creating a options for api


var content = document.createElement('div');
content.className = 'content mt-3';
content.id = 'content';
content.innerHTML=`<div class="loader">
1. Dad Jokes <br>
2. Cat <br>
3. Cooking Recipe <br>
4. Random Dog Image <br>
</div>`

document.body.appendChild(content);


// creating a function for button once clicked


button.addEventListener('click',async function(){
    var searchValue = document.getElementById('search').value;
    if(searchValue == 1){
        var url = 'https://api.chucknorris.io/jokes/random';
        var res = await fetch(url);
        var data = await res.json();
        console.log(data);
        document.getElementById('content').innerHTML = `<h3>Displaying Random Dad Jokes</h3><p>"${data.value}"</p>`;
    }
    else if(searchValue == 2){
        var url = 'https://api.thecatapi.com/v1/images/search';
        var res = await fetch(url); 
        var data = await res.json();
        console.log(data);
        document.getElementById('content').innerHTML = `<div> Displaying Random Cat Image</div>
        <img  class="img_fluid" src="${data[0].url}">`;
    }
    else if(searchValue == 3){
        var url = 'https://www.themealdb.com/api/json/v1/1/random.php';
        var res = await fetch(url);
        var data = await res.json();
        console.log(data);
        document.getElementById('content').innerHTML =`<h3>${data.meals[0].strMeal}</h3><img src="${data.meals[0].strMealThumb}"><br><h3>${data.meals[0].strInstructions}` ;
    }
    else if(searchValue == 4){
        var url = 'https://dog.ceo/api/breeds/image/random';
        var res = await fetch(url);
        var data = await res.json();
        console.log(data);
        document.getElementById('content').innerHTML = `<h3>Displaying Random Dog Image</h3><img src="${data.message}">`;

    }
    else{
        alert('Enter the option given below');
    }
})




 
