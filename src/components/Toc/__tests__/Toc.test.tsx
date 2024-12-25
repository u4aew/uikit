import * as React from 'react';

import userEvent from '@testing-library/user-event';

import {render, screen} from '../../../../test-utils/utils';
import {Toc} from '../Toc';

const defaultItems = [
    {
        value: 'firstItem',
        content: 'First item',
        items: [],
    },
    {
        value: 'secondItem',
        content: 'Second item',
        items: [],
    },
    {
        value: 'thirdItem',
        content: 'Third item',
        items: [
            {
                value: 'firstChildItem',
                content: 'First child item',
                items: [],
            },
            {
                value: 'secondChildItem',
                content: 'Second child item',
                items: [],
            },
        ],
    },
    {
        value: 'fourthItem',
        content: 'Fourth item',
        items: [],
    },
];

const defaultValue = defaultItems[2].items[0].value;

const itemsWithLinks = defaultItems.map((item) => ({...item, href: `#${item.value}`}));

const defaultValueWithLink = itemsWithLinks[2].items[0].value;

const qaId = 'toc-component';

describe('Toc', () => {
    test('calls onUpdate with correct value', async () => {
        const nextValue = defaultItems[0].value;
        const nextTitle = defaultItems[0].content;
        const onUpdateFn = jest.fn();
        const onItemClickFn = jest.fn();
        const user = userEvent.setup();

        render(
            <Toc
                value={defaultValue}
                items={defaultItems}
                onUpdate={onUpdateFn}
                onItemClick={onItemClickFn}
            />,
        );
        const nextItem = screen.getByText(nextTitle);
        await user.click(nextItem);

        expect(onUpdateFn).toHaveBeenCalledWith(nextValue);
        expect(onItemClickFn).toHaveBeenCalledWith(expect.objectContaining({}));
    });

    test('calls onUpdate with correct item with link', async () => {
        const nextValue = itemsWithLinks[0].value;
        const nextTitle = itemsWithLinks[0].content;
        const onUpdateFn = jest.fn();
        const user = userEvent.setup();

        render(<Toc value={defaultValueWithLink} items={itemsWithLinks} onUpdate={onUpdateFn} />);
        const nextItem = screen.getByText(nextTitle);
        await user.click(nextItem);

        expect(onUpdateFn).toHaveBeenCalledWith(nextValue);
    });

    test('accessible for keyboard', async () => {
        const firstTitle = defaultItems[0].content;
        const secondValue = defaultItems[1].value;
        const onUpdateFn = jest.fn();

        const user = userEvent.setup();

        render(<Toc value={defaultValue} items={defaultItems} onUpdate={onUpdateFn} />);
        const firstItem = screen.getByText(firstTitle);
        await user.click(firstItem);
        await user.tab();
        await user.keyboard('{Enter}');

        expect(onUpdateFn).toHaveBeenCalledWith(secondValue);
    });

    test('accessible for keyboard with links', async () => {
        const firstTitle = itemsWithLinks[0].content;
        const secondValue = itemsWithLinks[1].value;
        const onUpdateFn = jest.fn();
        const user = userEvent.setup();

        render(<Toc value={defaultValueWithLink} items={itemsWithLinks} onUpdate={onUpdateFn} />);
        const firstItem = screen.getByText(firstTitle);
        await user.click(firstItem);
        await user.tab();
        await user.keyboard('{Enter}');

        expect(onUpdateFn).toHaveBeenCalledWith(secondValue);
    });

    test('add className', () => {
        const className = 'my-class';
        const onUpdateFn = jest.fn();

        render(
            <Toc
                className={className}
                value={defaultValue}
                items={defaultItems}
                onUpdate={onUpdateFn}
                qa={qaId}
            />,
        );
        const component = screen.getByTestId(qaId);

        expect(component).toHaveClass(className);
    });

    test('use passed ref for component', () => {
        const onUpdateFn = jest.fn();
        const ref = React.createRef<HTMLDivElement>();

        render(
            <Toc
                ref={ref}
                value={defaultValue}
                items={defaultItems}
                onUpdate={onUpdateFn}
                qa={qaId}
            />,
        );
        const component = screen.getByTestId(qaId);

        expect(ref.current).toBe(component);
    });

    test('value item should have aria-current attribute', async () => {
        const value = defaultItems[0].value;
        const content = defaultItems[0].content;

        render(<Toc value={value} items={defaultItems} qa={qaId} />);

        const currentItem = screen.getByRole('listitem', {current: true});

        expect(currentItem.textContent).toBe(content);
    });
});
