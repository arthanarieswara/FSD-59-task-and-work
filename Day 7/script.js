const  req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
  const obj = JSON.parse(this.response);
  console.log("Countries from Asia:", obj.filter(country => country.region === 'Asia'));
  
  const lessThanTwoLakhs = obj.filter(country => country.population < 200000);
  const lessThanTwoLakhsDetails = lessThanTwoLakhs.map(country => ({ name: country.name.common, population: country.population }));
  console.log("Countries with name and population less than 2 lakhs:", lessThanTwoLakhsDetails);

  console.log("Details of countries:");
  obj.forEach(country => {
    console.log("Name:", country.name.common);
    console.log("Capital:", country.capital);
    console.log("Flag:", country.flags.svg);
  });

  const totalPopulation = obj.reduce((acc, country) => acc + country.population, 0);
  console.log("Total population of countries:", totalPopulation);

  
};
   