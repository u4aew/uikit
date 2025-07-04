import * as React from 'react';

import {FLATTEN_KEY} from '../../constants';
import type {SelectOptions, SelectProps} from '../../types';
import {getFilteredFlattenOptions, getFlattenOptions} from '../../utils';
import type {FlattenOptions} from '../../utils';

export interface UseSelectOptionsProps<T = any> {
    /** [Select options](https://gravity-ui.com/components/uikit/select#options). */
    options: SelectOptions<T>;
    /** Value to filter options. Used with `filterable: true` only. */
    filter?: string;
    /** Indicates that `filter` and `filterOption` properties can be used. */
    filterable?: boolean;
    /** Used to compare option with filter. Used with `filterable: true` only. */
    filterOption?: SelectProps['filterOption'];
}

function isFlattenOptions(options: UseSelectOptionsProps['options']): options is FlattenOptions {
    return Boolean((options as FlattenOptions)[FLATTEN_KEY]);
}

/**
 * Helps to manage options data before passing it into `Select` component.
 *
 * @param {SelectOptions} options
 * @returns preprared options for `Select` component.
 *
 * @example
 *
 * import {Select, getSelectFilteredOptions, useSelectOptions} from '@gravity-ui/uikit';
 *
 * function App() {
 *   const options = useSelectOptions({options: [{value: '1'}, {value: '2'}]});
 *   const filteredOptions = getSelectFilteredOptions(options);
 *   // Do some staff with prepared options
 *   return <Select options={options} />
 * }
 */
export function getSelectFilteredOptions<T>(options: SelectOptions<T>): SelectOptions<T> {
    if (!isFlattenOptions(options)) {
        throw Error('You should use options generated by useSelectOptions hook');
    }

    return options[FLATTEN_KEY].filteredOptions;
}

export function useSelectOptions<T extends any>(props: UseSelectOptionsProps<T>): SelectOptions<T> {
    const {filter = '', filterable, filterOption} = props;
    const options = React.useMemo(() => {
        return isFlattenOptions(props.options)
            ? props.options
            : (getFlattenOptions(props.options) as FlattenOptions);
    }, [props.options]);
    const filteredOptions = React.useMemo(() => {
        return filterable ? getFilteredFlattenOptions({options, filter, filterOption}) : options;
    }, [filter, filterable, filterOption, options]);
    options[FLATTEN_KEY]['filteredOptions'] = filteredOptions;

    return options;
}
