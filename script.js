// Estrutura de decisão IF e ELSE
/*
Trabalhe sempre com a previsão do que mais será usado o seu bloco de 
decisão e coloque sempre no início do código. Isso evita que o código rode
achar a condição que se aplica.
*/
var a = 6;
var b = 6;

if (a > b) {
  console.log(a + ' é maior que ' + b);
} else {
  if (a < b) {
    console.log(a + ' é menor que ' + b);
  }
  else {
    console.log(a + ' é igual a ' + b);
  }
}


// SWITCH
/*
Usado para evitar o "IF HELL"
 */

const expr = 'Grape';

switch (expr) {
  case "Laranjas":
    console.log("As laranjas custam $0.59 o quilo.");
    break;
  case "Maçãs":
    console.log("Maçãs custam $0.32 o quilo.");
    break;
  case "Bananas":
    console.log("Bananas custam $0.48 o quilo.");
    break;
  case "Cerejas":
    console.log("Cerejas custam $3.00 o quilo.");
    break;
  case "Mangas":
  case "Mamões":
    console.log("Mangas e mamões custam $2.79 o quilo.");
    break;
  default:
    console.log("Desculpe, estamos sem nenhuma " + expr + ".");
}

console.log("Tem algo mais que você gostaria de levar?");



var foo = 0;
switch (foo) {
  case -1:
    console.log('1 negativo');
    break;
  case 0: // foo é 0 então aqui o critério foi correspondido, então esse bloco vai rodar
    console.log(0)
  // NOTA: o break esquecido deveria estar aqui
  case 1: // nenhuma instrução break em 'case 0:' então essa instrução vai rodar também
    console.log(1);
    break; // o programa encontra esse break então não vai continuar para o 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}


/*
Multi-Caso - Operação Simples
Esse método toma vantagem do fato de não existir um break após um case e irá 
continuara  executar o próximo case independentemente se o case corresponde ao 
critério. Veja o título desta seção "O que acontece se eu esquecer um break?"

Esse é um exemplo de uma operação sequencial simples com a instrução switch, 
onde quatro valores diferentes fazem a mesma coisa..
*/


var Animal = 'Girafa';
switch (Animal) {
  case 'Vaca':
  case 'Girafa':
  case 'Cachorro':
  case 'Porco':
    console.log('Esse animal irá para Arca de Noé');
    break;
  case 'Dinossauro':
  default:
    console.log('Esse animal não vai.');
}


/*
Multi-Caso - Operações encadeadas 
Esse é um exemplo de múltiplas operações squenciais usando a instrução switch, onde, 
dependendo do número inteiro, você poderá receber outputs diferentes. Isso mostra que 
você pode alterar a ordem que você insere as instruções de case, e isso não precisa 
ser uma sequência numérica. Em JavaScript, você pode até mesmo misturar definições 
de strings dentro desses cases. 
*/
var foo = 10;
var output = 'Output: ';
switch (foo) {
  case 10:
    output += 'Então ';
  case 1:
    output += 'Qual ';
    output += 'É ';
  case 2:
    output += 'O Seu ';
  case 3:
    output += 'Nome';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Favor escolher um número de 0 à 6!');
}