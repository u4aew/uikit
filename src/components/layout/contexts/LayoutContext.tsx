import {createContext} from 'react';

import {DEFAULT_LAYOUT_THEME} from '../constants';
import type {LayoutTheme, MediaType} from '../types';

interface LayoutContextProps {
    theme: LayoutTheme;
    activeMediaQuery: MediaType;
}

export const LayoutContext = createContext<LayoutContextProps>({
    theme: DEFAULT_LAYOUT_THEME,
    activeMediaQuery: 's',
});
