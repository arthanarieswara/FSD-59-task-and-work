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
    var url = 'https://api.chucknorris.io/jokes/random';
    var res = await fetch(url);
    var data = await res.json();
    console.log(data);
    document.getElementById('container').innerHTML = `<h3>Displaying Random Dad Jokes</h3><p>"${data.value}"</p>`;

    var reset = document.createElement('button');
    reset.className = 'btn btn-primary';
    reset.innerText = 'Reset';
    reset.id ='reset';
    container.append(reset);

    reset.addEventListener('click',function(){
        location.reload();
    })
})

