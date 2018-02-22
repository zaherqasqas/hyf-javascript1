//1
// function myFunction(a, b, c) {
//     var max = a + b + c;
//     return max;
// }
// alert(myFunction(10, 5, 5));

//2
// function colorCar(color) {
//     console.log('This is a ' + color + ' car');
// }
// let carColor = 'red';
// colorCar(carColor);

//3
// let myClass = {
//     Zaher: 100,
//     Ahmad: 50,
//     Weal: 0
// };
// function showMyClass(object) {
//     console.log('The names of object: ' + Object.getOwnPropertyNames(object));
//     console.log('The values of object: ' + Object.values(object));
// }
// showMyClass(myClass);

//4
// function vehicleType(color, code) {
//     if (code == 1) {
//         code = "car";
//     } else if (code == 2) {
//         code = "motorbike";
//     }
//     return `a ${color} ${code}`;
// }

// console.log(vehicleType("red", 1));
// console.log(vehicleType("blue", 2));

// //5
// console.log((3 === 3) ? "true" : "false");

//6
function vehicle(color, code, age) {
    if (code == 1) {
        console.log("a " + color + " car");
    } else if (code == 2) {
        console.log("a " + color + " motorbike");
    }
}
vehicle("blue", 1, 5);

//7
let vehiclesList = ["motorbike", "caravan", "bike", "car"];
console.log(vehiclesList)

function vehicle2(color, code, age) {
    if (age > 2) {
        console.log('a ' + color + ' used ' + vehiclesList[code]);
    }
    if (age <= 2) {
        console.log('a ' + color + ' new ' + vehiclesList[code]);
    }
}
vehicle2("green", 2, 5);
vehicle2("silver", 1, 1);
vehicle2("blue", 0, 2);

//8
console.log(vehiclesList[2]);

//9
function vehicle2(color, code, age) {
    if (age > 2) {
        console.log('a ' + color + ' used ' + vehiclesList[code]);
    }
    if (age <= 2) {
        console.log('a ' + color + ' new ' + vehiclesList[code]);
    }
}
vehicle2("green", 2, 5);
vehicle2("silver", 1, 1);
vehicle2("blue", 0, 2);

//10
let advertisement = "Amazing Joe's Garage, we service ";
let vList = [vehiclesList[0]],
    vLast = vehiclesList[vehiclesList.length - 1];

for (let i = 1; i < vehiclesList.length - 1; i++) {
    vList.push(vehiclesList[i]);
}

advertisement = advertisement + vList.join('s, ') + 's and ' + vLast + 's.';
console.log(advertisement);

//11
vehiclesList.push('scooter');
advertisement = "Amazing Joe's Garage, we service ";
vList = [vehiclesList[0]], vLast = vehiclesList[vehiclesList.length - 1];

for (let i = 1; i < vehiclesList.length - 1; i++) {
    vList.push(vehiclesList[i]);
}

advertisement = advertisement + vList.join('s, ') + 's and ' + vLast + 's.';
console.log(advertisement);

//12
let object = {};
console.log(object);

//13
let teachers = ['Phillip', 'Unmesh', 'Mauro', 'Hardet', 'Keven', 'Samir'];

//14
teachers = {
    Phillip: ['HTML', 'Css'],
    Unmesh: ['Git'],
    Mauro: ['Git', 'JavaScript'],
    Hardet: ['HTML', 'Css', 'Git', 'JavaScript'],
    Keven: ['HTML', 'Css', 'Git', 'JavaScript'],
    Samir: ['JavaScript', 'Git']
};

console.log('The names of teachers: ' + Object.getOwnPropertyNames(teachers));

//15
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

let flag = false;

function checkArrays(arr1, arr2) {

    if (arr1.length === arr2.length)
        flag = true;
    //check the values
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i])
            flag = true;
    }
    //check the type of values
    for (let j = 0; j < arr1.length; j++) {
        if (typeof arr1[j] === typeof arr2[j])
            flag = true;
    }

    if (flag == true) return true;
    else return false;
}

console.log("x==y " + checkArrays(x, y));
console.log("y==z " + checkArrays(y, z));
console.log("z==x " + checkArrays(z, x));

//16
let o1 = {
    foo: 'bar'
};
let o2 = {
    foo: 'bar'
};
let o3 = o2;

console.log(o1);
console.log(o2);
console.log(o3);
console.log('\n');

o2.foo = 'second bar';
console.log(o3);
console.log('By changing o2, o3 will change too ');

o1.foo = 'first bar';
console.log(o3);
console.log('By changing o1, o3 will not change ');

console.log('the order of o3 = o2 or o2 = o3 will be matter ');

//17
let bar = 42;
console.log(typeof typeof bar);

let str = 'Hello';
console.log(typeof typeof str);

let bool = true;
console.log(typeof typeof bool);

