import { routes } from "../routes.js";

export function routeHandler(request, response) {
    const route = routes.find((route) => {
        return route.method === request.method && route.path.test(request.url);
    });

    if (route) {
        const routeParams = request.url.match(route.path);

        if (routeParams && routeParams.groups) {
            const { ...params } = routeParams.groups;
            request.params = params;
        } else {
            request.params = {}; // Garante que params existe, mesmo se não houver grupos
        }

        return route.controller(request, response);
    }

    return response.writeHead(404).end("Rota não encontrada!");
}
