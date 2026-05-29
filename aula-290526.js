const prompt = require('prompt-sync')();

const nome = prompt("Digite o nome: ");
const letra = prompt("Digite a letra a ser pesquisada: ");

const paraMaiusculo = (texto) => texto.toUpperCase();
const paraMinusculo = (texto) => texto.toLowerCase();

const posicao = nome.indexOf(letra);
const totalCaracteres = nome.length;
const nomeFormatado = nome;

console.log(
    `O nome digitado foi: ${nome}\n` +
    `A letra pesquisada foi: ${letra}\n` +
    `A posição da letra pesquisada foi: ${posicao}\n` +
    `O nome possui ${totalCaracteres} caracteres\n` +
    `Todo o texto em maiúsculo: ${paraMaiusculo(nomeFormatado)}\n` +
    `Todo o texto em minúsculo: ${paraMinusculo(nomeFormatado)}\n` +
    `Aluno: ${(nomeFormatado)} !\n`
);