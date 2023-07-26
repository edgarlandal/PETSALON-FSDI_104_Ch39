
/* Object literal */
var student1 = {
    name: "Edgar",
    grade: [5.9, 4.6, 5.6],
    address:{
        state:"BC",
        country:"Mexico"
    }
}

var student2 = {
    name: "Adrian",
    grade: [6.5, 4.2, 5.1],
    address:{
        state:"BC",
        country:"Mexico"
    }
}

var student3 = {
    name: "Jake",
    grade: [6.5, 4.2, 5.1],
    address:{
        state:"San Diego",
        country:"USA"
    }
}

console.log(student1);
console.log(student2);

console.log(student1['name']);
console.log(student2.name);

console.log(student1.grade[1]);
console.log(student2.address.country);

var students = [student1, student2, student3];


document.write("<h1>For each</h1>")

students.forEach(student => {
    document.write(`<p>${student.name}</p>`)
});

document.write("<h1>For simple</h1>")

for (let i = 0; i< students.length; i++) {
    const element = students[i];
    document.write(`<p>${element.name}</p>`)
}

/* Create an object literal */

var house1={
    name: "Simple Home",
    type: "Departament",
    address: "Mexico",
    rooms:{
        bedrooms: 2,
        bathroom: 1
    }

}

var house1={
    name: "Beautiful",
    type: "house",
    address: "Argentina",
    rooms:{
        bedrooms: 4,
        bathroom: 2
    }

}

/* Object constructor */