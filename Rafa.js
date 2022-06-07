const school = {
    cdmx: "CDMX",
    caba: "CABA",
    rio: "RIO",
    havana: "HAVANA"
}

const home = {
    muebles: 3,
    teles: 2,
    sillas: 10,
    laptops: 1
}

function getElements (name, age) {
    return(`🚀 Hola ${name}, estás ubicado en ${this.cdmx}, y tienes ${age} años`);
}

function getHomeElements (amountM, amountT, amountS, amountL) {
    return(`En tu casa tienes ${amountM} ${this.muebles},
    ${amountT} ${this.teles},
    ${amountS} ${this.sillas},
    ${amountL} ${this.laptops}  
    `)
}

let Github = {
    repositories: 3,
    user: "Rafa 💻"
}

let github = {...Github};

console.log(getElements.call(school, "Rafa", 19));
console.log(getHomeElements.call(home, "Muebles", "Teles", "Sillas", "Laptops"))
console.log(`Hola, los datos son: ${github}`)