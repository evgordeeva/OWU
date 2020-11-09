/* task2
let dog = {
    name: 'Jack',
    age: '5',
    live: 'house',
    eat: 'meat',
    toy: 'ball',
}
console.log(dog);

let man = {
    name: 'Den',
    age: '35',
    live: 'Kyiv',
    eat: 'pizza',
    hobby: 'fishing',
}
console.log(man);

let car = {
    name: 'BMW X7 30d',
    color: 'black',
    engine: '2993',
    engine_acceleration: '7s',
    fuel_type: 'diesel',
}
console.log(car);

let apartment = {
    town: 'Kyiv',
    floor: '6',
    rooms: '3',
    area: '60 m²',
    price: '80000$',
}
console.log(apartment);

let book = {
    author: 'John Kehoe',
    pages: '176',
    year_of_publication: '2007',
    genre: 'psychology',
    price: '80000$',
}
console.log(book);

/* task9

let mix = [
    [{dogs: 'Boy'}, {dogs: 'Jack'}, {dogs: 'Ban'}, {dogs: 'Leo'}, {dogs: 'Mac'}],
    [{man: 'Dima'}, {man: 'Kolya'}, {man: 'Den'}, {man: 'Roma'}, {man: 'Tom'}],
    [{man: 'Audi'}, {man: 'BMW'}, {man: 'Ferrari'}, {man: 'Lexus'}, {man: 'Mitsubishi'}]
];
console.log(mix);

/* task14
let group = {
    house: {
        price: '125000$',
        location: 'town',
        type_of_building: 'Detached house',
        rooms: ['Bedroom', 'Living room', 'Study', 'Kitchen', 'Bathroom', 'Dining room'],
        pool: 'yes'
    },
    driver: {
        age: '46',
        city: 'Kyiv',
        car: 'own',
        payment: ['cash', 'cashless'],
        safety_belts: 'yes'
    },
    toy: {
        name: 'lego',
        age: '5-7y',
        details: '150',
        material: 'plastic',
        color: ['red', 'blue', 'green', 'orange', 'pink']
    },
    table: {
        material: 'wood',
        size: ['l100', 'w70', 'h95'],
        color: 'brown',
        price: '100$',
        developer: 'ukr'
    },
    bag: {
        material: 'leather',
        zipper: 'yes',
        color: 'light blue',
        price: '50$',
        pocket: ['outside', 'inside']
    }
};
console.log(group);


/* task23
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
console.log(users[7].status);
console.log(users[10].status);
console.log(users[9].name);
console.log(users[2].name);
console.log(users[6].age);
console.log(users[9].age);
console.log(users[4].age, users[4].name);
console.log(users[5].age, users[5].status);
*/

/*template1

let content = document.getElementById('content');
console.log(content);

let rules = document.getElementById('rules');
console.log(rules);

let list = document.getElementsByTagName('li');
console.log(list);

content.innerHTML = 'Hello';
rules.innerHTML = 'Health is important';

content.style.backgroundColor = 'red';
rules.style.backgroundColor = 'red';
for (let x of list) {
    x.style.backgroundColor = 'red';
}

content.style.color = 'blue';
rules.style.color = 'blue';
for (let x of list) {
    x.style.color = 'blue';
}

console.log(rules.classList);
for (let l of rules.classList){
    console.log(l);
}

let elements = document.getElementsByClassName('fc_rules');
console.log(elements);
for (let elem of elements){
    elem.style.color = 'red';
}*/

