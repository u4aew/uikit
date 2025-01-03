import {CircleExclamation, Link, Xmark} from '@gravity-ui/icons';
import {action} from '@storybook/addon-actions';
import type {Meta, StoryFn} from '@storybook/react';

import {Flex} from '../../layout';
import type {FilePreviewProps} from '../FilePreview';
import {FilePreview} from '../FilePreview';
import {FILE_TYPES} from '../types';

export default {
    title: 'Components/Data Display/FilePreview',
    component: FilePreview,
    parameters: {
        a11y: {
            element: '#storybook-root',
            config: {
                rules: [
                    {
                        id: 'color-contrast',
                        enabled: false,
                    },
                ],
            },
        },
    },
} as Meta<typeof FilePreview>;

const DefaultTemplate: StoryFn<FilePreviewProps> = (args) => {
    return <FilePreview {...args} />;
};

export const Default = DefaultTemplate.bind({});
Default.args = {
    file: {name: 'my-file.docs', type: 'text/docs'} as File,
    onClick: () => action('onClick'),
    actions: [
        {
            icon: <Link width={14} height={14} />,
            onClick: () => action('onLink'),
            title: 'Link',
        },
        {
            icon: <Xmark width={14} height={14} />,
            onClick: () => action('onClose'),
            title: 'Close',
        },
    ],
};

const CollageTemplate: StoryFn<FilePreviewProps> = () => {
    return (
        <div
            style={{
                display: 'grid',
                justifyItems: 'center',
                alignItems: 'center',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridGap: 10,
                width: 500,
            }}
        >
            {FILE_TYPES.map((fileType) => (
                <FilePreview
                    key={fileType}
                    file={{name: fileType, type: fileType} as File}
                    onClick={() => action('onClick')}
                    actions={[
                        {
                            icon: <Link width={14} height={14} />,
                            title: 'open on drive',
                            onClick: () => action('onLink'),
                        },
                        {
                            icon: <Xmark width={14} height={14} />,
                            title: 'delete a file',
                            onClick: () => action('onClose'),
                        },
                    ]}
                />
            ))}
            <FilePreview
                file={{name: 'my-image-from-thailand.jpg', type: 'image/png'} as File}
                imageSrc="https://storage.yandexcloud.net/uikit-storybook-assets/changelog-dialog-picture-2.png"
                actions={[
                    {
                        icon: <CircleExclamation width={14} height={14} />,
                        title: 'some hint',
                        onClick: () => action('onHint'),
                    },
                    {
                        icon: <Xmark width={14} height={14} />,
                        onClick: () => action('onClose'),
                        title: 'Close',
                    },
                ]}
            />
        </div>
    );
};

export const Collage = CollageTemplate.bind({});

const NoClickableTemplate: StoryFn<Omit<FilePreviewProps, 'actions'>> = (args) => {
    return (
        <Flex gap={4}>
            <FilePreview {...args} file={{name: 'No clickable', type: 'text/docs'} as File} />
            <FilePreview
                {...args}
                file={{name: 'No clickable with actions', type: 'text/docs'} as File}
                actions={[
                    {
                        icon: <Xmark width={14} height={14} />,
                        onClick: () => action('Are you sure you want to delete the file?'),
                        title: 'Close',
                    },
                ]}
            />
            <FilePreview
                {...args}
                file={{name: 'Clickable with actions', type: 'text/docs'} as File}
                onClick={() => action('onClick')}
                actions={[
                    {
                        icon: <Xmark width={14} height={14} />,
                        onClick: () => action('Are you sure you want to delete the file?'),
                        title: 'Close',
                    },
                ]}
            />
        </Flex>
    );
};

export const NoClickable = NoClickableTemplate.bind({});

const WithoutActionTooltipTemplate: StoryFn<Omit<FilePreviewProps, 'actions'>> = (args) => {
    return (
        <Flex gap={4}>
            <FilePreview
                {...args}
                file={{name: 'Clicable without tooltip', type: 'text/docs'} as File}
                onClick={() => action('onClick')}
                actions={[
                    {
                        icon: <Xmark width={14} height={14} />,
                        onClick: () => action('onClose'),
                        title: 'Close',
                        tooltipExtraProps: {
                            disabled: true,
                        },
                    },
                ]}
            />
        </Flex>
    );
};

export const WithoutActionTooltip = WithoutActionTooltipTemplate.bind({});
