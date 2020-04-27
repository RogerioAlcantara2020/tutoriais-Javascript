var nome_minusculo = "todo esse texto será alterado na minha função";
var nome_maisculo = "TODO ESSE TEXTO SERÁ ALTERADO NA MINHA FUNÇÃO";
// ********** FUNÇÃO PARA TODAS AS LETRAS MAÍUSCULAS **********\\

function tudoMaiusculo(nome_minusculo) {
    nome = nome_minusculo.toUpperCase();
    return nome;
}

//USANDO A FUNÇÃO tudoMaiusculo()
console.log("Mudar tudo para Maiusculo: " + tudoMaiusculo(nome_minusculo));



// ********** FUNÇÃO PARA AS PRIMEIRAS LETRAS MAÍUSCULAS **********\\

function primeiraMaiuscula(nome_minusculo) {
    var texto = nome_minusculo.toLowerCase().split(" ");
    var fatia;

    for (pos = 0; pos < texto.length; pos++) {
        fatia = texto[pos];
        texto[pos] = fatia[0].toUpperCase() + fatia.slice(1);
    }
    return texto.join(" ");
}

//USANDO A FUNÇÃO primeiraMaiuscula()
console.log("Mudar primeira letra para Maiusculo: " + primeiraMaiuscula(nome));

// ********** FUNÇÃO PARA TODAS LETRAS MINUSCULAS **********\\

function todasMinusculas(nome_maisculo) {
    var texto = nome_maisculo.toLowerCase();
    return texto;    
}
//USANDO A FUNÇÃO todasMinusculas
console.log("Mudar tudo para Minusculo: " + todasMinusculas(nome));