// in the program to print the country name region subregion and population. And the flags of the country from the rest of the countries API.


const  req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
  const obj = JSON.parse(this.response);

    // This used for printing the flags of the country.
  
  for(let ind = 0; ind < obj.length; ind++) {
    console.log(obj[ind].flags.png);
}
//   For Printing the country name region subregion and population
  for(let ind = 0; ind < obj.length; ind++) {
      console.log(obj[ind].name);
      console.log(obj[ind].region);
      console.log(obj[ind].subregion);
      console.log(obj[ind].population);
  }
};