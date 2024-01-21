console.log("Boas-Vindas!");

let nome = "Lucas";
console.log(`Olá, ${nome}!`);

alert(`Olá, ${nome}!`);

let linguagem = prompt("Qual a liguagem de programação que você mais gosta?");
console.log(linguagem);

let valor1 = 5;
let valor2 = 2;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

resultado = valor1 - valor2;
console.log(`A diferença de ${valor1} e ${valor2} é igual a ${resultado}`);

let idade = prompt("Qual a sua idade?");
if(idade >= 18){
    console.log("Você é de maior!");
}else{
    console.log("Você é de menor!");
}

let numero = prompt("Digite um número");
if (numero > 0){
    console.log("Esse numero é positivo");
} else if(numero == 0){
    console.log("Esse numero é zero");
} else{
    console.log("Esse numero é negativo");
}

let i = 1;
while(i <= 10){
    console.log(i);
    i++
}

let nota = 8;
if (nota >= 7){
    console.log("Aprovado!");
} else {
    console.log("Reprovado!");
}

let q = Math.random();
console.log(q);

let a = parseInt(Math.random() * 10 + 1);
console.log(a);

let b = parseInt(Math.random() * 1000 + 1);
console.log(b);