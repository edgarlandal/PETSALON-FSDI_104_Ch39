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
            service: "Grooming"
        },
        {
            name:"Speedy",
            age: 6,
            gender:"Male",
            service: "Vaccine"
        },
        {
            name:"Grasy",
            age: 2,
            gender:"Female",
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

function init() {
    // hook event

    // execute functions 
    displaySalonInfo();

    displayPets();

    displayPetsNumber();
}

window.onload=init;