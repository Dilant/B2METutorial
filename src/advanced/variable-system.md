# 变量系统

## 新建变量

`创建 → 变量`

### `变量名`

- 类型：`str`
- 默认值：空

所有内置变量都以 `G_` 或 `C_` 开头，请命名时注意避开。

### `变量类型`

- 类型：`Literal`
- 默认值：`Int`

### `变量值`

- 类型：`int | float | bool`
- 默认值：`0 | 0 | false`

## 操纵变量

参见：[进阶 → 执行器 → 变量系统](/advanced/executor.md#变量系统)

## 内置变量

### `G_Score`

- 类型：`float`
- 限制：`x: x >= 0`

玩家当前得分。

### `G_Time`

- 类型：`int`
- 限制：`t: t >= 0`

当前用时。单位为物理帧 (5ms)。

### `G_Durability`

- 类型：`float`
- 限制：`x: 0 <= x <= 200`

主球耐久值。

### `G_Humidity`

- 类型：`float`
- 限制：`x: 0 <= x <= 100`

主球湿度值。

::: tip

为了防止玩家球在水池中点燃，当球泡在水池中时，湿度会略微大于 100。请不要将该变量手动设成大于 100 的值。

:::

### `G_Temperature`

- 类型：`float`

主球温度值。

### `G_Power`

- 类型：`float`
- 限制：`x: 0 <= x <= 100`

主球电量值。

### `G_Scale`

- 类型：`float`
- 限制：`x: 0.2 <= r <= 2`

主球半径倍数。

### `G_CameraDirection` <badge text="四向视角"/>

- 类型：`Literal[0, 1, 2, 3]`

当前摄像机朝向。以世界坐标系为基准，`Z+` 方向为 `0`，`X+` 方向为 `1`，`Z-` 方向为 `2`，`X-` 方向为 `3`。

### `G_CameraAngle` <badge text="自由视角"/>

- 类型：`float`
- 限制：`θ: 0 <= θ < 360`

当前摄像机角度。以世界坐标系为基准，`Z+` 方向为 `0`，顺时针增加。

### `G_PlayerVelocity` <badge text="只读" type="warning"/>

- 类型：`float`
- 限制：`v: v >= 0`

主球速度。

### `G_PlayerPositionX` `G_PlayerPositionY` `G_PlayerPositionZ` <badge text="只读" type="warning"/>

- 类型：`float` `float` `float`

主球坐标。

### `G_IsTouchGround`

- 类型：`bool`

触地检测。

### `G_IsTouchWall`

- 类型：`bool`

贴墙检测。

### `G_CurrentBallType`

- 类型：`Literal`

主球球种。

::: details 编号与球种的对应关系

| 编号   | 球种   |
| ------ | ------ |
| `-100` | 木球   |
| `-101` | 石球   |
| `-102` | 纸球   |
| `-103` | 冰球   |
| `-104` | 钢球   |
| `-105` | 橡胶球 |
| `-106` | 发光球 |
| `-107` | 气球   |
| `-108` | 粘球   |
| `-109` | 海绵球 |

:::

### `C_Key_Red`

- 类型：`int`
- 限制：`n: 0 <= n < 1000`

红钥匙数量。

### `C_Key_Green`

- 类型：`int`
- 限制：`n: 0 <= n < 1000`

绿钥匙数量。

### `C_Key_Blue`

- 类型：`int`
- 限制：`n: 0 <= n < 1000`

蓝钥匙数量。
