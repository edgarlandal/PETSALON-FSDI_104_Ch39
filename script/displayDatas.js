function displaySalonInfo() {
    document.getElementById("saludinfo").innerHTML=`
        <h4> Welcome to the ${petSalon.name}</h4>
        <h4> Call us: ${petSalon.phone}</h4>
        <h4> We are in Street ${petSalon.address.street} Number: ${petSalon.address.numbers}</h4>
        <h4> With zip: ${petSalon.address.zip}</h4>
        <h4> We open doors at ${petSalon.hours.open} and close at ${petSalon.hours.close}</h4>
    `
}

function displayFooter() {
    document.getElementById("footer").innerHTML=`
        Hola mundo
    `
}

function init() {
    displaySalonInfo();
    // displayFooter();
}

window.onload = init;