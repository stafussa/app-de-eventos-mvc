function mostrarTela(request, response) {
    response.render('produto');
}


function adicionarProduto(request, response) {
    console.log('Adicionando um novo produto');

    
    
    response.redirect('/produto');
}

module.exports = {
    mostrarTela,
    adicionarProduto
}

