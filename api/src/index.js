import http from "node:http";

const server = http.createServer((request, response) => {
    console.log("Servidor recebeu uma requisição");
    response.end("Hello World!");
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
