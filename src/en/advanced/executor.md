# Executor

## Universal Parameters

### `Next Executor ID`

- Type: `int`
- Default: `0`

如果前一执行器为瞬时执行器，后一执行器将同时开始执行；否则后一执行器在前一执行器完成后开始执行。

## Add Force

### `Targets ID`

- Type: `Tuple<int, int[]>`
- Default: `(0, [])`

开始执行时，这些物体会受力 **（无论它们在哪里）**。

::: details 例如可以这样

![](/images/executor-addforce.gif)

:::

### `Force Mode`

- Type: `enum`
- Default: `附加加速度`

| 施力模式   | 触发器类型为停留时 | 否则         |
| ---------- | ------------------ | ------------ |
| 附加恒力   | 恒力场             | 恒冲量发生器 |
| 设定速度   | 恒速器             | 瞬时变速器   |
| 附加加速度 | 恒加速度场         | 恒速度附加器 |

### `Force Direction`

- Type: `enum`
- Default: `朝向 Y 轴`

### `Force Value`

- Type: `float`
- Default: `0`

负数表示反方向。

### `Use Falloff`

- Type: `bool`
- Default: `false`

勾选此项时，物体离触发器越远受力越小。

## Play Audio

### `Audio`

_待补充_

### `Volume`

- Type: `float`
- Default: `1`
- Constrain: `v: 0 <= v <= 1`

### `Loop`

- Type: `bool`
- Default: `false`

### `Execute on Level Start`

- Type: `bool`
- Default: `false`

## Set Spawn Point

### `Transform Mark`

- Type: `str`
- Default: 空
