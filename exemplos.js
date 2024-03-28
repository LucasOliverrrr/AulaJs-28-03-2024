/*
const nome = "Cleber"
var idade = 17
let cpf = "123.123.123.12"

var linguagem = "JavaScript";
console.log("Aprendendo" + linguagem)

console.log("Oiiii", nome)

if(idade >=18){
    console.log("Pode tirar CNH")
}else{
    console.log("Não pode tirar CNH")
}

let x = 5

switch(x){
    case 1:
        console.log("Cair no case 1")
        break
    case 2:
        console.log("Cair no case 2")
        break   
    default:
        console.log("Cair no default")
}

const n1 = 2
const n2 = "3"

const n3 = n1 + n2;
console.log(n3)

console.log(1 == 1)
console.log(1 == "1")

for(let i = 0; i < 10; i++){

}

let i = 0;
soma = 0;

soma += Number;

while(i < 5){
    console.log("Oiii")
    i++;
}

do{
    console.log("Oiiii")
    i++
}while(i < 10)

v1 = []
v1[0] = 3.4
v1[1] = "abc"

console.log(v1.lenght)

for(let i = 0; i < v1.lenght; i++){
    console.log(v1[i])
}


for(const x of v1){
    console.log(x)
}

function hello(){
    console.log("Oiiii")
}

hello()
*/




//soma de dois numeros
function soma(a, b){
    return a + b
}

const res = soma(9,2)
console.log("A soma é" = res)





//o numero vezes 2
const dobro = function(n){
    return n * 2
}

const resposta = dobro(4)
console.log(dobro)






//toda vez que chamar essa função vai dar que o N=5
const triplo = function(n=5){
    return 3 * n
}

console.log(triplo())






//imprime o "hello"
const hello = () => console.log("Hello")

hello()






//o dobro do numero
const dobro = (valor) => valor * 2;
console.log(dobro(10))





//o triplo do numero
const triplo = (valor) =>{
    return valor * 3;
}
console.log(triplo(5))