
function insereNumeroNoVisor(botao,visor) {
    visor.value += botao.value;
}

function resultadoDasOperacoes(visor) {
    visor.value = eval(visor.value);
}