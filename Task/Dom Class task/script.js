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


function label_create(tagname,attrname,attrvalue,content)
{
    var label = document.createElement(tagname);
    label.setAttribute(attrname,attrvalue);
    label.innerHTML = content;
    return label
}

function break_create(){
    var br = document.createElement('br');
    return br
}

function input_create(inputtag,attrname,attrval,attrname1,attrval1){
    var input = document.createElement(inputtag);
    input.setAttribute(attrname,attrval);
    input.setAttribute(attrname1,attrval1);
    return input
}


document.body.appendChild(label_create('label','for','firstName','First Name'));
document.body.appendChild(break_create());
document.body.appendChild(input_create('input','type','text','id','firstName'));
document.body.appendChild(break_create());
document.body.appendChild(label_create('label','for','lastName','Last Name'));
document.body.appendChild(break_create());
document.body.appendChild(input_create('input','type','text','id','lastName'));
document.body.appendChild(break_create());
document.body.appendChild(label_create('label','for','email','Email'));
document.body.appendChild(break_create());
document.body.appendChild(input_create('input','type','email','id','email'));
document.body.appendChild(break_create());
document.body.appendChild(label_create('label','for','location','Location'));
document.body.appendChild(break_create());
document.body.appendChild(input_create('input','type','text','id','location'));
document.body.appendChild(break_create());

var btn = document.createElement('button');
document.body.appendChild(break_create());
btn.innerHTML = 'Submit';
document.body.appendChild(btn);

document.body.appendChild(break_create());

btn.onclick = function(){
    document.body.appendChild(break_create());
    var fName = document.getElementById('firstName').value;
    console.log("First Name:", fName);
    var fn = document.createElement('div');
    fn.innerHTML = "First Name: " + fName;
    document.body.appendChild(fn);
    document.body.appendChild(break_create());
    var lName = document.getElementById('lastName').value;
    console.log("Last Name:", lName);
    var ln = document.createElement('div');
    ln.innerHTML = "Last Name: " + lName;
    document.body.appendChild(ln);
    document.body.appendChild(break_create());
    var email = document.getElementById('email').value;
    console.log("Email:", email);
    var em = document.createElement('div');
    em.innerHTML = "Email: " + email;
    document.body.appendChild(em);
    document.body.appendChild(break_create());
    var location = document.getElementById('location').value;
    console.log("Location:", location);
    var loc = document.createElement('div');
    loc.innerHTML = "Location: " + location;
    document.body.appendChild(loc);
    document.body.appendChild(break_create());
}

// displaying the above recived information in the html page

                                    
