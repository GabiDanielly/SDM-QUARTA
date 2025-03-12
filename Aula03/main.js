import {PI, calculaAreaCirculo,calculaCompCirculo} from "./circulos.js"
import { createFakeUser } from "./fakeuser.js"
import{newUser} from "./user.js"

console.log("Hello World!!")

console.log ("O valor de PI é: " + PI)
let area = calculaAreaCirculo (5)
console.log ("O valor da área é:" + area)
let comp = calculaCompCirculo(5)
console.log("O valor do comprimento é: " + comp)

let user = newUser("Ana", "Alface")
let fakeuser = createFakeUser()

console.log("a variável user contém: ",user)
console.log("a variável user2 contém: ",fakeuser)



 
