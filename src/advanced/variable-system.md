# 变量系统

## 内置变量

### `G_Life`

- 类型：`int`
- 限制：`x: x >= 0`

玩家额外生命数。（不包括当前生命）

### `G_Score`

- 类型：`float`
- 限制：`x: x >= 0`

玩家当前得分。

### `G_Time`

- 类型：`int`
- 限制：`t: t >= 0`

当前用时。单位为毫秒。

### `G_Durability`

- 类型：`float`
- 限制：`x: 0 <= x <= 1`

当前玩家球耐久。

### `G_CameraDirection` <badge text="四向视角"/>

- 类型：`int`
- 限制：`x: x in {0, 1, 2, 3}`

当前摄像机朝向。以世界坐标系为基准，`Z` 轴正方向为 `0`，`X` 轴正方向为 `1`，`Z` 轴负方向为 `2`，`X` 轴负方向为 `3`。

### `G_CameraAngle` <badge text="自由视角"/>

- 类型：`int`
- 限制：`θ: 0 <= θ < 360`

当前摄像机角度。以世界坐标系为基准，`Z` 轴正方向为 `0`，顺时针增加。

### `G_PlayerVelocity`

- 类型：`float`
- 限制：`v: v >= 0`

当前玩家速度。

### `G_PlayerPositionX` `G_PlayerPositionY` `G_PlayerPositionZ`

- 类型：`float` `float` `float`

当前玩家坐标。

## 新建变量

`创建 → 变量`

### `变量名`

- 类型：`String`
- 默认值：空

所有内置变量都以 `G_` 开头，请命名时注意避开。

### `变量类型`

- 类型：`enum{Int, Float, Bool}`
- 默认值：`Int`

### `变量值`

- 类型：`int | float | bool`
- 默认值：`0 | 0 | false`

## 操纵变量

参见：[进阶 → 执行器 → 设置变量值](/advanced/executor.md#设置变量值)、[进阶 → 执行器 → 比较变量](/advanced/executor.md#比较变量)。
