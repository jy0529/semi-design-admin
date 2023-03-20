import type { RouteObject } from 'react-router-dom'

export type NavRouteObject = Omit<{
    [Property in keyof RouteObject]: RouteObject[Property]
}, 'children'> & {
    text: string;
    key: string;
    children?: NavRouteObject[]
}

function lazy(path = '') {
    return async function() {
        return {
            Component: (await import(/* @vite-ignore */ path)).default,
        }
    }
}

export const routesConfig: NavRouteObject[] = [
    {
        text: '首页',
        key: 'home',
        path: '/',
        lazy: lazy('../pages/Index'),
    },
    {
        text: 'Demo',
        key: 'demo',
        path: '/demo',
        lazy: lazy('../pages/Demo'),
    },
    {
        text: '统计报表',
        path: '/dashboard',
        key: 'dashboard',
        children: [
            {
                text: '概览仪表盘',
                key: 'dashboard/base',
                path: 'base',
                lazy: lazy('../pages/dashboard/Base'),
            },
            {
                text: '统计报表',
                key: 'dashboard/detail',
                path: 'detail',
                lazy: lazy('../pages/dashboard/Detail'),
           },
        ]
    }
]