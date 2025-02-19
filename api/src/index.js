import http from "node:http";

const server = http.createServer(async (request, response) => {
    const { method, url } = request

    if (method === "GET" && url === "/gym") {
        return response.end("Lista de equipamentos")

    }

    if (method === "POST" && url === "/gym") {
        const buffers = []

        for await (const chunk of request){
            buffers.push(chunk)
        }

        console.log(Buffer.concat(buffers).toString())

        return response.writeHead(201).end("Equipamento cadastrado!")
    }

    return response.writeHead(404).end("Rota não encontrada!")
    
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
