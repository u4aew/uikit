'use client';

import * as React from 'react';

import {AvatarContext} from './AvatarContext';

export const useAvatarContext = () => {
    return React.useContext(AvatarContext);
};
