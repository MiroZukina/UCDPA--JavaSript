//Task 1

let person= {name:"Pero", age:"34", location:"London", occupation:"Waiter"}
 
//Task 2

let person1= {name:"Jhon", age:"30", location:"Dublin", occupation:"It", greeting: function(){
  return "Hello My name is "+ this.name+".";
}}

console.log(person1.greeting());

// Task 3 

const pet= {name:"Ron", species:"Dog", age:"7"}

// Task 4

const pet1= {name:"Don", species:"Dog", age:3, birthday:function(){
  return this.age += 1;
}}

console.log(pet1.birthday());

//Task 5 
function printObj(obj) {
  for (let key in obj) {
     console.log(key + ": " + obj[key]);
  } }

  // Task 6
   function print (){
    printObj(pet) + printObj(person)
   }

  console.log(print());

  //Task 7

  person.hobbies= ["running", "cooking", "cyclig"]

  // Task 8

  for (let i = 0; i < person.hobbies.length; i++) {
    console.log(person.hobbies[i]);
  }

  // Task 9,10

  let car = {make:"Honda", model:"Instight", year:2009, getAge: function(){
    let date = new Date();
    let currentYear = date.getFullYear();
    return currentYear - this.year;
  }}

  // task 11

  console.log(car.getAge());

// Challenges 1

const books = [
 {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    published: 1960,
    genre: "Fiction"
  },
  {
    title: "1984",
    author: "George Orwell",
    published: 1949,
    genre: "Science Fiction"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    published: 1951,
    genre: "Fiction"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    published: 1813,
    genre: "Romance"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    published: 1937,
    genre: "Fantasy"
  }
];

// Challenges 2

function getBooksByGenre (array){
  for (let i = 0; i < array.length; i++) {
    let sum = array[i];
    console.log(sum.title +" - "+sum.genre)
    
  }
}

console.log(getBooksByGenre(books))


// Challenges 3


function getNewestBook(books) {
  let newestBook = null;

  for (let i = 0; i < books.length; i++) {
    if (newestBook === null || books[i].published > newestBook.published) {
      newestBook = books[i];
    }
  }

  return newestBook;
}






