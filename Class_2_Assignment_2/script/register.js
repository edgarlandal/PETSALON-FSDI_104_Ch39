console.log("outside");

let petSalon={
    name:"The Fashion pet",
    phone:"444-444-4444",
    address:{
        street:"Palm ave",
        numbers:"262",
        zip:"22000"
    },
    hours:{
        open:"9:00am",
        close:"5:00pm"
    },

    pets:[
        {
            name:"Scooby",
            age: 10,
            gender:"Male",
            bread:"Grand Dance",
            service: "Grooming"
        },
        {
            name:"Speedy",
            age: 6,
            gender:"Male",
            bread:"Chihuahua",
            service: "Vaccine"
        },
        {
            name:"Grasy",
            age: 2,
            gender:"Female",
            bread:"Pitbull",
            service: "Grooming"
        }
    ]
}

function displaySalonInfo() {
    document.getElementById("saludinfo").innerHTML=`
        <h3> Welcome to the ${petSalon.name}</h3>
        <h3> Call us: ${petSalon.phone}</h3>
        <h3> We are in Street ${petSalon.address.street} Number: ${petSalon.address.numbers}</h3>
        <h3> with zip: ${petSalon.address.zip}</h3>
        <h3> we open doors at ${petSalon.hours.open} and close at ${petSalon.hours.close}</h3>
    `
}

function displayFooter() {
    document.getElementById("footer").innerHTML=`
        <h3> Welcome to the ${petSalon.name}</h3>
        <h3> Call us: ${petSalon.phone}</h3>
        <h3> We are in Street ${petSalon.address.street} Number: ${petSalon.address.numbers}</h3>
        <h3> with zip: ${petSalon.address.zip}</h3>
        <h3> we open doors at ${petSalon.hours.open} and close at ${petSalon.hours.close}</h3>
    `
}


function displayPets() {
    petSalon.pets.forEach(pet => {
        document.getElementById("petsinfo").innerHTML+=`
        <div class="pet-element">
            <p>Name: ${pet.name}</p>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Service: ${pet.service}</p>
        </div>
    `
    });
}

function displayPetsNumber() {
    document.getElementById("numberpets").innerHTML=`
        <h3>Number of pets register: ${petSalon.pets.length}</h3>
    `
}

function Pet(n, a, g, b, s) {
    this.name = n;
    this.age = a;
    this.gender = g;
    this.bread = b;
    this.service = s;
}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService= document.getElementById("txtService");

function register() {
    console.log("Register a new pet");

    if(!(inputName.value     ||
        inputAge.value      ||
        inputGender.value   ||
        inputBreed.value    ||
        inputService.value)) {
        alert("Error! Missing data.");
    }
    // create a new pet
    let newPet = new Pet(
        inputName.value,
        inputAge.value,
        inputGender.value,
        inputBreed.value,
        inputService.value
    );

    console.log(newPet);

    petSalon.pets.push(newPet);
    displayPetsNumber();
}

function init() {
    // hook event

    // execute functions 

    let pet = new Pet("Lion", 1, "Male", "Pug", "Grooming");
    displaySalonInfo();

    displayPets();

    displayPetsNumber();

    displayFooter();
}

window.onload=init;