import http from "node:http";
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

const server = http.createServer(async (request, response) => {
    await jsonBodyHandler(request, response)
    routeHandler(request, response) 
});

server.listen(3333, () => {
    console.log("Servidor inicializado");
});

// Ao clicar Ctrl + C irá exibir a mensagem de Servidor finalizado
// SIGINT significa "Signal Interrupt" que seria o CTRL + C, pois ele "interrompe" o server. Seria um dos sinais do sistema Unix/Linux, ele é enviado para um processo ao pressionar CTRL + C no terminal.
process.on("SIGINT", () => {
    console.log("Servidor finalizado");
    process.exit();
});
