import { routes } from "../routes.js";
import { extractQueryParams } from "../utils/extract-query-params.js";
import { Database } from "../utils/database.js";

const database = new Database()

export function routeHandler(request, response) {
    const route = routes.find((route) => {
        return route.method === request.method && route.path.test(request.url);
    });

    if (route) {
        const routeParams = request.url.match(route.path);

        if (routeParams && routeParams.groups) {

            const { query, ...params } = routeParams.groups;

            request.params = params;
            request.query = query ? extractQueryParams(query) : {}

        } else {
            request.params = {}; // Garante que params existe, mesmo se não houver grupos
        }

        return route.controller({ request, response, database });
    }

    return response.writeHead(404).end("Rota não encontrada!");
}
