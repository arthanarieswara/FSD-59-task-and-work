 var res = fetch("https://restcountries.com/v3.1/all")
 res.then((data)=>{
    return data.json()
 }).then((data1 )=> display(data1)).catch((err)=>console.log(err))
 
 
 
 var title = document.createElement('div');
 title.setAttribute('id','title');
 title.setAttribute('class','title');
 title.innerHTML = 'Rest of countries and Weather API';
 document.body.appendChild(title);


//  create a main block of the program

var main = document.createElement('div');
main.setAttribute('id','main');
main.setAttribute('class','main');


var  row = document.createElement('div');
row.setAttribute('id','row');
row.setAttribute('class','row');

// Creating a function block to display the country data

function display(data1){
    for(var i=0; i<data1.length; i++){
        var col = document.createElement('div');
        col.setAttribute('id','col');
        col.setAttribute('class','col-lg-4');
        col.innerHTML = `<div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${data1[i].name.common}</div>
        <div class="card-body text-primary">
          <img src="${data1[i].flags.png}" class="card-img-top" alt="Flag">
          <div class="content-text">
          <h5 class="card-title">Capital : ${data1[i].capital}</h5>
          <p class="card-text">Region : ${data1[i].region}</p>
          <p class="card-text">Country Code : ${data1[i].cca2}</p>
          <p class="card-text">Latitude : ${data1[i].latlng[0]}</p>
          <p class="card-text">Longitude : ${data1[i].latlng[1]}</p>
          </div>`
    
        row.appendChild(col);
        main.appendChild(row);
        document.body.appendChild(main);    
    }
}

