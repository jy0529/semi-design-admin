import React from 'react';
import { Nav } from '@douyinfe/semi-ui';
import { RouterProvider, Link } from 'react-router-dom';
import { createRoutes, routesConfig } from '../routes';
import type { NavRouteObject } from '../routes'
import { IconSemiLogo } from '@douyinfe/semi-icons';
import Style from './layout.module.less';

const router = createRoutes();


export default () => {
    const renderLinkNav = (routeConfig: NavRouteObject): any => {
        return (
            <Nav.Item itemKey={routeConfig.key} text={routeConfig.text} />
        )
    }

    const NavItems = routesConfig.map(routeConfig => renderLinkNav(routeConfig));

    return (
        <section className={Style.AppLayout}>
            <Nav
                bodyStyle={{ height: 320 }}
            >
                <Nav.Header logo={<IconSemiLogo style={{ height: '36px', fontSize: 36 }} />} text={'Semi 运营后台'} />
                { NavItems }
            </Nav>
            <main className={Style.AppPage}>
                <RouterProvider router={router} />
            </main>
        </section>
    )
}