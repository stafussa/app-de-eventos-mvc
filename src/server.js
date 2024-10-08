const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const enableHotReload = require("./hot-reload");


var loginController = require("./controllers/loginController");
var cadastroController = require("./controllers/cadastroController");
var eventoController = require("./controllers/eventoController");




const app = express();

//configurações do body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Configurações do seu app Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública
app.use(express.static(path.join(__dirname, "public")));

// Habilitar hot-reload
enableHotReload(app);

// Rotas
app.get("/",loginController.exibirPaginaLogin);
app.get("/criar-conta",cadastroController.exibirPaginaDeCadastro);
app.get("/eventos", eventoController.exibirPaginaDeEventos)
app.get("/criar-evento", eventoController.exibirPaginaDeCriarEventos);




// Inicie o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});