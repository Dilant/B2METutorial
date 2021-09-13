# Variable System

## 内置变量

### `G_Life`

- Type: `int`
- Constrain: `x: x >= 0`

玩家额外生命数。（不包括当前生命）

### `G_Score`

- Type: `int`
- Constrain: `x: x >= 0`

玩家当前得分。

### `G_Time`

- Type: `int`
- Constrain: `t: t >= 0`

当前用时。单位为毫秒。

### `G_Durability`

- Type: `float`
- Constrain: `x: 0 <= x <= 1`

当前玩家球耐久。

### `G_CameraDirection` <badge text="Four-directional"/>

- Type: `int`
- Constrain: `x: x in {0, 1, 2, 3}`

当前摄像机朝向。以世界坐标系为基准，`Z` 轴正方向为 `0`，`X` 轴正方向为 `1`，`Z` 轴负方向为 `2`，`X` 轴负方向为 `3`。

### `G_CameraAngle` <badge text="Free Look"/>

- Type: `int`
- Constrain: `θ: 0 <= θ < 360`

当前摄像机角度。以世界坐标系为基准，`Z` 轴正方向为 `0`，顺时针增加。

## 新建变量

`Create → Variable`

### `Variable Name`

- Type: `String`
- Default: empty

所有内置变量都以 `G_` 开头，请命名时注意避开。

### `Variable Type`

- Type: `enum{Int, Float, Bool}`
- Default: `Int`

### `Variable Value`

- Type: `int | float | bool`
- Default: `0 | 0 | false`

## 操纵变量

参见：[Advanced → Executor → Set Variable Value](/en/advanced/executor.md#set-variable-value)、[Advanced → Executor → Compare Variables](/en/advanced/executor.md#compare-variables)。
