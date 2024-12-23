import {useEffect} from 'react';

export type UseTimeoutProps = Parameters<
    (callback: VoidFunction, ms: number | null | undefined) => void
>;

export function useTimeout(callback: VoidFunction, ms: number | null | undefined): void {
    useEffect(() => {
        if (typeof ms !== 'number') {
            return undefined;
        }

        const timer = setTimeout(() => {
            callback();
        }, ms);

        return () => {
            clearTimeout(timer);
        };
    }, [callback, ms]);
}
