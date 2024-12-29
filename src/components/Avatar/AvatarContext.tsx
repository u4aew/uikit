import * as React from 'react';

import type {AvatarContextType} from './types/main';

export const AvatarContext = React.createContext<AvatarContextType | null>(null);
