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

function displayTable() {
    let table = document.getElementById("petTable");

    let tr = '';

    petSalon.pets.forEach(pet => {
        tr +=`
            <tr>
                <td> ${pet.name}</td>
                <td> ${pet.age}</td>
                <td> ${pet.gender}</td>
                <td> ${pet.service}</td>
            </tr>
        `;
        
    });

    table.innerHTML = tr;
}