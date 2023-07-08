function displayCards() {
    // travel the array

    let card = "";
    petSalon.pets.forEach(element => {
        card += `
            <div>
                <h5> Name: ${element.name}</h5>
            </div>.
        `;
    });


    console.log(card);
    // create the template of the card

    //insert the card into the HTML

}

function deletePet(id) {
    for (let i = 0; i < petSalon.pets.length; i++) {
        let pet = petSalon.pets[i];
        if (pet.id == id) {
            petSalon.pets.splice(i, 1);
            break;
        }
    }
    // displayTable();

    document.getElementById(id).remove();
    document.getElementById(id).remove();

    console.log(petSalon.pets);

    displayPetsNumber();
}

function displayTable() {
    let table = document.getElementById("petTable");

    let tr = '';

    petSalon.pets.forEach(pet => {
        tr += `
            <tr id="${pet.id}">
                <td> ${pet.name}</td>
                <td> ${pet.age}</td>
                <td> ${pet.gender}</td>
                <td> ${pet.breed}</td>
                <td> ${pet.service}</td>
                <td> ${pet.schedule}</td>
                <td> ${pet.owner}</td>
                <td><button class="btn" onclick="deletePet(${pet.id})"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
        `;

    });

    table.innerHTML = tr;
}