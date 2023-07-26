function displayServices() {
    const services = [
        {
            title: "Gromming",
            text: "Our pet grooming services provide exceptional care for your furry friends. Our experienced and compassionate groomers are dedicated to keeping your pets healthy, happy, and looking their best. From dogs to cats and everything in between, we offer a range of grooming services tailored to your pet's individual needs.            ",
            img: "./img/gromming.jpg",
        },

        {
            title: "Nail Cuts",
            text: "Our professional pet nail cutting service ensures that your furry friend's nails are kept in optimal condition. Nail trimming is an essential part of pet grooming as it promotes their overall comfort and well-being.",
            img: "./img/nail-cuts.jpg",
        },

        {
            title: "Vaccine",
            text: "At Vaccine Pets Services, we prioritize the health and well-being of your furry companions. We understand that pets are an important part of your family, and keeping them protected from preventable diseases is crucial. That's why we offer a range of vaccination services tailored to meet the specific needs of your pets.",
            img: "./img/vaccine.png",
        },
    ];

    let content  = '';

    services.forEach( service =>{
        content += `
            <div class="service">
                <h2>${service.title}</h2>
                <img src=${service.img}>
                <p>${service.text}</p>
            </div>
        `;
    });

    document.getElementById("services").innerHTML = content;
}

function init() {
    displayServices();
}

window.onload = init;
