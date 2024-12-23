import {Fragment} from 'react';

import type {Meta, StoryFn} from '@storybook/react';

import {Loader} from '../Loader';
import type {LoaderProps} from '../Loader';

export default {
    title: 'Components/Feedback/Loader',
    component: Loader,
} as Meta;

const DefaultTemplate: StoryFn<LoaderProps> = (args) => <Loader {...args} />;
export const Default = DefaultTemplate.bind({});

const SizeTemplate: StoryFn<LoaderProps> = (args) => {
    return (
        <Fragment>
            <Loader {...args} size="s" />
            <span style={{margin: '16px'}} />
            <Loader {...args} size="m" />
            <span style={{margin: '16px'}} />
            <Loader {...args} size="l" />
        </Fragment>
    );
};

export const Size = SizeTemplate.bind({});
