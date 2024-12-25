<!--GITHUB_BLOCK-->

# Loader

<!--/GITHUB_BLOCK-->

```tsx
import {Loader} from '@gravity-ui/uikit';
```

Компонент `Loader` (загрузчик) отображает процесс загрузки в виде мигающих полос. В отличие от `Spin` он используется в глобальных сценариях, например, для всей страницы или диалога.

### Размер

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Loader size="s" />
<Loader size="m" />
<Loader size="l" />
`}
>
    <UIKit.Loader size="s" />
    <UIKit.Loader size="m" />
    <UIKit.Loader size="l" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Loader size="s" />
<Loader size="m" />
<Loader size="l" />
```

<!--/GITHUB_BLOCK-->

`S` — маленький размер, используется, когда стандартный загрузчик слишком велик.

`M` — средний (базовый) размер, используется в большинстве случаев.

`L` — большой размер, используется, когда стандартный загрузчик слишком мал.

## Свойства

| Имя       | Описание                                       |        Тип        | Значение по умолчанию |
| :-------- | :--------------------------------------------- | :---------------: | :-------------------: |
| size      | Размер загрузчика.                             | `"s"` `"m"` `"l"` |         `"s"`         |
| className | Пользовательский CSS-класс корневого элемента. |     `string`      |                       |