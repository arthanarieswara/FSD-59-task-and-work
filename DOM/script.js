// // create a html  tag using DOM

// var element = document.createElement('div');
// // 2. Add the content using innerHTML

// element.innerHTML = 'Created an div element using DOM';

// console.log(element);                                   

// var doc = document.getElementById('div')

// console.log(doc);

// // 3 add the element to the body of the Html content

// document.body.appendChild(element);

// // to create nested element 

// var division = document.createElement('div');

// var p = document.createElement('p');

// p.innerHTML = 'Division using DOM';

// division.appendChild(p);

// document.body.appendChild(division);


// create a html  tag using DOM

// var div1 = document.createElement('div');
// div1.classList.add("container");
// var div2 = document.createElement('div');
// div2.classList.add("row");
// var div3 = document.createElement('div');
// div3.classList.add("col");
// div3.innerHTML = 'this is col';
// div2.appendChild(div3);
// div1.appendChild(div2);
// document.body.appendChild(div1);


// var res = document.getElementById('main').innerHTML='Hello World';
// console.log(res);

function form() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    console.log(name, email, password, phone, address);
}