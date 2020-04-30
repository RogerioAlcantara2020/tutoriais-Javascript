
function validaCPF(cpf) {

    var numeros = cpf.substring(0, 9);
    var digitos = cpf.substring(9);
    var soma = 0;
    var resultado;

    if (cpf.length != 11) {
        return false;
    }

    for (var i = 10; i > 1; i--) {
        soma += numeros.charAt(10 - i) * i;
    }

    resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(0)) {
        return false;
    }

    soma = 0;
    numeros = cpf.substring(0, 10);

    for (var k = 11; k > 1; k--) {
        soma += numeros.charAt(11 - k) * k;
    }
    
    resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
    

    if (resultado != digitos.charAt(1)) {
        return false;
    }

    return true;
}

//SE TUDO DER CERTO O RESULTADO SERÁ TRUE
// OU SEJA O CPF É VÁLIDO E O SISTEMA PODERÁ CONTINUAR O CADASTRO