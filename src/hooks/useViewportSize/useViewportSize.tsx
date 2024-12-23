import {useEffect, useState} from 'react';

export interface UseViewportSizeResult {
    width?: number;
    height?: number;
}

const getViewportSize = (): UseViewportSizeResult => ({
    width: window?.visualViewport?.width ?? window?.innerWidth ?? undefined,
    height: window?.visualViewport?.height ?? window?.innerHeight ?? undefined,
});

/**
 * A hook to get the size of the viewport when resizing
 *
 * @return - {width, height}
 */
export const useViewportSize = (): UseViewportSizeResult => {
    const [size, setSize] = useState<UseViewportSizeResult>(getViewportSize());

    useEffect(() => {
        const onResize = () => {
            let newSize = getViewportSize();
            if (newSize.width === size?.width && newSize.height === size?.height) {
                newSize = size;
            }
            setSize(newSize);
        };

        (window.visualViewport ?? window).addEventListener('resize', onResize);

        return () => {
            (window.visualViewport ?? window).removeEventListener('resize', onResize);
        };
    }, [size]);

    return size;
};
