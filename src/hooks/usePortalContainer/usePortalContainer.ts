import {useContext} from 'react';

import {PortalContext} from './PortalProvider';

export type UsePortalContainerResult = HTMLElement | null;

export function usePortalContainer(): UsePortalContainerResult {
    const context = useContext(PortalContext);

    let defaultContainer = null;

    if (typeof window === 'object') {
        defaultContainer = window.document.body;
    }

    return context.current ?? defaultContainer;
}
