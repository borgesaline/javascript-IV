const comidas = ['salgadinho', 'crepe', 'bolo' ]

console.log(comidas[2])

comidas.forEach((comida, posicao) => {
    console.log(`Na posição ${posicao} temos a comida: ${comida}`);
})

let outrasComidas = comidas.concat("Jiló")
console.log(`comidas`, comidas);
console.log(`outras comidas`, outrasComidas);

