
function validaCNPJ(cnpj) {

    var tamanho = cnpj.length - 2;
    var numeros = cnpj.substring(0, tamanho);
    var digitos = cnpj.substring(tamanho);
    var soma = 0;
    var pos = tamanho - 7;
    var resultado;

    var metadeInicial = cnpj.substring(0, 7);
    var metadeFinal = cnpj.substring(7);

    if (metadeInicial == metadeFinal) {
        return false;
    }

    if (cnpj.length != 14) {
        return false;
    }


    for (var i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }

    resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(0)) {
        return false;
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (k = tamanho; k >= 1; k--) {
        soma += numeros.charAt(tamanho - k) * pos--;
        if (pos < 2) {
            pos = 9;
        }

    }
    console.log(tamanho);

    resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(1)) {
        return false;
    }

    return true;
}

// SE TUDO DER CERTO VAI RETORNAR TRUE E O SISTEMA CONTINUARÁ O CADASTRO