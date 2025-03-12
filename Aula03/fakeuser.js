

import names from "./names.js"
import sobrenomes from "./sobrenomes.js"
//console.log("Nomes contém: ", names)

function fakeName(){
    let posi = parseInt (Math.random()*names.length)
    return names[posi]
}
function fakeSobrenome(){
    let posi = parseInt(Math.random()*sobrenomes.length)
    return sobrenomes[posi]
}

export function createFakeUser(){
    let nome = fakeName()
    let sobrenome= fakeSobrenome()
    let username = nome.charAt(0) + sobrenome
    username=username.toLowerCase()
    let user = {
        name: nome,
        lastname: sobrenome,
        login: username,
        idade: 0,
        rg: 0,
        email: ""
        }
        return user
}