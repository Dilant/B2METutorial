# 触发器

::: tip

触发器需要配合执行器一起使用，请先阅读[触发器系统](/advanced/trigger-system.md)。

:::

## 通用参数

### `触发器类型`

- 类型：`Literal`
- 默认值：`物理`

### `激活`

- 类型：`bool`
- 默认值：`true`

触发器激活时才能生效。执行器可以在游戏中改变触发器的激活状态。

### `触发次数`

- 类型：`int`
- 默认值：`-1`
- 限制：`n: n >= -1`

`-1` 表示不限次数。

### `触发器 CD`

- 类型：`float`
- 默认值：`0`
- 限制：`t: t >= 0`

`0` 表示没有冷却时间。注意：**即使触发失败也会重置冷却时间**。

### `目标执行器编号`

- 类型：`int`
- 默认值：`0`

触发器生效时，该执行器开始执行。

## 物理

### `物理触发器类型`

- 类型：`Literal`
- 默认值：`进入`

`进入` 在进入触发器时生效；`停留` 在停留于触发器中时逐物理帧反复生效；`离开` 在离开触发器时生效。

### `触发目标编号`

- 类型：`list[int]`
- 默认值：`[]`

只有列表中的元件可以使触发器生效。

::: details 以下为具有特殊意义的编号

| 编号   | 物体类型             |
| ------ | -------------------- |
| `-1`   | 玩家球以外的所有刚体 |
| `-2`   | 所有刚体             |
| `-98`  | 所有玩家球           |
| `-99`  | 主球                 |
| `-100` | 玩家木球             |
| `-101` | 玩家石球             |
| `-102` | 玩家纸球             |
| `-103` | 玩家冰球             |
| `-104` | 玩家钢球             |
| `-105` | 玩家橡胶球           |
| `-106` | 玩家发光球           |
| `-107` | 玩家气球             |
| `-108` | 玩家粘球             |
| `-109` | 玩家海绵球           |

:::

### `发送物体到执行器`

- 类型：`bool`
- 默认值：`false`

勾选此项时，使触发器生效的任何元件将临时成为关联的执行器的目标编号。

## 按键

### `按键`

- 类型：`Literal`
- 默认值：`Space`

### `按键事件`

- 类型：`Literal`
- 默认值：`按下`

`按下` 在按下按键时生效；`按住` 在按住按键时逐物理帧反复生效；`弹起` 在松开按键时生效；`开关` 在首次按下按键时开始逐物理帧反复生效，再次按下时停止。

## 物理帧

::: tip

Ballex² 的物理帧频率为 200Hz。

:::

### 等待帧数

- 类型：`int`
- 默认值：`0`
- 限制：`f: f >= 0`
