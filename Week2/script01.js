
// let myString = "hello, this, is, a, difficult, to, read, sentence"
// console.log(myString);
// console.log(myString.length);

// let myString = "Hello " + "this " + "is " + "a " + "difficult " + "to " + "read " + "sentence"
// console.log(myString);
// console.log(myString.length);

// let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
// myFavoriteAnimals = favoriteAnimals + ',turtle'
// console.log(myFavoriteAnimals);

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle')
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, 'meerkat');

console.log(favoriteAnimals)
console.log(favoriteAnimals.length)

console.log("The array has a length of:", + favoriteAnimals.length)
favoriteAnimals.splice(-2, 1);
console.log(favoriteAnimals)

favoriteAnimals.splice(favoriteAnimals.indexOf('meerkat'), 1);
console.log(favoriteAnimals)
console.log("The item you are looking for is at index: " + "meerkat")


