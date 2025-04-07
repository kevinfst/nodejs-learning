import { parseRoutePath } from "./utils/parseRoutePath.js"
export const routes = [
    {
        method: "GET",
        path: "/gym",
        controller: ({ request, response, database }) => {
            const products = database.select("products")

            return response.end(JSON.stringify(products))
        },
    },

    {
        method: "POST",
        path: "/gym",
        controller: ({ request, response, database }) => {
            const { name, price } = request.body

            database.insert("products", { name, price} )

            return response.writeHead(201).end()
        }
    },

    {
        method: "DELETE",
        path: "/gym/:id",
        controller: ({ request, response }) => {
            return response.end("Produto removido com ID: " + request.params.id)
        }
    }
].map((route) => ({
    ...route,
    path: parseRoutePath(route.path),
}))