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

// creating a api to display cat image with async and await

btn.addEventListener('click',async function(){
    var url = 'https://api.thecatapi.com/v1/images/search';
    var res = await fetch(url);
    var data = await res.json();
    console.log(data);
    document.getElementById('container').innerHTML = `<img class="img" src="${data[0].url}">` ;

    var btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerText = 'Rest';
    btn.id = 'btn';
    document.getElementById('container').append(btn);

    btn.addEventListener('click',function(){
        location.reload();
    })

})