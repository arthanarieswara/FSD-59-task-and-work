
document.getElementById("btn").addEventListener("click",result);
async function result(){
    var resultsContainer = document.getElementById('col');
    resultsContainer.innerHTML = '';
    try {  
        var ask = document.getElementById("shows").value; 
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${ask}`);
        var res = await data.json();
        var col = document.createElement('div');
        col.setAttribute('id','col');
        col.setAttribute('class','col-lg-4');
        col.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${res[0].show.image.medium}" class="card-img-top" alt="${res[0].show.name}">
        <div class="card-body">
          <h5 class="card-title">Show Name : ${res[0].show.name}</h5>
          <p class="card-text"> Genre : ${res[0].show.genres}</p>
          <p class="card-text">Rating : ${res[0].show.rating.average}</p>
          <p class="card-text">Language : ${res[0].show.language}</p>
          <p class="card-text">premiered : ${res[0].show.premiered}</p>
          <p class="card-text">Runtime : ${res[0].show.runtime}</p>
          <p class="card-text">Schedule : ${res[0].show.schedule.time} | ${res[0].show.schedule.days}</p>
          <p class="card-text">Summary : ${res[0].show.summary}</p>
        </div>
      </div>`
    
        document.body.appendChild(col);

    } catch (error) {
        console.log(error);
    }
}
