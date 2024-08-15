function exibirPaginaDeEventos(request, response) {
    return response.render('eventos');
}

function exibirPaginaDeCriarEventos(request, response) {
    return response.render('criarEvento');
}

module.exports = { exibirPaginaDeEventos, exibirPaginaDeCriarEventos }