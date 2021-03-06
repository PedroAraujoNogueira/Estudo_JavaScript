const carrinho = [
    '{"nome":,"Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Desafio: retornar um array apenas com o preços.

// 1º passo: transformar o JSON em um Objeto em cada posicao do array atraves do metodo JSON.parse()
const paraObjeto = json => JSON.parse(json)

// 2ª passo: retornar apenas o preco de cada objeto.
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)