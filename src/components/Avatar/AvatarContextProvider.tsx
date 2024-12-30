'use client';

import {AvatarContext} from './AvatarContext';
import type {AvatarContextProviderProps} from './types/main';

export const AvatarContextProvider = ({size, children}: AvatarContextProviderProps) => {
    return <AvatarContext.Provider value={{size}}>{children}</AvatarContext.Provider>;
};
