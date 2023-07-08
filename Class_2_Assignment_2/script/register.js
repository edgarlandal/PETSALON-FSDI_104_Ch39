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

    pets:[]
}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputSchedule = document.getElementById("txtSchedule");
let inputOwner = document.getElementById("txtOwner");

// ----*****
let notifications = document.getElementById("notifications");

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
    document.getElementById("petsinfo").innerHTML='';
    petSalon.pets.forEach(pet => {
        document.getElementById("petsinfo").innerHTML+=`
        <div class="pet-element" id="${pet.id}">
            <p>Name: ${pet.name}</p>
        </div>
    `
    });
}

function displayPetsNumber() {
    document.getElementById("numberpets").innerHTML=`
        <h3>Number of pets register: ${petSalon.pets.length}</h3>
    `
}

function clearForm() {
    inputName.value = '';
    inputAge.value = '';
    inputGender.value = '';
    inputBreed.value = '';
    inputService.value = '';
    inputSchedule.value = '';
    inputOwner.value = '';
}

let c = 0;
function Pet(n, a, g, b, s, sc, o) {
    this.id = c++;
    this.name = n;
    this.age = a;
    this.gender = g;
    this.breed = b;
    this.service = s;
    this.schedule = sc; 
    this.owner = o;
}

function isValid() {
    let validation = true;
    inputName.classList.remove("error");
    inputAge.classList.remove("error");
    inputGender.classList.remove("error");
    inputBreed.classList.remove("error");
    inputService.classList.remove("error");
    inputSchedule.classList.remove("error");
    inputOwner.classList.remove("error");

    notifications.classList.remove("error");

    let error = '';

    if(!(inputName.value)) {
        validation = false;
        inputName.classList.add("error");
        error = error + " name";
    }

    if (!(inputAge.value)) {
        validation = false;
        inputAge.classList.add("error");
        error = error + " age";
    }

    if (!(inputGender.value)) {
        validation = false;
        inputGender.classList.add("error");
        error = error + " gender";
    }

    if (!(inputBreed.value)) {
        validation = false;
        inputBreed.classList.add("error");
        error = error + " breed";
    }

    if(!(inputService.value)){
        validation = false;
        inputService.classList.add("error");
        error = error + " service";
    }

    if(!(inputSchedule.value)){
        validation = false;
        inputSchedule.classList.add("error");
        error = error + " schedule";
    }

    if(!(inputOwner.value)){
        validation = false;
        inputOwner.classList.add("error");
        error = error + " owner";
    }

    if(!validation){
        notifications.innerHTML=(`<h3>error! no v alid for ${error}</h3>`);
        notifications.classList.add("error");
    }


    return validation;
}

function register() {
    console.log("Register a new pet");

    if (isValid()) {
        // create a new pet
        let newPet = new Pet(
            inputName.value,
            inputAge.value,
            inputGender.value,
            inputBreed.value,
            inputService.value,
            inputSchedule.value,
            inputOwner.value
        );

        petSalon.pets.push(newPet);
        console.log(newPet);
        clearForm();
        displayPets();
        displayPetsNumber();
        displayTable();
    }
}

function init() {
    // hook event

    // execute functions 

    let lion = new Pet("Lion", 1, "Male", "Pug", "Grooming", "10:00", "Mayra");
    let parker = new Pet("Parker", 1.5, "Male", "Pug", "Vaccinie", "09:00", "Maria");

    petSalon.pets.push(lion, parker);

    displaySalonInfo();
    displayPets();
    displayPetsNumber();
    displayTable();
    displayFooter();
}

window.onload=init;