import { createBrowserRouter } from 'react-router-dom'
import { routesConfig } from './config';
import type { NavRouteObject } from './config';
import type { RouteObject } from 'react-router-dom'

const createRoutes = () => {
    return createBrowserRouter(routesConfig as RouteObject[]);
}

export {
    createRoutes,
    routesConfig,
}

export type {
    NavRouteObject
}
