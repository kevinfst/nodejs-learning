import { parseRoutePath } from "./utils/parseRoutePath.js"
export const routes = [
    {
        method: "GET",
        path: "/gym",
        controller: (request, response) => {
        /*  console.log(request.query)
            return response.writeHead(200).end("Lista de equipamentos") */
            return response.end(JSON.stringify(request.query))
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
            return response.end("Produto removido com ID: " + request.params.id)
        }
    }
].map((route) => ({
    ...route,
    path: parseRoutePath(route.path),
}))