export const routes = [
    {
        method: "GET",
        path: "/gym",
        controller: (request, response) => {
            return response.writeHead(200).end("Lista de equipamentos")
        },
    },

    {
        method: "POST",
        path: "/gym",
        controller: (request, response) => {
            return response.writeHead(201).end(JSON.stringify(request.body))
        }
    },

    {
        method: "DELETE",
        path: "/gym/:id",
        controller: (request, response) => {
            return response.end("Removido!")
        }
    }
]