// preenchimento do teclado
var valor;
function botao(num) {
  valor = document.calc.visor.value += num;
}

// limpeza
function reseta() {
  document.calc.visor.value = '';
}

// exibe resultado
function calcula() {
  var resultado = eval(valor);
  document.calc.visor.value = resultado.toLocaleString('pt-br');
}
