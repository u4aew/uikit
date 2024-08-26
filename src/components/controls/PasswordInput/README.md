<!--GITHUB_BLOCK-->

## Password Input

<!--/GITHUB_BLOCK-->

```tsx
import {PasswordInput} from '@gravity-ui/uikit';
```

`TextInput` for typing passwords and other sensitive information. It can be rendered with copy and reveal buttons for more convinient usage.

### Copy button

The `showCopyButton` prop displays a "Copy" button next to the input field when a value is entered. This button allows users to easily copy the input value to their clipboard.

<!--LANDING_BLOCK
<ExampleBlock
    code={` <PasswordInput showCopyButton={true} /> `}
>
  <UIKit.PasswordInput showRevealButton={true}  />
</ExampleBlock>
LANDING_BLOCK-->

### Reveal button

The `showRevealButton` prop allows users to toggle the visibility of the password.

<!--LANDING_BLOCK
<ExampleBlock
    code={` <PasswordInput showRevealButton={true} /> `}
>
  <UIKit.PasswordInput showRevealButton={true}  />
</ExampleBlock>
LANDING_BLOCK-->

### Properties

`TextInput` [properties](https://github.com/gravity-ui/uikit/blob/main/src/components/controls/TextInput/README.md#properties), with some exceptions and additions:

- `value` is required property;
- `onUpdate` is required property;
- `type` is omitted;

| Name             | Description                                                                  |   Type    | Default |
| :--------------- | :--------------------------------------------------------------------------- | :-------: | :-----: |
| showCopyButton   | Show copy button                                                             | `boolean` | `false` |
| showRevealButton | Show reveal button                                                           | `boolean` | `false` |
| hasCopyTooltip   | Disable the tooltip for the copy button. The tooltip will not be displayed   | `boolean` | `true`  |
| hasRevealTooltip | Disable the tooltip for the reveal button. The tooltip will not be displayed | `boolean` | `true`  |

<!--GITHUB_BLOCK-->

#### Usage example

```tsx
function MyComponent() {
  const [value, setValue] = React.useState('');

  return (
    <PasswordInput
      showCopyButton={true}
      showRevealButton={true}
      onUpdate={setValue}
      value={value}
    />
  );
}
```

<!--GITHUB_BLOCK-->