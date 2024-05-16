// var f= document.getElementsByClassName('fName');
// console.log(f);

// function foo() {
//     var fName = document.getElementById('firstName').value;
//     console.log("First Name:", fName);
//     var lName = document.getElementById('lastName').value;
//     console.log("Last Name:", lName);
//     var email = document.getElementById('email').value;
//     console.log("Email:", email);
//     var location = document.getElementById('location').value;
//     console.log("Location:", location);
// }


// function label_create(tagname,attrname,attrvalue,content)
// {
//     var label = document.createElement(tagname);
//     label.setAttribute(attrname,attrvalue);
//     label.innerHTML = content;
//     return label
// }

function break_create(){
    var br = document.createElement('br');
    return br
}

// function input_create(inputtag,attrname,attrval,attrname1,attrval1){
//     var input = document.createElement(inputtag);
//     input.setAttribute(attrname,attrval);
//     input.setAttribute(attrname1,attrval1);
//     return input
// }


// document.body.appendChild(label_create('label','for','firstName','First Name'));
// document.body.appendChild(break_create());
// document.body.appendChild(input_create('input','type','text','id','firstName'));
// document.body.appendChild(break_create());
// document.body.appendChild(label_create('label','for','lastName','Last Name'));
// document.body.appendChild(break_create());
// document.body.appendChild(input_create('input','type','text','id','lastName'));
// document.body.appendChild(break_create());
// document.body.appendChild(label_create('label','for','email','Email'));
// document.body.appendChild(break_create());
// document.body.appendChild(input_create('input','type','email','id','email'));
// document.body.appendChild(break_create());
// document.body.appendChild(label_create('label','for','location','Location'));
// document.body.appendChild(break_create());
// document.body.appendChild(input_create('input','type','text','id','location'));
// document.body.appendChild(break_create());

// var btn = document.createElement('button');
// document.body.appendChild(break_create());
// btn.innerHTML = 'Submit';
// document.body.appendChild(btn);

// document.body.appendChild(break_create());

// btn.onclick = function(){
//     document.body.appendChild(break_create());
//     var fName = document.getElementById('firstName').value;
//     console.log("First Name:", fName);
//     var fn = document.createElement('div');
//     fn.innerHTML = "First Name: " + fName;
//     document.body.appendChild(fn);
//     document.body.appendChild(break_create());
//     var lName = document.getElementById('lastName').value;
//     console.log("Last Name:", lName);
//     var ln = document.createElement('div');
//     ln.innerHTML = "Last Name: " + lName;
//     document.body.appendChild(ln);
//     document.body.appendChild(break_create());
//     var email = document.getElementById('email').value;
//     console.log("Email:", email);
//     var em = document.createElement('div');
//     em.innerHTML = "Email: " + email;
//     document.body.appendChild(em);
//     document.body.appendChild(break_create());
//     var location = document.getElementById('location').value;
//     console.log("Location:", location);
//     var loc = document.createElement('div');
//     loc.innerHTML = "Location: " + location;
//     document.body.appendChild(loc);
//     document.body.appendChild(break_create());
// }

// creating a mouse highlighter when we hover the content

// var col1 = document.createElement('div');
// col1.setAttribute('id','col1');
// col1.innerHtml = "hover me";
// document.body.appendChild(col1);

var content = document.createElement('div');
content.innerHTML = "mouse hover to change the content";
var value = document.createElement('div');
value.setAttribute('id','value');
value.innerHTML = "hover me";
value.style.textAlign = 'center';
content.style.textAlign = 'center';
document.body.appendChild(content)
document.body.appendChild(break_create());
document.body.appendChild(value);



value.addEventListener('mouseover',function(){value.style.color = 'red';});

value.addEventListener('mouseout',function(){value.style.color = 'black';});

// use the prompt to read a value from the user and display it in the span element

var btn = document.createElement('button');
btn.innerHTML = 'click to enter';
document.body.appendChild(break_create());
document.body.appendChild(btn);

var value1 = document.createElement('div');
value1.setAttribute('id','value1');
value1.style.textAlign = 'center';
document.body.appendChild(value1);

btn.addEventListener('click',function(){
    var val = prompt('Enter a Value');
    document.getElementById('value1').innerHTML = val;
});

                  