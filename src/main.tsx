import React from 'react';
import { createRoot } from 'react-dom/client';
import AppLayout from './layout/AppLayout';

import './styles/global.less';

function createApp() {
    const root = createRoot(document.getElementById('app') as HTMLElement);
    root.render(<AppLayout />);
}

createApp();