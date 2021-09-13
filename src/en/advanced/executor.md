# Executor

## Universal Parameters

### `Executor Type`

- Type: `enum`
- Default: `Add Force`

### `Next Executor ID`

- Type: `int`
- Default: `0`

如果前一执行器为瞬时执行器，后一执行器将同时开始执行；否则后一执行器在前一执行器完成后开始执行。

## Add Force

### `Targets ID`

- Type: `Tuple<int, int[]>`
- Default: `(0, [])`
- Constrain: `(n, l): n >= 0`

开始执行时，这些物体会受力 **（无论它们在哪里）**。

::: details 例如可以这样

![](/images/executor-add-force.gif)

:::

### `Force Mode`

- Type: `enum{Apply Constant Force, Set Speed, Append Acceleration}`
- Default: `Append Acceleration`

| 施力模式   | 触发器类型为停留时 | 否则         |
| ---------- | ------------------ | ------------ |
| 附加恒力   | 恒力场             | 恒冲量发生器 |
| 设定速度   | 恒速器             | 瞬时变速器   |
| 附加加速度 | 恒加速度场         | 恒速度附加器 |

### `Force Direction`

- Type: `enum{To AxisY, To Center}`
- Default: `To AxisY`

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

- Type: `String`
- Default: empty

## Follow Way Path

### `Way Path ID`

- Type: `int`
- Default: `0`
- Constrain: `i: i > 0`

### `Targets ID`

- Type: `int...`
- Default: empty
- Constrain: `i: i > 0`

### `Enable Relative Position`

- Type: `bool`
- Default: `false`

### `Enable Relative Rotation`

- Type: `bool`
- Default: `false`

### `Rotation Align Tangent`

- Type: `bool`
- Default: `false`

### `Rotation Align Offset`

- Type: `Tuple<float, float, float>`
- Default: `(0, 0, 0)`

### `Rigidbody Mode`

- Type: `bool`
- Default: `false`

在刚体模式下，存在一个中心由 `Way Path` 控制移动，力度受 `Control Rigidbody Strength` 影响，半径由 `Control Rigidbody Distance` 决定的向心恒力场，`Targets` 刚体在这一恒力场的牵引下运动。

### `Control Rigidbody Strength` <badge text="Rigidbody Mode = true"/>

- Type: `float`
- Default: `0`

### `Control Rigidbody Distance` <badge text="Rigidbody Mode = true"/>

- Type: `float`
- Default: `0`
- Constrain: `x: x >= 0`

刚体超出这一距离时不会受力，回到距离内会继续受力。

### `Execute on Life Start`

- Type: `bool`
- Default: `false`

生命开始时执行的执行器不需要被触发器绑定。

## Break Joint

### `Targets ID`

- Type: `Tuple<int, int[]>`
- Default: `(0, [])`
- Constrain: `(n, l): n >= 0`

开始执行时，这些关节将断开，所有相关约束解除。

## Set Camera Offset

### `Camera Offset`

- Type: `Tuple<float, float, float>`
- Default: `(0, 3.5, -4.25)`

## Set Variable Value

### `Target Variable`

- Type: `String`
- Default: empty

### `Expression`

- Type: `String`
- Default: empty

可以使用 `+-*/()` 进行数学运算，使用 `@name ` （注意尾随空格）引用其它变量。

## Compare Variables

### `Variable A`

- Type: `String`
- Default: empty

### `Variable B`

- Type: `String`
- Default: empty

### `Equal Threshold`

- Type: `float`
- Default: `0`

::: tip

以下条件分支不会熔断，所有满足的分支连同 `Next Executor` 同时开始执行。

:::

### `Equal`

- Type: `int`
- Default: `0`

`|A - B| <= ε` 时执行该执行器。

### `Not Equal`

- Type: `int`
- Default: `0`

`|A - B| > ε` 时执行该执行器。

### `Greater`

- Type: `int`
- Default: `0`

`A > B` 时执行该执行器。

### `Less`

- Type: `int`
- Default: `0`

`A < B` 时执行该执行器。

## Disable Player Key

### `Disable Key`

- Type: `bool`
- Default: `true`

### `Player Key`

- Type: `enum{Move Forward, Move Backward, Move Left, Move Right, Camera Clockwise Rotate, Camera Anticlockwise Rotate, Camera Overlook, Function Key 1, Function Key 2, Function Key 3, Function Key 4}`
- Default: `Move Forward`

## Switch Camera Target

### `Camera Target ID`

- Type: `int`
- Default: `0`

仅对物理物体和当前玩家球 `ID = -99` 有效。
