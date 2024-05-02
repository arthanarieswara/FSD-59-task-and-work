//1.Class Movie


class movie { 

    constructor(title, studio, rating) { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

const movieDetails = new movie("Thunivu","Zee studios", "PG-14");
console.log(movieDetails);



//b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class movies { 

    constructor(title, studio, rating = "PG") { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

const movie1 = new movies("Arthana","Zee studios");
console.log(movie1);


const movie2 = new movies("Banu","Zee studios","PG-14");
console.log(movie2);



/*c.Write a method getPG, which takes an array of base type Movie as its argument, and returns a 
new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances.
 The returned array need not be full.*/

 class Moviee {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
}

let moviee1 = new Moviee("Arthana", "Zee studios", "PG");
let moviee2 = new Moviee("Banu", "Sri Venkateswara Creations", "V");
let movie3 = new Moviee("Eswara", "KRG Studios", "PG");
let movie4 = new Moviee("Priya", "Raj kamal films", "PG-13");
let movie5 = new Moviee("Banupriya", "Vijaya production", "PG");

let movieArray = [moviee1, moviee2, movie3, movie4, movie5];
let pgMovies = Moviee.getPG(movieArray);
console.log(pgMovies); 



/*d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
the studio “Eon Productions”, and the rating “PG­13”*/

class Moviez {
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }
    
    let casinoRoyale = new Moviez("Casino Royale", "Eon Productions", "PG-13");

    console.log(casinoRoyale);


    //2.Circle

    class Circle {
        constructor(radius = 1.0, color = "red") {
          this._radius = radius;
          this._color = color;
        }
      
        get radius() {
          return this._radius;
        }
      
        set radius(radius) {
          this._radius = radius;
        }
      
        get color() {
          return this._color;
        }
      
        set color(color) {
          this._color = color;
        }
      
        toString() {
          return `Circle [radius = ${this._radius} , color = ${this._color}]`;
        }
      
        getArea() {
          return Math.PI * Math.pow(this._radius, 2);
        }
      
        getCircumference() {
          return 2 * Math.PI * this._radius;
        }
      }
      
      const circle1 = new Circle(2, "green");
      const circle2 = new Circle(5, "Yellow");
      
      console.log(circle1.toString());
      console.log("Area:", circle1.getArea());
      console.log("Circumference:", circle1.getCircumference());
      
      console.log(circle2.toString());
      console.log("Area:", circle2.getArea());
      console.log("Circumference:", circle2.getCircumference());
      

      //3.Write a “person” class to hold all the details.

      class Person {
        constructor(firstName, lastName, age, department, email, mobile, city){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.department=department;
            this.email=email;
            this.mobile=mobile;
            this.city = city;
        }
        getPersonDetails(){
            return `Name: ${this.firstName} ${this.lastName}
            age: ${this.age}
            department: ${this.department}
            email: ${this.email}
            mobile: ${this.mobile}
            city: ${this.city}`;
        }
    }
    let person1 = new Person("Arthana", "Eswara",24, "CSE", "qwertyuiop@gmail.com", 9876543210, "Coibatore");
    let person2 = new Person("Banu","Priya", 19, "CSE", "zxyqwe@gmail.com", 9876543210, "Arupukotai");
    
    console.log(person1.getPersonDetails());
    console.log(person2.getPersonDetails());
    

 //4.write a class to calculate the uber price

 class UberPrice {
    constructor(distance, duration, baseFare, costPerMile, costPerMinute) {
      this.distance = distance;
      this.duration = duration;
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
    }
  
    totalPrice() {
      return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
    }
  }
  
  const myUber = new UberPrice(5, 10, 60, 14, 2);
  console.log(myUber.totalPrice());
  