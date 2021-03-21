/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var meuArray = [ 1, 2, 3, 4, 5 ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction (arg) {
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(arg)[2];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2 (arr, id) {
  return arr[id];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var meuArray2 = [ 1, 'Paulo', null, NaN, 1.2 ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction2(meuArray2, 0);
myFunction2(meuArray2, 1);
myFunction2(meuArray2, 2);
myFunction2(meuArray2, 3);
myFunction2(meuArray2, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (name) {
  var bookObj = {
    'Livro 01': {
      quantidadePaginas: 287,
      autor: 'Autor 01',
      editora: 'Editora 01'
    },
    'Livro 02': {
      quantidadePaginas: 465,
      autor: 'Autor 02',
      editora: 'Editora 02'
    },
    'Livro 03': {
      quantidadePaginas: 647,
      autor: 'Autor 03',
      editora: 'Editora 03'
    }
  };
  
  return name ? bookObj[name] : bookObj;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
book();

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
livro = book('Livro 01');
console.log('O autor do livro Livro 01 é ' + livro.autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
livro = book('Livro 02');
console.log('O livro Livro 02 foi publicado pela editora ' + livro.editora + '.');
